import MainNavigation from "./MainNavigation";
import classes from "./styles/Layout.module.css";

export default function Layout(props) {
  return (
    <>
      <MainNavigation />
      <div className={classes.main}>
        <main>{props.children}</main>
      </div>
    </>
  );
}
