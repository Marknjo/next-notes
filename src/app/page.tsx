import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>📒</div>
      <h1 className={styles.title}>Notes app</h1>
      <Link href='/notes' className={styles.action}>
        View all Notes
      </Link>
    </div>
  );
}
