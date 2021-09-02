import React from 'react';

import Wrapper from '../Wrapper';
import styles from './index.module.css';

import Toolbar from '../../components/Navigation/Toolbar';
import Footer from '../../components/Navigation/Footer';

const Layout = (props) => {
    return (
        <Wrapper>
            <Toolbar />
            <div className={styles.content}>
                {props.children}
            </div>
            <Footer />
        </Wrapper>
    );
}

export default Layout;