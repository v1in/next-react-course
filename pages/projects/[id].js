import { useRouter } from "next/router";

import Logo from "../logo/logo";

export default function ProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  console.log(router);

  return (
    <div>
      <Logo />
      <h1>The Project Page</h1>
      <p><b>...{router.asPath}</b> of something ;)</p>
    </div>
  );
}
