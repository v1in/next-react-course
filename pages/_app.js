import Head from 'next/head';
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name='description' content='Home Page' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
