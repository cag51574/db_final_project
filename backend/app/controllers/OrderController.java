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
import repository.OrderRepository;
/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class OrderController extends Controller {

    private final OrderRepository orderRepository;
    private final HttpExecutionContext httpExecutionContext;

    @Inject
    public OrderController(OrderRepository orderRepository,
                          HttpExecutionContext httpExecutionContext) {
        this.orderRepository = orderRepository;
        this.httpExecutionContext = httpExecutionContext;
    }


    public Result all() {
        return ok(Json.toJson(orderRepository.all()));
    }

    public Result byRestaurant(String name) {
        return ok(Json.toJson(orderRepository.byRestaurant(name)));
    }

    public Result new_item(String order_num, String restaurant_name, String item_name) {
        if (order_num == null) {
            return badRequest("Missing order number.");
        }
        if (restaurant_name == null) {
            return badRequest("Missing email.");
        }
        if (item_name == null) {
            return badRequest("Missing date.");
        }
        orderRepository.new_item(Integer.parseInt(order_num), restaurant_name, item_name, 1);
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
        return orderRepository.all().thenApplyAsync(list -> ok(Json.toJson(list)), httpExecutionContext.current());
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
