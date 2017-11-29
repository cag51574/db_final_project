# --- Sample Dataset

# --- !Ups


INSERT INTO Restaurant (restaurant_name, location, restaurant_phone, email) VALUES ('Taste Of India', 'Athens', '4045497192', 'monopoly@fcc.com');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Chicken',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Potato',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Onion',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Flour',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Rice',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Butter',5000,'Tsp');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Garlic',5000,'Tsp');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Spices',5000,'Tsp');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Butter Chicken Masala',500,'Packet');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Tikka Masala',500,'Packet');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Masala Spice',5000,'Tsp');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Tomato Sauce',5000,'Oz');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Salt',5000,'Tsp');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Black Pepper',5000,'Tsp');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Lasi',5000,'Oz');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Icecream',5000,'Scoop');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Tandori Masala',1000,'Packet');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Salad Pack',1000,'Packet');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('Taste Of India','Mixed Vegetables',1000,'Packet');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Taste Of India','Samosas',5);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Samosas','Potato',1,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Samosas','Flour',1,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Samosas','Masala Spice',3,'Tsp');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Samosas','Garlic',1,'Tsp');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Samosas','Onion',1,'Lb');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Taste Of India','Biryani',9);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Biryani','Rice',1,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Biryani','Mixed Vegetables',1,'Packet');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Biryani','Spices',3,'Tsp');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Taste Of India','Butter Chicken',12);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Butter Chicken','Chicken',2,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Butter Chicken','Butter',5,'Tsp');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Butter Chicken','Onion',1,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Butter Chicken','Butter Chicken Masala',1,'Packet');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Butter Chicken','Tomato Sauce',12,'Oz');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Taste Of India','Chicken Tikka Masala',12);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Chicken Tikka Masala','','',);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Chicken Tikka Masala','Chicken',2,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Chicken Tikka Masala','Butter',5,'Tsp');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Chicken Tikka Masala','Onion',1,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Chicken Tikka Masala','Tikka Masala',1,'Packet');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Chicken Tikka Masala','Tomato Sauce',12,'Oz');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Taste Of India','Pakora',5);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Pakora','Potato',1,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Pakora','Onion',1,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Pakora','Flour',1,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Pakora','Salt',2,'Tsp');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Pakora','Black Pepper',2,'Tsp');

INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Taste Of India','Mango Lasi',5);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Mango Lasi','Lasi',15,'Oz');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Taste Of India','Garlic Naan',3);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Garlic Naan','Flour',1,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Garlic Naan','Garlic',2,'Tsp');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Taste Of India','Tandori Chicken',15);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Tandori Chicken','Chicken',2,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Tandori Chicken','Tandori Masala',1,'Packet');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Taste Of India','Ice Cream',4);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Ice Cream','Icecream',2,'Scoop');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('Taste Of India','Garden Salad',6);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('Taste Of India','Garden Salad','Salad Pack',1,'Packet');

# --- !Downs

delete from Ingredient;
delete from Inventory;
delete from Item_Order;
delete from Ticket;
delete from Menu;
delete from Restaurant;
delete from Account;
