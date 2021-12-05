import Link from 'next/link';
import Logo from '../logo/logo';

export default function ClientPage() {
  const clients = [
    {id: 'will', name: 'William'},
    {id: 'joss', name: 'Joshua'},
  ];
  return (
    <div>
      <Logo />
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
