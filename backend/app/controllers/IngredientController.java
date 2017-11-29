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

}
