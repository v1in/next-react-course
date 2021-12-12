import Head from 'next/head';
import UserProfile from '../../components/auth/profile/user-profile';
import Layout from '../../components/auth/layout/layout';

function ProfilePage() {
  return (
    <>
      <Head>
        <title>Profile Page</title>
      </Head>
      <Layout>
        <UserProfile />
      </Layout>
    </>
  );
}

export default ProfilePage;
