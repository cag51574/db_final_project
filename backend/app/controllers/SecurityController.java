package controllers;

import com.fasterxml.jackson.databind.node.ObjectNode;
import models.User;
import play.data.Form;
import play.data.FormFactory;
import play.data.validation.Constraints;
import play.libs.Json;
import play.mvc.*;

import javax.inject.Inject;


import static java.util.concurrent.CompletableFuture.supplyAsync;

// Play Imports
import java.util.concurrent.CompletionStage;
import play.libs.concurrent.HttpExecutionContext;
import com.fasterxml.jackson.databind.JsonNode;

// Util Imports
import java.util.List;
import java.util.stream.Collectors;

// Our Imports
import repository.UserRepository;
/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class SecurityController extends Controller {
    @Inject FormFactory formFactory;

    public final static String AUTH_TOKEN_HEADER = "X-AUTH-TOKEN";
    public static final String AUTH_TOKEN = "auth_token";


    public static User getUser() {
        return (User)Http.Context.current().args.get("user");
    }


    private final UserRepository userRepository;
    private final HttpExecutionContext httpExecutionContext;

    @Inject
    public SecurityController(UserRepository userRepository,
                          HttpExecutionContext httpExecutionContext) {
        this.userRepository = userRepository;
        this.httpExecutionContext = httpExecutionContext;
    }


    public CompletionStage<Result> login() {
        Form<Login> loginForm = formFactory.form(Login.class).bindFromRequest();
        if (loginForm.hasErrors()) {
            return supplyAsync(() -> badRequest(loginForm.errorsAsJson()), httpExecutionContext.current());
        }
        Login login = loginForm.get();

        return userRepository.findByEmailAddressAndPassword(login.emailAddress, login.password)
            .thenApplyAsync(user -> {
                    if (user == null) {
                        return unauthorized();
                    } else {
                        String auth_token = user.createToken();
                        ObjectNode auth_token_json = Json.newObject();
                        auth_token_json.put(AUTH_TOKEN, auth_token);
                        return ok(auth_token_json);
                    }
                }, httpExecutionContext.current());
    }

    public static class Login {

        @Constraints.Required
        @Constraints.Email
        public String emailAddress;

        @Constraints.Required
        public String password;

    }

   /*
    public CompletionStage<Result> restaurants() {
        return restaurantRepository.all().thenApplyAsync(list -> {
                return ok(Json.toJson(list));
            }, httpExecutionContext.current());
    }

    public CompletionStage<Result> restaurantNames() {
        return restaurantRepository.allNames().thenApplyAsync(list -> ok(Json.toJson(list)), httpExecutionContext.current());
    }

    public CompletionStage<Result> inventories() {
        return inventoryRepository.all().thenApplyAsync(list -> ok(Json.toJson(list)), httpExecutionContext.current());
    }
    */
    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     *
    public Result index() {
        return ok("Your new application is ready.");
    }
    */
}
