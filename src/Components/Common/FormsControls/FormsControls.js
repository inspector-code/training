import React from "react";
import styles from "./FormsControls.module.css";
import {required} from "../../../Utils/Validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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

export const createField = (placeholder, name, validators, component) => (
    <div>
        <Field placeholder={placeholder}
               validate={validators}
               name={name}
               component={component}
        />
    </div>
);