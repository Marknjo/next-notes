'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <p>
      ⛔ Error loading notes. Take me to safety <Link href='/'>Now 🚶‍♀️</Link>
    </p>
  );
}
