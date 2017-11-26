# --- Sample Dataset

# --- !Ups

INSERT INTO Restaurant (restaurant_name, location, owner_first_name, owner_last_name, restaurant_phone) VALUES ('McDonalds', 'Atlanta', 'Ronald', 'McDonald', '6789777023');

INSERT INTO Inventory (restaurant_name, ingredient_name, quantity, unit) VALUES ('McDonalds', 'Broccoli', 14, 'Florets');

# --- !Downs
delete from Restaurant;
delete from Inventory;
