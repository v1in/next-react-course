import "../styles/globals.css";
import styles from "../styles/layout.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.root}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
