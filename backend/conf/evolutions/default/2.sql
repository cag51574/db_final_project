# --- Sample Dataset

# --- !Ups

INSERT INTO Account (email, full_name, auth_token, password_digest) VALUES ('monopoly@fcc.com', 'Verizon and ATT', '', 'changeme');


INSERT INTO Restaurant (restaurant_name, location, restaurant_phone, email) VALUES ('McDonalds', 'Atlanta', '6789777023', 'monopoly@fcc.com');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Salad Pack',1000,'Packet');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Chicken',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Nugget Seasoning',1000, 'Tsp');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Tomato',1000,'Slice');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Cheese',1000,'Slice');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Lettuce',1000,'Gram');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Special Sauce',1000,'Tsp');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Turkey',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Soy Patties',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Bread',5000,'Piece');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Beef',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Potato',500,'Lb');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Salt',5000,'Tsp');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Black Pepper',5000,'Tsp');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Milk',5000,'0z');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Ice Cream',5000,'Scoop');
INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds','Coke',5000,'0z');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('McDonalds','Chicken McNuggets',5);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Chicken McNuggets','Chicken',2,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Chicken McNuggets','Nugget Seasoning',4,'Tsp');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('McDonalds','Chicken Sandwich',6);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Chicken Sandwich','Chicken',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Chicken Sandwich','Tomato',2,'Slice');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Chicken Sandwich','Lettuce',1,'Gram');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Chicken Sandwich','Bread',2,'Piece');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Chicken Sandwich','Special Sauce',1,'Tsp');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Chicken Sandwich','Cheese',1,'Slice');

INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('McDonalds','Cheeseburger',5);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Cheeseburger','Beef',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Cheeseburger','Tomato',2,'Slice');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Cheeseburger','Lettuce',1,'Gram');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Cheeseburger','Bread',2,'Piece');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Cheeseburger','Special Sauce',1,'Tsp');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Cheeseburger','Cheese',2,'Slice');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('McDonalds','Fries',3);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Fries','Potato',2,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Fries','Salt',2,'Tsp');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Fries','Black Pepper',2,'Tsp');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('McDonalds','Drink',2);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Drink','Coke',22,'Oz');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('McDonalds','Milkshake',4);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Milkshake','Milk',15,'Oz');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Milkshake','Ice Cream',2,'Scoop');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('McDonalds','Veggie burger',6);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Veggie burger','Soy Patties',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Veggie burger','Tomato',2,'Slice');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Veggie burger','Lettuce',1,'Gram');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Veggie burger','Bread',2,'Piece');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Veggie burger','Special Sauce',1,'Tsp');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Veggie burger','Cheese',1,'Slice');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('McDonalds','Salad',8);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Salad','Salad Pack',1,'Packet');
INSERT INTO Menu (restaurant_name,item_name,price) VALUES ('McDonalds','Turkey burger',5);
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Turkey burger','Turkey',.5,'Lb');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Turkey burger','Tomato',2,'Slice');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Turkey burger','Lettuce',1,'Gram');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Turkey burger','Bread',2,'Piece');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Turkey burger','Special Sauce',1,'Tsp');
INSERT INTO Ingredient (restaurant_name,item_name,ingredient_name,portion,unit) VALUES ('McDonalds','Turkey burger','Cheese',1,'Slice');




# --- !Downs

delete from Ingredient;
delete from Inventory;
delete from Item_Order;
delete from Ticket;
delete from Menu;
delete from Restaurant;
delete from Account;
