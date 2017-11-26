package models;

import io.ebean.Model;

import play.data.validation.Constraints;
import javax.persistence.Entity;
import javax.persistence.Id;

// Restaurant entity which is managed by Ebean.
@Entity
public class Restaurant extends Model {

    @Id
    public String restaurant_name;

    public String location;

    public String owner_first_name;

    public String owner_last_name;

    public String restaurant_phone;
}
