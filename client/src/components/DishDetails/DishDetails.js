import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

import * as dishService from '../../services/dishService';

const DishDetails = ({
    addComment,
}) => {
    const { dishId } = useParams();
    const [currentDish, setCurrentDish] = useState({});


    const [comment, setComment] = useState({
        username: '',
        comment: '',
    });



    useEffect(() => {
        dishService.getOne(dishId)
            .then(result => {
                setCurrentDish(result);
            });
    })

    const addCommentHandler = (e) => {
        e.preventDefault();

        const result = `${comment.username}: ${comment.comment}`;

        addComment(dishId, result);

    }

    const onChange = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const { user } = useAuthContext();


    return (
        <section id="dish-details">
            <h3>Details</h3>
            <ul className="list-recipes details">
                <li>
                    <figure className="box-img"><img src={currentDish.image} alt={currentDish.dish} /></figure>
                    <div className="details">
                        <h4>{currentDish.dish}</h4>
                        <label htmlFor="ingredients">Ingredients</label>
                        <p className='ingredients'>
                            {[[currentDish.ingredients]].map(function (nested) {
                                return nested.map(function (element) {
                                    return element + ' '
                                });
                            })
                            }
                        </p>
                        <label htmlFor="preparation">Preparation</label>
                        <p>{currentDish.preparation}</p>

                    </div>
                </li>
            </ul>
            {
                user.email
                    ? < div className="buttons">
                        <Link to={`/dishes/${dishId}/edit`} className="button">
                            Edit
                        </Link>
                        <Link to="#" className="button">
                            Delete
                        </Link>
                    </div>
                    : < div className="buttons">
                        <Link to="/" className="button">
                            Home
                        </Link>
                    </div>
            }
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form-comment" onSubmit={addCommentHandler}>
                    <p className="user-email">{user.email}</p>

                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        onChange={onChange}
                        value={comment.comment}
                    />

                    <input
                        className="add-comment"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </article>
        </section >
    );
};

export default DishDetails;