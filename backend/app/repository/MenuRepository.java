package repository;

import io.ebean.Ebean;
import io.ebean.EbeanServer;
import models.Menu;
import play.db.ebean.EbeanConfig;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.List;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 *
 */
public class MenuRepository {

    private final EbeanServer ebeanServer;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public MenuRepository(EbeanConfig ebeanConfig, DatabaseExecutionContext executionContext) {
        this.ebeanServer = Ebean.getServer(ebeanConfig.defaultServer());
        this.executionContext = executionContext;
    }

    public List<Menu> all() {
        return ebeanServer.find(Menu.class).findList();
    }

    public List<Menu> byRestaurant(String name) {
        return ebeanServer.find(Menu.class).where().eq("restaurant_name", name).setDistinct(true).findList();
    }

    public void new_item(String restaurant_name, String item_name, int price) {
        Menu menu= new Menu();
        menu.restaurant_name = restaurant_name;
        menu.item_name = item_name;
        menu.price = price;
        ebeanServer.save(menu);
    }
}
