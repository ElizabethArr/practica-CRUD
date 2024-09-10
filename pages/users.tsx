import Link from 'next/link';

export default function UsuariosPage() {
  return (
    <div>
      <h1>Users</h1>

      <Link href="/" passHref>
        <button style={{ marginRight: '10px' }}>Home </button>
      </Link>

      <Link href="/users_add" passHref>
        <button>Add User</button>
      </Link>

    </div>
  );
}
