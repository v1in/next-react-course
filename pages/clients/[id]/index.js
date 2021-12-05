import Logo from '../../logo/logo';
import {useRouter} from 'next/router';

export default function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // load data ...
    router.push({
      pathname: '/clients/[id]/[clientprojectId]',
      query: {id: 'client1', clientprojectId: 'project1'},
    });
  }

  return (
    <div>
      <Logo />
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project</button>
    </div>
  );
}
