import Link from 'next/link';

import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/auth'>
        <a>
          <div className={classes.logo}>NextAuth</div>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/auth/auth'>Login</Link>
          </li>
          <li>
            <Link href='/auth/profile'>Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
