package models;

import io.ebean.Model;

import play.data.validation.Constraints;
import javax.persistence.Entity;
import javax.persistence.Id;

// Ingredient entity which is managed by Ebean.
@Entity
public class Ingredient extends Model {

     public String restaurant_name;

     public String item_name;

     public String ingredient_name;

     public double portion;

     public String unit;
}
