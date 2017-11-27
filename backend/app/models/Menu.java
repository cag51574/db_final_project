package models;

import io.ebean.Model;

import play.data.validation.Constraints;
import javax.persistence.Entity;
import javax.persistence.Id;

// Restaurant entity which is managed by Ebean.
@Entity
public class Menu extends Model {

    @Id
    public String restaurant_name;

    public String item_name;

    public int price;

}
