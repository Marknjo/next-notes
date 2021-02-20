'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <p>
      ⛔ Error loading note. Take me to safety <Link href='/notes'>Now 🚶‍♀️</Link>
    </p>
  );
}
