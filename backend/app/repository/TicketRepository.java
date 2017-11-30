package repository;

import java.util.Date;
import io.ebean.Ebean;
import io.ebean.EbeanServer;
import models.Ticket;
import play.db.ebean.EbeanConfig;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.List;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 *
 */
public class TicketRepository {

    private final EbeanServer ebeanServer;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public TicketRepository(EbeanConfig ebeanConfig, DatabaseExecutionContext executionContext) {
        this.ebeanServer = Ebean.getServer(ebeanConfig.defaultServer());
        this.executionContext = executionContext;
    }

    public List<Ticket> all() {
        return ebeanServer.find(Ticket.class).findList();
    }

    public List<Ticket> byRestaurant(String name) {
        return ebeanServer.find(Ticket.class).where().eq("restaurant_name", name).findList();
    }

    // Need to add error handeling
    public void new_item(int order_num, String email, Date date) {
        Ticket ticket = new Ticket();
        ticket.order_num = order_num;
        ticket.email = email;
        ticket.order_date = date;
        ebeanServer.save(ticket);
    }
}
