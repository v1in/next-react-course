import Link from "next/link";
import Logo from "./logo/logo";

export default function HomePage() {
  return (
    <div>
      <Logo />
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/clients">
            <a>Clients</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
