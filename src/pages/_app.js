import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';

import SEO from '../../next-seo.config';
import Layout from '../hoc/Layout';

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>);
}

export default App
