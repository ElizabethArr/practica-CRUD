import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <Link href="/users" passHref>
        <button>Ir a Usuarios</button>
      </Link>
    </div>
  );
}