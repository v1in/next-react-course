import Link from 'next/link';
import classes from './styles/Button.module.css';

export default function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} legacyBehavior>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
