import { useRouter } from "next/router";

import Logo from "../logo/logo";

export default function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <Logo />
      <h1>The Blog Post</h1>
    </div>
  );
}
