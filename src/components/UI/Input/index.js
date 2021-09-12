import React from 'react';

import classNames from 'classnames';
import styles from './index.module.css';

const Input = (props) => {
    const onChange = (e) => {
        if (props.disable)
            return;

        if (props.onChange !== undefined)
            props.onChange(e);
    }

    const getInputType = () => {
        if (props.type === "password")
            return "password";
        if (props.type === "email")
            return "email";

        return "input";
    }

    const getInputClassName = () => {
        if (props.disable)
            return classNames(styles.input, styles.disable);
        if (props.invalid)
            return classNames(styles.input, styles.invalid);

        return styles.input;
    }


    return (
        <input type={getInputType()}
            name={props.name}
            className={getInputClassName()}
            title={props.title}
            placeholder={props.placeholder}
            value={props.value}
            onKeyDown={props.onKeyDown}
            onChange={onChange} />
    );

}

export default Input;