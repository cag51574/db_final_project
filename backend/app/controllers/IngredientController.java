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
import repository.IngredientRepository;
/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */

public class IngredientController extends Controller {

    private final IngredientRepository ingredientRepository;
    private final HttpExecutionContext httpExecutionContext;

    @Inject
    public IngredientController(IngredientRepository ingredientRepository,
                          HttpExecutionContext httpExecutionContext) {
        this.ingredientRepository = ingredientRepository;
        this.httpExecutionContext = httpExecutionContext;
    }


    public Result all() {
        return ok(Json.toJson(ingredientRepository.all()));
    }

    public Result byRestaurantAndItem(String restaurant, String item) {
        return ok(Json.toJson(ingredientRepository.byRestaurantAndItem(restaurant, item)));
    }

    public Result new_ingredient() {
        JsonNode json = request().body().asJson();
        String restaurant_name = json.findPath("restaurant_name").textValue();
        String item_name = json.findPath("item_name").textValue();
        String ingredient_name = json.findPath("ingredient_name").textValue();
        int quantity = json.findPath("portion").intValue();
        String unit = json.findPath("unit").textValue();
        if (restaurant_name == null) {
            return badRequest("Missing restaurant name.");
        }
        if (item_name == null) {
            return badRequest("Missing item name.");
        }
        if (ingredient_name == null) {
            return badRequest("Missing ingredient name.");
        }
        if (quantity == 0) {
            return badRequest("Missing quantity.");
        }
        if (unit == null) {
            return badRequest("Missing unit.");
        }

        ingredientRepository.new_ingredient(restaurant_name, item_name, ingredient_name, quantity, unit);
        return ok();
    }

}
