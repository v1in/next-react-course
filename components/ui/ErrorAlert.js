import classes from './styles/ErrorAlert.module.css';

export default function ErrorAlert(props) {
  return <div className={classes.alert}>{props.children}</div>;
}
