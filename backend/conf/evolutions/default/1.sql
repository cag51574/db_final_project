# Schema

# --- !Ups

CREATE TABLE Restaurant (
       restaurant_name VARCHAR(50) PRIMARY KEY,
       location VARCHAR(50),
       owner_first_name VARCHAR(50),
       owner_last_name VARCHAR(50),
       restaurant_phone VARCHAR(10)
);

CREATE TABLE Inventory (
       restaurant_name VARCHAR(50),
       ingredient_name VARCHAR(50),
       quantity Double Precision,
       unit VARCHAR(10),
       CONSTRAINT fk_inventory_to_restaurant
                  FOREIGN KEY (restaurant_name)
                  REFERENCES Restaurant(restaurant_name)
                  ON DELETE CASCADE,
       CONSTRAINT pk_inventory PRIMARY KEY (restaurant_name, ingredient_name)
);

CREATE TABLE Menu (
       restaurant_name VARCHAR(50),
       item_name VARCHAR(50),
       price Integer,
       CONSTRAINT fk_menu_to_restaurant
                  FOREIGN KEY (restaurant_name)
                  REFERENCES Restaurant(restaurant_name)
                  ON DELETE CASCADE,
       CONSTRAINT pk_menu PRIMARY KEY (restaurant_name, item_name)
);

CREATE TABLE Ingredient (
       restaurant_name VARCHAR(50),
       item_name VARCHAR(50),
       ingredient_name VARCHAR(50),
       portion Double Precision,
       unit VARCHAR(10),
       CONSTRAINT fk_ingredient_to_menu
                  FOREIGN KEY (restaurant_name, item_name)
                  REFERENCES Menu(restaurant_name, item_name)
                  ON DELETE CASCADE,
       CONSTRAINT fk_ingredient_to_inventory
                  FOREIGN KEY (restaurant_name, ingredient_name)
                  REFERENCES Inventory(restaurant_name, ingredient_name)
                  ON DELETE CASCADE,
       CONSTRAINT pk_ingredient PRIMARY KEY (restaurant_name, item_name, ingredient_name)
);

CREATE TABLE Ticket (
       order_num Integer,
       customer_name VARCHAR(50),
       order_date DATE,
       CONSTRAINT pk_ticket PRIMARY KEY (order_num)
);

CREATE TABLE Item_Order (
       order_num Integer,
       item_name VARCHAR(50),
       restaurant_name VARCHAR(50),
       item_quantity Integer,
       CONSTRAINT fk_item_order_to_ticket
                  FOREIGN KEY (order_num)
                  REFERENCES Ticket(order_num)
                  ON DELETE CASCADE,
       CONSTRAINT fk_item_order_to_menu
                  FOREIGN KEY (restaurant_name, item_name)
                  REFERENCES Menu(restaurant_name, item_name)
                  ON DELETE CASCADE
);


# --- !Downs

DROP TABLE Inventory;
DROP TABLE Ticket;
DROP TABLE Item_Order;
DROP TABLE Menu;
DROP TABLE Portion;
DROP TABLE Restaurant;
