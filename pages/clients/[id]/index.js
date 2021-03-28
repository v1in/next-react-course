import Logo from "../../logo/logo";
import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <Logo />
      <h1>The Projects of a Given Client</h1>
    </div>
  );
}
