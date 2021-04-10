import MainHeader from "./MainHeader";

export default function MainLayout(props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}
