package repository;

import io.ebean.Ebean;
import io.ebean.EbeanServer;
import play.db.ebean.EbeanConfig;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 *
 */
public class CustomerRepository {

    private final EbeanServer ebeanServer;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public CustomerRepository(EbeanConfig ebeanConfig, DatabaseExecutionContext executionContext) {
        this.ebeanServer = Ebean.getServer(ebeanConfig.defaultServer());
        this.executionContext = executionContext;
    }

    /*

    public CompletionStage<List<Customer>> all() {
        return supplyAsync(() -> ebeanServer.find(Customer.class).findList(), executionContext)
            .thenApply(list -> {
                    return list;
                });
    }

    public CompletionStage<List<String>> allNames() {
        return supplyAsync(() -> ebeanServer.find(Customer.class).findList().stream().map(r -> r.restaurant_name).collect(Collectors.toList()), executionContext);
    }
    */
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
