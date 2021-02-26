'use client';

import Link from 'next/link';
import styles from './Notes.module.css';

export default function Error() {
  return (
    <p className={styles.container}>
      ⛔ Error loading notes. Take me to safety <Link href='/'>Now 🚶‍♀️</Link>
    </p>
  );
}
