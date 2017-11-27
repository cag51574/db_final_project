
package models;

import io.ebean.Model;

import play.data.validation.Constraints;
import javax.persistence.Entity;
import javax.persistence.Id;

// Restaurant entity which is managed by Ebean.
@Entity
public class Restaurant extends Model {

       public int order_num;

       public String item_name;

       public String restaurant_name;
       
       public int item_quantity;
}
