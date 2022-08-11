import { useState } from 'react'
import { useFormInputValidation } from "react-form-input-validation";

const Create = () => {
    const [fields, errors, form] = useFormInputValidation({
        dish: "",
        ingredients: "",
    }, {
        dish: "required",
        ingredients: 'required',
    });

    const [list, setList] = useState([]);

    const [value, setValue] = useState("");
    const addIngredient = () => {

        let tempArr = list;
        if (value !== '') {
            tempArr.push(value);

            setList(tempArr);

            setValue("")
        }

    };

    const deleteIngredient = (index) => {

        let temp = list.filter((item, i) => i !== index);

        setList(temp);

    };


    console.log(fields);
    return (
        <div>
            <section id="recipe-page" className="content auth">
                <form
                    id="create-recipe"
                    noValidate
                    autoComplete="off"
                    onSubmit={form.handleSubmit}
                >
                    <div className="recipe-container">
                        <div className="brand-logo" />
                        <h1>Create new recipe</h1>
                        <p>
                            <label htmlFor="recipe-name">Name of the dish:</label>
                            <input
                                type="text"
                                id="dish"
                                name="dish"
                                onBlur={form.handleBlurEvent}
                                onChange={form.handleChangeEvent}
                            />
                            <label className="error">
                                {errors.dish
                                    ? errors.dish
                                    : ""}
                            </label>
                        </p>
                        <p>
                            <label htmlFor="ingredients">Ingredients</label>
                            <input
                                type="text"
                                id="ingredients"
                                name="ingredients"
                                placeholder="2 glass of wine"
                                onBlur={form.handleBlurEvent}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />{" "}
                        </p>

                        <ul className='list-ingredients'>{list.length > 0 && list.map((item, i) => <li>{item}  
                        <button className="btn delete" onClick={() => deleteIngredient(i)}> Delete </button></li>)}
                        </ul>

                        <button
                            className="btn submit"
                            onClick={addIngredient}
                        >
                            Add ingredients
                        </button>


                    </div >
                </form >
            </section >

        </div >
    );
};

export default Create;