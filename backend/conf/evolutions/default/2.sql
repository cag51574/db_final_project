# --- Sample Dataset

# --- !Ups

INSERT INTO Restaurant (r_name, location, owner) VALUES ('McDonalds', 'Atlanta', 'Ronald McDonald');
INSERT INTO Restaurant (r_name, location, owner) VALUES ('Barberitos', 'Athens', 'Bobby Barberito');
INSERT INTO Restaurant (r_name, location, owner) VALUES ('The Last Resort', 'Athens', 'Lasty Resorto');


# --- !Downs
delete from Restaurant;
