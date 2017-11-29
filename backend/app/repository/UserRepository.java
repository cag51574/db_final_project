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

    public CompletionStage<User> findByEmailAddressAndPassword(String emailAddress, String password) {
        return supplyAsync(() -> ebeanServer.find(User.class).where().eq("email", emailAddress.toLowerCase()).eq("password_digest", password).findUnique(), executionContext);
    }
}
