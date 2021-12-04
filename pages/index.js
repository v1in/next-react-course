import Link from "next/link";
import Logo from "./logo/logo";

export default function HomePage() {
  return (
    <div>
      <Logo />
      <h1>Home Page 🏡</h1>
      <section>
        <details>
          <summary>Menu</summary>
          <ul>
            <li>
              <Link href='/projects'>Projects</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/clients'>Clients</Link>
            </li>
            <li>
              <Link href='/blog/some-blog-post'>Blog</Link>
            </li>
          </ul>
        </details>
      </section>
      <section>
        <details>
          <summary>Static Generation (pre-rendering)</summary>
          <ul>
            <li>
              <Link href='/pre-rendering'>getStaticProps</Link>
            </li>
            <li>
              <Link href='/pre-rendering/user'>getServerSideProps</Link>
            </li>
            <hr />
            <li>
              <Link href='/pre-rendering/sales'>Sales Page</Link>
            </li>
          </ul>
        </details>
      </section>
      <hr />
      <section>
        <Link href='/events'>Events Page 🙌</Link>
      </section>
    </div>
  );
}
