import React from 'react';

import Separator from './../Separator'
import styles from './index.module.css';

const Card = (props) => {
    const style = {
        height: props.height,
    };

    return (
        <div className={styles.content} style={{ ...style, ...props.style }} onClick={props.onClick}>
            <div className={styles.contentBoxContent}>
                <div className={styles.title}>{props.title}</div>
                <Separator />
                {props.children}
            </div>
        </div>
    );
}

const CardMinimal = (props) => {
    const style = {
        height: props.height,
    };

    return (
        <div className={styles.contentMinimal} style={{ ...style, ...props.style }} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export { Card, CardMinimal };