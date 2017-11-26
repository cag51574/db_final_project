package models;

import io.ebean.Model;

import play.data.validation.Constraints;
import javax.persistence.Entity;
import javax.persistence.Id;

// Inventory entity which is managed by Ebean.
@Entity
public class Inventory extends Model {

    public String restaurant_name;

    public String ingredient_name;

    public int quantity;

    public String unit;
}
