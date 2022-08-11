import { Link } from 'react-router-dom'

import { useFormInputValidation } from "react-form-input-validation";

const Login = () => {
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
        < section id="login-page" className="auth" >
            <form id="login" onSubmit={form.handleSubmit}> 
                <div className="login-container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
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
                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password" placeholder="password" />
                        <label className="error">
                            {errors.password
                                ? errors.password
                                : ""}
                        </label>
                    </p>
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>
                            Click <Link to="/register">here</Link> if you don't have profile
                        </span>
                    </p>
                </div>
            </form>
        </section >
    );
};

export default Login;