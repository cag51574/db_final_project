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
}
