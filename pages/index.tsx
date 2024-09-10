import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/users" passHref>
        <button>Users</button>
      </Link>
    </div>
  );
}