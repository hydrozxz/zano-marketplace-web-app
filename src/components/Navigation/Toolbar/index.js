import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Input from '../../UI/Input';
import Logo from './../../../../public/logo.svg';
import styles from './index.module.css';

const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div className={styles.toolbarContent}>
                <div className={styles.logoContent}>
                    <Link href="/">
                        <a>
                            <Image src={Logo} height={40} width={40} alt='' layout='fixed' />
                        </a>
                    </Link>
                </div>
                <Input placeholder="Search something" />
            </div>
        </header>
    );
}

export default Toolbar;