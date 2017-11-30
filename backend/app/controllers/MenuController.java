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
import repository.MenuRepository;
/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class MenuController extends Controller {

    private final MenuRepository menuRepository;
    private final HttpExecutionContext httpExecutionContext;

    @Inject
    public MenuController(MenuRepository menuRepository,
                          HttpExecutionContext httpExecutionContext) {
        this.menuRepository = menuRepository;
        this.httpExecutionContext = httpExecutionContext;
    }


    public Result all() {
        return ok(Json.toJson(menuRepository.all()));
    }

    public Result byRestaurant(String name) {
        return ok(Json.toJson(menuRepository.byRestaurant(name)));
    }

    public Result new_item() {
        JsonNode json = request().body().asJson();
        String restaurant_name = json.findPath("restaurant_name").asJson();
        String item_name = json.findPath("item_name").asJson();
        int price = json.findPath("price").asJson();
        if (restaurant_name == null) {
            return badRequest("Missing restaurant name.");
        }
        if (item_name == null) {
            return badRequest("Missing item name.");
        }
        if (price == 0) {
            return badRequest("Missing price.");
        }

        inventoryRepository.new_item(restaurant_name, item_name, price);
        return ok();
    }
}
