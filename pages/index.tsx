import Link from "next/link";
import styles from "./users.module.css";

export default function Home() {
  return (
    <div className={styles.buttonGroup}>
      <h1>Home</h1>

      <Link href="/users" passHref>
        <button className={styles.button}>Users</button>
      </Link>
    </div>
  );
}

