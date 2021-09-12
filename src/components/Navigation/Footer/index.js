import React from 'react';
import Link from 'next/link';

import styles from './index.module.css';

import Separator from '../../UI/Separator';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.toolbarContent}>
                <div className={styles.linkContainer}>
                    <div className={styles.linkColumn}>
                        <h3 className={styles.linkTitle}>Site</h3>
                        <div className={styles.link}><Link href='/'><a className={styles.link}>Home</a></Link></div>
                        <div className={styles.link}><Link href='/privacypolicy'><a className={styles.link}>Privacy Policy</a></Link></div>
                    </div>
                    <div className={styles.linkColumn}>
                        <h3 className={styles.linkTitle}>Resources</h3>
                        <div className={styles.link}><Link href='https://zano.org'><a className={styles.link} target="_blank" rel="noopener noreferrer">Zano Web Site</a></Link></div>
                        <div className={styles.link}><Link href='https://docs.zano.org/'><a className={styles.link} target="_blank" rel="noopener noreferrer">Zano API Docs</a></Link></div>
                    </div>
                </div>
                <Separator />
                <p className={styles.disclamer}>{new Date().getFullYear()} Zano Marketplace Explorer</p>
            </div>
        </footer>
    );
}

export default Footer;