CREATE TABLE IF NOT EXISTS Account (
       email VARCHAR(50) PRIMARY KEY,
       full_name VARCHAR(50),
       auth_token VARCHAR(256),
       password_digest VARCHAR(256)
);


CREATE TABLE IF NOT EXISTS Restaurant (
       restaurant_name VARCHAR(50) PRIMARY KEY,
       location VARCHAR(50),
       restaurant_phone VARCHAR(10),
       email VARCHAR(50),
       CONSTRAINT fk_restaurant_to_account
                  FOREIGN KEY (email)
                  REFERENCES Account(email)
                  ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Inventory (
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

CREATE TABLE IF NOT EXISTS Menu (
       restaurant_name VARCHAR(50),
       item_name VARCHAR(50),
       price Integer,
       CONSTRAINT fk_menu_to_restaurant
                  FOREIGN KEY (restaurant_name)
                  REFERENCES Restaurant(restaurant_name)
                  ON DELETE CASCADE,
       CONSTRAINT pk_menu PRIMARY KEY (restaurant_name, item_name)
);

CREATE TABLE IF NOT EXISTS Ingredient (
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

CREATE TABLE IF NOT EXISTS Ticket (
       order_num Integer,
       order_date DATE,
       email VARCHAR(50),
       CONSTRAINT pk_ticket PRIMARY KEY (order_num),
       CONSTRAINT fk_ticket_to_account
                  FOREIGN KEY (email)
                  REFERENCES Account(email)
);

CREATE TABLE IF NOT EXISTS Item_Order (
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

