import MainHeader from "./MainHeader";

export default function MainLayout(props) {
  return (
    <>
      <MainHeader />
      <main style={{paddingBottom: '5rem'}}>{props.children}</main>
    </>
  );
}
