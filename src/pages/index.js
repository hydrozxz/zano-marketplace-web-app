import React, { useState } from 'react';
import { NextSeo } from 'next-seo';

import { Card } from '../components/UI/Card';
import Separator from '../components/UI/Separator';
import Modal from '../components/UI/Modal';
import Page from '../components/Layout/Page';

import styles from '../styles/Home.module.css';

const Home = () => {
  const [itemCardVisible, setItemCardVisible] = useState(false);
  return (
    <Page>
      <NextSeo
        title='Home'
        description='Zano Marketplace'
        openGraph={{
          title: 'Home',
          description: 'Zano Marketplace'
        }}
      />
      <Modal isOpen={itemCardVisible} onClose={() => setItemCardVisible(false)}>
        <b style={{ fontSize: '14pt' }}>Nice quality Weed</b>
        <Separator />
        <div style={{ marginBottom: 20 }}>
          <div><b>Location:</b> USA</div>
          <div><b>Amount:</b> 10 Zanos</div>
          <div><b>Contact:</b> Skype: some_skype, discord: some_user#01012</div>
          <div><b>Expiration:</b> 1 days 3 hours</div>
          <div><b>Comment:</b> Some nice comments about weed</div>
        </div>
        <button className={styles.button}>
          <span className={styles.innerButon}>
            Proceed to wallet
          </span>
        </button>
      </Modal>
      <h1 className={styles.title}>
        Welcome to Zano Marketplace Explorer
      </h1>
      <Separator />
      <div className={styles.itemsContainer}>
        <Card title='Nice quality Weed' style={{ margin: 20, cursor: 'pointer' }} onClick={() => setItemCardVisible(true)}>
          <div><b>Location:</b> USA</div>
          <div><b>Amount:</b> 10 Zanos</div>
          <div><b>Contact:</b> Skype: some_skype, discord: some_user#01012</div>
          <div><b>Expiration:</b> 1 days 3 hours</div>
        </Card>

        <Card title='T-shirt with Zano logo, made by Crypjunkie' style={{ margin: 20, cursor: 'pointer' }} onClick={() => setItemCardVisible(true)} >
          <div><b>Location:</b> World Wide</div>
          <div><b>Amount:</b> 3 Zanos</div>
          <div><b>Contact:</b> Skype: some_skype, discord: some_user#01012</div>
          <div><b>Expiration:</b> 5 days 3 hours</div>
        </Card>

        <Card title='Gaming Laptop latest gen' style={{ margin: 20, cursor: 'pointer' }} onClick={() => setItemCardVisible(true)}>
          <div><b>Location:</b> World Wide</div>
          <div><b>Amount:</b> 3 Zanos</div>
          <div><b>Contact:</b> Skype: some_skype</div>
          <div><b>Expiration:</b> 5 days 3 hours</div>
        </Card>

        <Card title='T-shirt with Zano logo, made by Crypjunkie' style={{ margin: 20, cursor: 'pointer' }} onClick={() => setItemCardVisible(true)}>
          <div><b>Location:</b> World Wide</div>
          <div><b>Amount:</b> 3 Zanos</div>
          <div><b>Contact:</b> Skype: some_skype, discord: some_user#01012</div>
          <div><b>Expiration:</b> 5 days 3 hours</div>
        </Card>
      </div>
    </Page>
  )
}

export default Home;