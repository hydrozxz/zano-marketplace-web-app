import React from 'react';
import Link from 'next/link';

import styles from './index.module.css';

const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div className={styles.toolbarContent}>
                <div className={styles.logoContent}>
                    <Link href="/">
                        <a>
                            <div className={styles.logo}></div>
                            <div className={styles.logoMobile}></div>
                        </a>
                    </Link>
                </div>
                <div className={styles.searchRecipeInputBox}>
                    <div className={styles.searchRecipeInput}>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Toolbar;