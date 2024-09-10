import Link from 'next/link';

export default function UsuariosPage() {
  return (
    <div>
      <h1>Add User</h1>

      <Link href="/" passHref>
        <button style={{ marginRight: '10px' }} >Home </button>
      </Link>

      <Link href="/users" passHref>
        <button>User</button>
      </Link>

    </div>
  );
}
