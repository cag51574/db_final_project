# --- Sample Dataset

# --- !Ups

INSERT INTO Restaurant (restaurant_name, location, restaurant_phone, email) VALUES ('Kellys', 'Athens', '6789778888', 'monopoly@fcc.com');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Chicken',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Pork',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Curry Sauce',5000,'Packet');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','BBQ Sauce',5000,'Packet');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Jerk Sauce',5000,'Packet');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Beef',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Greens',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Macroni',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Potato',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Spices',5000,'Tsp');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Cabbage',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Mixed Cheese',5000,'Gram');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Milk',5000,'Oz');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Butter',5000,'Tsp');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Flour',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Bean Rice',300,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Kellys','Bean',300,'Lb');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Kellys','Jerk Chicken',8);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Jerk Chicken','Chicken',2,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Jerk Chicken','Jerk Sauce',1,'Packet');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Kellys','Curry Chicken',8);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Curry Chicken','Chicken',2,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Curry Chicken','Curry Sauce',1,'Packet');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Kellys','BBQ Chicken',8);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','BBQ Chicken','Chicken',2,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Curry Chicken','BBQ Sauce',1,'Packet');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Kellys','Mac N Cheese',3);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Mac N Cheese','Macroni',1,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Mac N Cheese','Mixed Cheese',15,'Gram');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Mac N Cheese','Milk',20,'Oz');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Mac N Cheese','Butter',4,'Tsp');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Kellys','Spicy Cabbage',3);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Spicy Cabbage','Cabbage',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Spicy Cabbage','Spices',3,'Tsp');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Kellys','Rice',3);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Rice','Bean Rice',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Rice','Bean',.5,'Lb');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Kellys','Jerk Pork',8);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Jerk Pork','Pork',2,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Jerk Pork','Jerk Sauce',1,'Packet');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Kellys','BBQ Pork',8);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','BBQ Pork','Pork',2,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','BBQ Pork','BBQ Sauce',1,'Packet');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Kellys','Beef Patty',3);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Beef Patty','Beef',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Beef Patty','Spices',2,'Tsp');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Beef Patty','Potato',1,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Beef Patty','Flour',.5,'Lb');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Kellys','Collard Greens',3);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Collard Greens','Greens',1,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Kellys','Collard Greens','Spices',2,'Tsp');

# --- !Downs

delete from Ingredient;
delete from Inventory;
delete from Item_Order;
delete from Ticket;
delete from Menu;
delete from Restaurant;
delete from Account;
