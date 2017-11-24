package controllers;

import play.mvc.*;

import views.html.*;

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
import models.Restaurant;
import repository.RestaurantRepository;
/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    private final RestaurantRepository restaurantRepository;
    private final HttpExecutionContext httpExecutionContext;

    @Inject
    public HomeController(RestaurantRepository restaurantRepository, HttpExecutionContext httpExecutionContext) {
        this.restaurantRepository = restaurantRepository;
        this.httpExecutionContext = httpExecutionContext;
    }

    public CompletionStage<Result> restaurants() {
        return restaurantRepository.all().thenApplyAsync(list -> {
                return ok(Json.toJson(list));
            }, httpExecutionContext.current());
    }

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {
        return ok(index.render("Your new application is ready."));
    }

}
