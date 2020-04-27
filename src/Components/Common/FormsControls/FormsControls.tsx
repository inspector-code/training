import React from "react";
import styles from "./FormsControls.module.css";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../Utils/Validators/validators";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return (<FormControl {...props}><textarea {...input} {...restProps}/></FormControl>)
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return (<FormControl {...props}><input {...input} {...restProps}/></FormControl>)
};

export const Checkbox: React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return (<FormControl {...props}>
        <label className={styles.container}>Remember cat
            <input {...input} {...restProps}/>
            <span className={styles.checkmark}></span>
        </label>
    </FormControl>)
};

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                            name: FormKeysType,
                            validators: Array<FieldValidatorType>,
                            component: React.FC<WrappedFieldProps>,
                            props = {}, text = "") {
    return <>
        <Field placeholder={placeholder}
               validate={validators}
               name={name}
               component={component}
               {...props}
        />{text && <div>{text}</div>}
    </>
}