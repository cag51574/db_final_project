# Schema

# --- !Ups

CREATE TABLE Restaurant (
       r_name VARCHAR(50) PRIMARY KEY,
       location VARCHAR(50),
       owner VARCHAR(50)
);

CREATE TABLE Inventory (
       restaurant VARCHAR(50),
       ingredient_name VARCHAR(50),
       quantity Integer,
       unit VARCHAR(10),
       CONSTRAINT fk_restaurant
                  FOREIGN KEY (restaurant)
                  REFERENCES Restaurant(r_name)
);

CREATE TABLE Menu (
       restaurant VARCHAR(50),
       item_name VARCHAR(50),
       price Integer
);

CREATE TABLE Ingredient (
       restaurant VARCHAR(50),
       item_name VARCHAR(50),
       ingredient_name VARCHAR(50)
);

CREATE TABLE Ticket (
       order_num Integer,
       name VARCHAR(50)
);

CREATE TABLE Item_Order (
       order_num Integer,
       item_name VARCHAR(50),
       restaurant VARCHAR(50),
       amount Integer
);

CREATE TABLE Portion (
       restaurant VARCHAR(50),
       menu_item VARCHAR(50),
       ingredient_name VARCHAR(50),
       amount Integer
);

# --- !Downs

DROP TABLE Restaurant;
DROP TABLE Inventory;
DROP TABLE Menu;
DROP TABLE Ingredient;
DROP TABLE Item_Order;
DROP TABLE Ticket;
DROP TABLE Portion;
