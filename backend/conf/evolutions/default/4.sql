# --- Sample Dataset

# --- !Ups


INSERT INTO Restaurant (restaurant_name, location, restaurant_phone, email) VALUES ('Moes', 'Rome', '6782459123', 'monopoly@fcc.com');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Chicken',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Tomato',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Onion',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Tortilla',1000,'Piece');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Rice',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Mini Tortilla',1000,'Piece');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Lettuce',10000,'Gram');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Pico',5000,'Tsp');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Bowl',1000,'Piece');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Shredded Cheese',300,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Melted Cheese',1000,'Oz');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Avocado',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Sourcream',5000,'Tsp');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Coke',5000,'Oz');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Tortilla Chips',1000,'Packet');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Moes','Beans',350,'Lb');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Moes','Burrito',9);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito','Chicken',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito','Onion',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito','Tomato',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito','Lettuce',15,'Gram');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito','Shredded Cheese',.3,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito','Rice',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito','Tortilla',1,'Piece');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito','Pico',4,'Tsp');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito','Beans',1,'Lb');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Moes','Nachos',9);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Nachos','Chicken',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Nachos','Onion',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Nachos','Tomato',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Nachos','Lettuce',15,'Gram');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Nachos','Melted Cheese',5,'Oz');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Nachos','Rice',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Nachos','Tortilla Chips',1,'Packet');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Nachos','Pico',4,'Tsp');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Moes','Quesdilla',9);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Quesdilla','Chicken',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Quesdilla','Onion',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Quesdilla','Tomato',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Quesdilla','Lettuce',15,'Gram');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Quesdilla','Shredded Cheese',.8,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Quesdilla','Rice',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Quesdilla','Tortilla',1,'Packet');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Quesdilla','Pico',4,'Tsp');

INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Moes','Drink',2);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Drink','Coke',22,'Oz');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Moes','Chips',2);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Chips','Tortilla Chips',1,'Packet');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Moes','Guacamole',1);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Guacamole','Avocado',.5,'Lb');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Moes','Sour Cream',1);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Sour Cream','Sourcream',4,'Tsp');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Moes','Burrito Bowl',9);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito Bowl','Chicken',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito Bowl','Onion',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito Bowl','Tomato',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito Bowl','Lettuce',15,'Gram');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito Bowl','Shredded Cheese',.3,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito Bowl','Rice',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito Bowl','Bowl',1,'Piece');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito Bowl','Pico',4,'Tsp');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Burrito Bowl','Beans',1,'Lb');

INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Moes','Mini Burrito',5);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Mini Burrito','Chicken',.3,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Mini Burrito','Onion',.3,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Mini Burrito','Tomato',.3,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Mini Burrito','Lettuce',10,'Gram');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Mini Burrito','Shredded Cheese',.2,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Mini Burrito','Rice',.25,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Mini Burrito','Mini Tortilla',1,'Piece');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Mini Burrito','Pico',2,'Tsp');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Mini Burrito','Beans',.5,'Lb');

INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Moes','Tacos',3);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Tacos','Chicken',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Tacos','Onion',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Tacos','Lettuce',15,'Gram');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Tacos','Mini Tortilla',1,'Piece');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Moes','Tacos','Pico',4,'Tsp');


# --- !Downs

delete from Ingredient;
delete from Inventory;
delete from Item_Order;
delete from Ticket;
delete from Menu;
delete from Restaurant;
delete from Account;
