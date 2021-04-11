import Link from "next/link";
import Logo from "./logo/logo";

export default function HomePage() {
  return (
    <div>
      <Logo />
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/blog/some-blog-post">Blog</Link>
        </li>
      </ul>
      <hr />
      <hr />
      <ul>
        <li>
          <Link href="/events">Events</Link>
        </li>
      </ul>
      <hr />
      <hr />
      <ul>
        <li>
          <Link href="/pre-rendering">Pre-rendering</Link>
        </li>
      </ul>
    </div>
  );
}
