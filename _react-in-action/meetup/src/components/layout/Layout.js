import MainNavigation from "./MainNavigation";
import classes from './styles/Layout.module.css';

function Layout(props) {
    return (
        <>
            <MainNavigation />
            <div className={classes.main}>
                <main>
                    {props.children}
                </main>
            </div>
        </>
    );
}

export default Layout;