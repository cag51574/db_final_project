package repository;

import java.util.Date;
import io.ebean.Ebean;
import io.ebean.EbeanServer;
import models.Order;
import play.db.ebean.EbeanConfig;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.List;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 *
 */
public class OrderRepository {

    private final EbeanServer ebeanServer;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public OrderRepository(EbeanConfig ebeanConfig, DatabaseExecutionContext executionContext) {
        this.ebeanServer = Ebean.getServer(ebeanConfig.defaultServer());
        this.executionContext = executionContext;
    }

    public List<Order> all() {
        return ebeanServer.find(Order.class).findList();
    }

    public List<Order> byRestaurant(String name) {
        return ebeanServer.find(Order.class).where().eq("restaurant_name", name).findList();
    }

    // Need to add error handeling
    public void new_item(int order_num, String restaurant_name, String item_name, int quantity) {
        Order order = new Order();
        order.order_num = order_num;
        order.restaurant_name = restaurant_name;
        order.item_quantity = quantity;
        order.item_name = item_name;
        ebeanServer.save(order);
    }
}
