package controllers;

import play.mvc.*;
import java.util.Date;

// Play Imports
import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import play.libs.concurrent.HttpExecutionContext;
import play.libs.Json;
import com.fasterxml.jackson.databind.JsonNode;

// Util Imports
import java.util.List;
import java.util.stream.Collectors;

// Our Imports
import repository.TicketRepository;
import repository.UserRepository;
import models.User;
/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class TicketController extends Controller {

    private final TicketRepository ticketRepository;
    private final UserRepository userRepository;
    private final HttpExecutionContext httpExecutionContext;

    @Inject
    public TicketController(TicketRepository ticketRepository,
                            UserRepository userRepository,
                          HttpExecutionContext httpExecutionContext) {
        this.ticketRepository = ticketRepository;
        this.userRepository = userRepository;
        this.httpExecutionContext = httpExecutionContext;
    }


    public Result all() {
        return ok(Json.toJson(ticketRepository.all()));
    }

    public Result byRestaurant(String name) {
        return ok(Json.toJson(ticketRepository.byRestaurant(name)));
    }

    public Result new_item(String order_num, String auth_token) {
        if (order_num == null) {
            return badRequest("Missing email.");
        }
        if (auth_token == null) {
            return badRequest("Missing date.");
        }
        User user = userRepository.findByAuthToken(auth_token);
        String email;
        if (user == null) {
            email = "monopoly@fcc.com";
        } else {
            email = user.getEmailAddress();
        }
        ticketRepository.new_item(Integer.parseInt(order_num), email, new Date());
        return ok();
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
        return ticketRepository.all().thenApplyAsync(list -> ok(Json.toJson(list)), httpExecutionContext.current());
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
