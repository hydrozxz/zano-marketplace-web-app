import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import styles from './index.module.css';

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <NextSeo
                title='Ops.. '
            />
            <div className={styles.content}>
                <div className={styles.opstext}>Ops!</div>
                <div>
                    <p>
                        Não encontramos a página que você está á procura.
                        Tente pesquisar as nossas <Link href="/search"><a><u>receitas</u></a></Link>, ou procure <Link href="/search"><a><u>com filtros personalizados</u></a></Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;