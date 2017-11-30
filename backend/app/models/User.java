package models;

import io.ebean.Model;

import play.data.validation.Constraints;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import io.ebean.*;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;
// Account entity which is managed by Ebean.
@Entity
@Table(name="Account")
public class User extends Model {

    @Id
    public String email;

    public String full_name;

    public String auth_token;

    public String password_digest;

    public static Finder<String, User> find = new Finder<>(User.class);

    public static String create_digest(String password) {
        try {
            return new String(MessageDigest.getInstance("SHA-512").digest(password.getBytes("UTF-8")));
        }
        catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
            return "DIDNTWORK";
        }
    }

    public String getEmailAddress() {
        return email;
    }

    public String createToken() {
        auth_token = UUID.randomUUID().toString();
        save();
        return auth_token;
    }
}
