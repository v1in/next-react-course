import Head from 'next/head';
import Layout from '../../components/auth/layout/layout';
import StartingPageContent from '../../components/auth/starting-page/starting-page';

function HomePage() {
  return (
    <>
      <Head>
        <title>Auth Home 🔐</title>
      </Head>
      <Layout>
        <StartingPageContent />
      </Layout>
    </>
  );
}

export default HomePage;
