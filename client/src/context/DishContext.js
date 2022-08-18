import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as dishService from '../services/dishService';

export const DishContext = createContext();

const dishReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_DISHES':
            return action.payload.map(x => ({ ...x, comments: [] }));
        case 'ADD_DISH':
            return [...state, action.payload];
        case 'FETCH_DISH_DETAILS':
        case 'EDIT_DISH':
            return state.map(x => x._id === action.dishId ? action.payload : x);
        case 'ADD_COMMENT':
            return state.map(x => x._id === action.dishId ? { ...x, comments: [...x.comments, action.payload] } : x);
        case 'REMOVE_DISH':
            return state.filter(x => x._id !== action.dishId);
        default:
            return state;
    }
};

export const DishProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [dishes, dispatch] = useReducer(dishReducer, []);

    useEffect(() => {
        dishService.getAll()
            .then(result => {
                const action = {
                    type: 'ADD_DISHES',
                    payload: result
                };

                dispatch(action);
            });
    }, []);

    const selectDish = (dishId) => {
        return dishes.find(x => x._id === dishId) || {};
    };

    const fetchDishDetails = (dishId, dishDetails) => {
        dispatch({
            type: 'FETCH_DISH_DETAILS',
            payload: dishDetails,
            dishId,
        })
    }

    const addComment = (dishId, comment) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
            dishId
        });
    };

    const dishAdd = (dishData) => {
        dispatch({
            type: 'ADD_DISH',
            payload: dishData,
        })

        navigate('/recipes');
    };

    const dishEdit = (dishId, dishData) => {
        dispatch({
            type: 'EDIT_DISH',
            payload: dishData,
            dishId,
        });
    };

    const dishRemove = (dishId) => {
        dispatch({
            type: 'REMOVE_DISH',
            dishId
        })
    }

    return (
        <DishContext.Provider value={{
            dishes,
            dishAdd,
            dishEdit,
            addComment,
            fetchDishDetails,
            selectDish,
            dishRemove
        }}>
            {children}
        </DishContext.Provider>
    );

}
