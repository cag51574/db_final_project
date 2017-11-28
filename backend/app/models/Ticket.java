package models;

import io.ebean.Model;
import java.util.Date;

import play.data.validation.Constraints;
import javax.persistence.Entity;
import javax.persistence.Id;

// Restaurant entity which is managed by Ebean.
@Entity
public class Ticket extends Model {

       public int order_num;

       public String customer_name;

       public Date Norder_date;
}
