import Head from 'next/head';
import AuthForm from '../../components/auth/auth/auth-form';
import Layout from '../../components/auth/layout/layout';

function AuthPage() {
  return (
    <>
      <Head>
        <title>Auth Login 🔐</title>
      </Head>
      <Layout>
        <AuthForm />
      </Layout>
    </>
  );
}

export default AuthPage;
