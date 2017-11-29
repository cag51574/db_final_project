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
import repository.InventoryRepository;
/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class InventoryController extends Controller {

    private final InventoryRepository inventoryRepository;
    private final HttpExecutionContext httpExecutionContext;

    @Inject
    public InventoryController(InventoryRepository inventoryRepository,
                          HttpExecutionContext httpExecutionContext) {
        this.inventoryRepository = inventoryRepository;
        this.httpExecutionContext = httpExecutionContext;
    }


    public Result all() {
        return ok(Json.toJson(inventoryRepository.all()));
    }

    public Result byRestaurant(String name) {
        return ok(Json.toJson(inventoryRepository.byRestaurant(name)));
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
