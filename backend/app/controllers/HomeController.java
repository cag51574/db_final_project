package controllers;

import play.mvc.*;

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
import repository.InventoryRepository;
/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    private final RestaurantRepository restaurantRepository;
    private final InventoryRepository inventoryRepository;
    private final HttpExecutionContext httpExecutionContext;





    @Inject
    public HomeController(RestaurantRepository restaurantRepository,
                          InventoryRepository inventoryRepository,
                          HttpExecutionContext httpExecutionContext) {
        this.restaurantRepository = restaurantRepository;
        this.inventoryRepository = inventoryRepository;
        this.httpExecutionContext = httpExecutionContext;
    }

   

    public Result preflight(String all) {
        response().setHeader("Access-Control-Allow-Origin", "*");
        response().setHeader("Allow", "*");
        response().setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
        response().setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Referer, User-Agent");
        return ok();
    }

    public CompletionStage<Result> restaurantNames() {
        return restaurantRepository.allNames().thenApplyAsync(list -> ok(Json.toJson(list)), httpExecutionContext.current());
    }
   /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {
        return ok("Your new application is ready.");
    }

}
