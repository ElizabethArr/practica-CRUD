import Link from 'next/link';

export default function UsuariosPage() {
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <Link href="/" passHref>
        <button>Inicio</button>
      </Link>

    </div>
  );
}
