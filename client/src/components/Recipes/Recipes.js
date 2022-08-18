import { useContext } from "react";

import { DishContext } from "../../context/DishContext";
import CatalogItem from "./RecipeItem/RecipeItem";

const Recipes = () => {
    const { dishes } = useContext(DishContext);
    console.log(dishes)
    return (
        <div>
            <section id="content">
                <h3>Recipes</h3>
                {dishes.length > 0
                ? dishes.map(x => <CatalogItem key={x._id} dish={x} />)
                : <h3 className="no-articles">No dishes yet</h3>
            }
            </section>
        </div>


    );
};

export default Recipes;