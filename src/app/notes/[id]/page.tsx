import { INote } from '@/src/types/INote';
import styles from '../Notes.module.css';
import Link from 'next/link';
import DeleteNote from '../DeleteNote';
import { Note } from '../Note';

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/note/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );

  const note = await res.json();

  return note as INote;
}

export default async function NotePage({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);

  return (
    <div className={styles.container}>
      <h1 className={`${styles.subPageTitle}`}>
        <Link href='/notes' className={styles.backLink}>
          {' '}
          &larr; Back
        </Link>
        : Note{' '}
      </h1>
      <Note note={note} />
    </div>
  );
}
