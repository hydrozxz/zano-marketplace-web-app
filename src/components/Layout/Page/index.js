import React from 'react';

import styles from './index.module.css';

const Page = (props) => {
    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
}

export default Page;