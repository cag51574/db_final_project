# --- Sample Dataset

# --- !Ups

INSERT INTO Restaurant (r_name, location, owner) VALUES ('McDonalds', 'Atlanta', 'Ronald McDonald');
INSERT INTO Restaurant (r_name, location, owner) VALUES ('Barberitos', 'Athens', 'Bobby Barberito');
INSERT INTO Restaurant (r_name, location, owner) VALUES ('The Last Resort', 'Athens', 'Lasty Resorto');

INSERT INTO Inventory (restaurant, ingredient_name, quantity, unit) VALUES ('Barberitos', 'Broccoli', 14, 'Florets');

# --- !Downs
delete from Restaurant;
