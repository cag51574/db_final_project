package models;

import io.ebean.Model;

import play.data.validation.Constraints;
import javax.persistence.Entity;
import javax.persistence.Id;

// Account entity which is managed by Ebean.
@Entity
public class Account extends Model {

    public String email;

    public String full_name;

    public String auth_token;

    public String password_digest;


}
