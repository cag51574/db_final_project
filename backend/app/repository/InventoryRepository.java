package repository;

import io.ebean.Ebean;
import io.ebean.EbeanServer;
import models.Inventory;
import play.db.ebean.EbeanConfig;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.List;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 *
 */
public class InventoryRepository {

    private final EbeanServer ebeanServer;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public InventoryRepository(EbeanConfig ebeanConfig, DatabaseExecutionContext executionContext) {
        this.ebeanServer = Ebean.getServer(ebeanConfig.defaultServer());
        this.executionContext = executionContext;
    }

    public List<Inventory> all() {
        return ebeanServer.find(Inventory.class).findList();
    }

    public List<Inventory> byRestaurant(String name) {
        return ebeanServer.find(Inventory.class).where().eq("restaurant_name", name).findList();
    }

    // Need to add error handeling
    public void new_item(String restaurant_name, String ingredient_name, int quantity, String unit) {
        Inventory inventory = new Inventory();
        inventory.restaurant_name = restaurant_name;
        inventory.ingredient_name = ingredient_name;
        inventory.quantity = quantity;
        inventory.unit = unit;
        ebeanServer.save(inventory);
    }
}
