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


    public CompletionStage<List<Inventory>> all() {
        return supplyAsync(() -> ebeanServer.find(Inventory.class).findList(), executionContext)
        .thenApply(list -> {
                /*
                Inventory inv = new Inventory();
                inv.setRestaurant("Siri Thai");
                inv.setIngredient_name("Broccoli");
                inv.setQuantity(5);
                inv.setUnit("Florets");
                ebeanServer.save(inv);
                */
                return list;
            });
    }
}
