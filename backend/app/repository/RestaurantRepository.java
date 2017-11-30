package repository;

import io.ebean.Ebean;
import io.ebean.EbeanServer;
import models.Restaurant;
import play.db.ebean.EbeanConfig;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.List;
import java.util.stream.Collectors;

import models.User;
import repository.UserRepository;
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


    public List<Restaurant> all() {
        return ebeanServer.find(Restaurant.class).findList();
    }

    public Restaurant byName(String name) {
        return ebeanServer.find(Restaurant.class).where().eq("restaurant_name", name).findUnique();
    }

    public CompletionStage<List<String>> allNames() {
        return supplyAsync(() -> ebeanServer.find(Restaurant.class).findList().stream().map(r -> r.restaurant_name).collect(Collectors.toList()), executionContext);
    }


    public void create(String name, String location, String phone, String email){
        Restaurant r = new Restaurant();
        r.restaurant_name = name;
        r.location = location;
        r.restaurant_phone = phone;
        r.email = email;
        ebeanServer.save(r);
    }

    public void delete(String name){
        Restaurant r = ebeanServer.find(Restaurant.class).where().eq("restaurant_name", name).findUnique();
        if(r != null){
            ebeanServer.deletePermanent(r);
        }
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
