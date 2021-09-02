import React from 'react';

import styles from './index.module.css';

const Separator = () => {
    return (
        <div className={styles.content}>
            <hr className={styles.separator} />
        </div>
    );
}

export default Separator;