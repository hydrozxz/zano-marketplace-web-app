import React from 'react';
import { NextSeo } from 'next-seo';

import Page from '../components/Layout/Page';

const PrivacyPolicy = () => {
    return (
        <Page>
            <NextSeo
                title='Privacy Policy'
                description='Privacy Policy Zano Marketplace'
                openGraph={{
                    title: 'Privacy Policy',
                    description: 'Privacy Policy Zano Marketplace'
                }}
            />
            <div>
                asdasdasd
            </div>
        </Page>
    )
}

export default PrivacyPolicy;