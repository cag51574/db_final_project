package repository;

import io.ebean.Ebean;
import io.ebean.EbeanServer;
import models.Restaurant;
import play.db.ebean.EbeanConfig;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 *
 */
public class RestaurantRepository {

    private final EbeanServer ebeanServer;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public RestaurantRepository(EbeanConfig ebeanConfig, DatabaseExecutionContext executionContext) {
        this.ebeanServer = Ebean.getServer(ebeanConfig.defaultServer());
        this.executionContext = executionContext;
    }


    public CompletionStage<List<Restaurant>> all() {
        return supplyAsync(() -> ebeanServer.find(Restaurant.class).findList(), executionContext)
            .thenApply(list -> {
                    return list;
                });
    }

    public CompletionStage<List<String>> allNames() {
        return supplyAsync(() -> ebeanServer.find(Restaurant.class).findList().stream().map(r -> r.restaurant_name).collect(Collectors.toList()), executionContext);
    }

    /*
    public CompletionStage<Map<String, String>> options() {
        return supplyAsync(() -> ebeanServer.find(Company.class).orderBy("name").findList(), executionContext)
                .thenApply(list -> {
                    HashMap<String, String> options = new LinkedHashMap<String, String>();
                    for (Company c : list) {
                        options.put(c.id.toString(), c.name);
                    }
                    return options;
                });
    }
    */
}
