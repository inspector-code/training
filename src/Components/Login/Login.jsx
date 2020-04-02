import React from "react";
import {reduxForm} from "redux-form";
import {Checkbox, createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./Login.module.css";
import cat_eat from "../../assets/images/cat_eat.png"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: "password"})}


            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div className={style.buttonsField}>
                <div className={style.checkboxField}>
                    {createField(null, 'rememberMe', null, Checkbox, {type: "checkbox"})}
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <>
            <div className={style.loginForm}>
                <div className={style.imgLogin}><img src={cat_eat} alt="cat"/></div>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            </div>
            <div className={style.author}>
                <div>by bamboleylo@inspector-code</div>
                <div>2020</div>
            </div>
        </>
    )
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);