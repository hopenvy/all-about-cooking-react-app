
import { Link } from 'react-router-dom'

const RecipeItem = ({ dish }) => {
    return (
        <ul className="list-recipes">
            <li>
                <figure className="box-img"><img src={dish.image} alt={dish.dish} /></figure>
                <div className="overflow">
                    <h4>{dish.dish}</h4>
                    <p>{dish.preparation}
                    </p>
                    <Link to={`/recipes/${dish._id}`} className="details-button">
                        Details
                    </Link>
                </div>
            </li>

        </ul>
    )
}

export default RecipeItem;