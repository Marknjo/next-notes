import { INote } from '@/src/types/INote';
import styles from '../Notes.module.css';
import Link from 'next/link';
import DeleteNote from '../DeleteNote';

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
      <article className={styles.note}>
        <h3 className={styles.title}>{note.title}</h3>
        <h5 className={styles.content}>{note.content}</h5>
        <footer className={styles.footer}>
          <p className={styles.created}>{note.created}</p>
          <DeleteNote id={note.id} />
        </footer>
      </article>
    </div>
  );
}
