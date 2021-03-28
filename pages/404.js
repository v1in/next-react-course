import { useRouter } from "next/router";

export default function PageNotFound() {
  const router = useRouter();

  const HomePageHandler = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>
        <strong style={{ fontSize: "4rem" }}>404</strong>
        <br /> This page could not be found.
      </h1>
      <button onClick={HomePageHandler}>Back to Home page</button>
    </div>
  );
}
