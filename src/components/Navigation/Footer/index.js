import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './index.module.css';

import Separator from '../../UI/Separator';


const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.toolbarContent}>
                <div className={styles.linkContainer}>
                    <div className={styles.linkColumn}>
                        <h3 className={styles.linkTitle}>Site</h3>
                        <div className={styles.link}><Link href='/aboutus'><a className={styles.link}>Quem somos</a></Link></div>
                        <div className={styles.link}><Link href='/privacypolicy'><a className={styles.link}>Termos e condições</a></Link></div>
                        <div className={styles.link} onClick={() => setCookiesMngtModalVisible(true)}>Cookies</div>
                    </div>
                    <div className={styles.linkColumn}>
                        <h3 className={styles.linkTitle}>Receitas</h3>
                        <div className={styles.link}><Link href='https://cookirup.atlassian.net/servicedesk/customer/portal/1'><a className={styles.link} target="_blank" rel="noopener noreferrer">Ajuda e suporte</a></Link></div>
                        <div className={styles.link}><Link href='/qualityreview'><a className={styles.link}>Processo de avaliação da qualidade</a></Link></div>
                        <div className={styles.link}><Link href='/qualitychecklist'><a className={styles.link}>Checklist de qualidade</a></Link></div>
                    </div>
                </div>
                <Separator />
                <div className={styles.companyInfoContainer}>
                    <div className={styles.socialMediaBox}>
                        <div className={styles.socialMediaItem}>
                            <Link href='https://www.facebook.com/Cookirup-105806741649398/'>
                                <a target="_blank" rel="noopener noreferrer">
                                </a>
                            </Link>
                        </div>
                        <div className={styles.socialMediaItem}>
                            <Link href='https://www.instagram.com/cookirup'>
                                <a target="_blank" rel="noopener noreferrer">
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className={styles.disclamer}>{new Date().getFullYear()}  Zano Marketplace</p>
            </div>
        </footer>
    );
}

export default Footer;