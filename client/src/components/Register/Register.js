import { Link } from 'react-router-dom'

import { useFormInputValidation } from "react-form-input-validation";


const Register = () => {
    const [fields, errors, form] = useFormInputValidation({
        username: "",
        email: "",
        password: "",
    }, {
        username: "required",
        email: "required|email",
        age: "required",
        password: "required",
    });

    console.log(fields)
    return (
        <section id="register-page" className="content auth">
            <form
                id="register"
                noValidate
                autoComplete="off"
                onSubmit={form.handleSubmit}
            >
                <div className="register-container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <p>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="petar@email.com"
                        />
                        <label className="error">
                            {errors.email
                                ? errors.email
                                : ""}
                        </label>
                    </p>
                    <p>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="delicious101"
                        />
                        <label className="error">
                            {errors.username
                                ? errors.username
                                : ""}
                        </label>
                    </p>
                    <p>
                        <label htmlFor="pass">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="register-password"
                            placeholder="password"
                        />
                        <label className="error">
                            {errors.password
                                ? errors.password
                                : ""}
                        </label>
                    </p>
                    <p>
                        <label htmlFor="con-pass">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            placeholder="repeat password"
                        />
                        <label className="error">
                            {errors.password
                                ? errors.password
                                : ""}
                        </label>
                    </p>
                    <p>
                        <input
                            className="btn submit"
                            type="submit"
                            value="Register"
                        />
                    </p>
                    <p className="field">
                        <span>
                            Already Register? Click <Link to="/login">here</Link> to login
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};



export default Register;