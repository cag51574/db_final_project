package repository;

import io.ebean.Ebean;
import io.ebean.EbeanServer;
import models.Ingredient;
import play.db.ebean.EbeanConfig;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.List;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 *
 */
public class IngredientRepository {

    private final EbeanServer ebeanServer;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public IngredientRepository(EbeanConfig ebeanConfig, DatabaseExecutionContext executionContext) {
        this.ebeanServer = Ebean.getServer(ebeanConfig.defaultServer());
        this.executionContext = executionContext;
    }

    public List<Ingredient> all() {
        return ebeanServer.find(Ingredient.class).findList();
    }

    public List<Ingredient> byRestaurantAndItem(String restaurant, String item) {
        return ebeanServer.find(Ingredient.class).where().eq("restaurant_name", restaurant).eq("item_name", item).findList();
    }

    public void new_ingredient (String restaurant_name, String item_name, String ingredient_name, int portion, String unit) {
        Ingredient ingredient = new Ingredient;
        ingredient.restaurant_name = restaurant_name;
        ingredient.item_name = item_name;
        ingredient.ingredient_name = ingredient_name;
        ingredient.portion = portion;
        ingredient.unit = unit;
        eBean.save(ingredient);
    }
}
