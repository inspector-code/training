import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";

const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (<FormControl {...props}><textarea {...input} {...restProps}/></FormControl>)
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (<FormControl {...props}><input {...input} {...restProps}/></FormControl>)
};

export const Checkbox = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (<FormControl {...props}>
        <label className={styles.container}>Remember cat
            <input {...input} {...restProps}/>
            <span className={styles.checkmark}></span>
        </label>
    </FormControl>)
};

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <>
        <Field placeholder={placeholder}
               validate={validators}
               name={name}
               component={component}
               {...props}
        />{text && <div>{text}</div>}
    </>
);