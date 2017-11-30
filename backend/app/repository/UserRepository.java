package repository;

import io.ebean.Ebean;
import io.ebean.EbeanServer;
import models.User;
import play.db.ebean.EbeanConfig;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.List;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 *
 */
public class UserRepository {

    private final EbeanServer ebeanServer;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public UserRepository(EbeanConfig ebeanConfig, DatabaseExecutionContext executionContext) {
        this.ebeanServer = Ebean.getServer(ebeanConfig.defaultServer());
        this.executionContext = executionContext;
    }

    public User findByAuthToken(String auth_token) {
        return ebeanServer.find(User.class).where().eq("auth_token", auth_token).findUnique();
    }

    public User findByEmail(String email) {
        return ebeanServer.find(User.class).where().eq("email", email).findUnique();
    }

    public User create(String email, String password, String full_name) {
        User user = new User();
        user.email = email;
        user.password_digest = User.create_digest(password);
        user.full_name = full_name;
        ebeanServer.save(user);
        return user;
    }

    public CompletionStage<User> findByEmailAddressAndPassword(String emailAddress, String password) {
        return supplyAsync(() -> ebeanServer.find(User.class).where().eq("email", emailAddress.toLowerCase()).eq("password_digest", password).findUnique(), executionContext);
    }
}
