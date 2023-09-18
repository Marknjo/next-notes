import { INote } from '@/src/types/INote';
import Link from 'next/link';
import PocketBase from 'pocketbase';
import styles from './Notes.module.css';
import AddNote from './AddNote';

export const dynamic = 'auto',
  revalidate = 0;

async function getNotes() {
  // const res = await fetch(
  //   'http://127.0.0.1:8090/api/collections/note/records?page=1&perPage=30'
  // );
  const db = new PocketBase('http://127.0.0.1:8090');
  const results = db.collection('note').getList(1, 10);

  // const data = await res.json();

  const data = (await results).items;

  // return data?.items as Array<INote>;
  return data as unknown as Array<INote> | [];
}

export default async function NotesPage() {
  const notes = await getNotes();

  const hasNotes = notes.length > 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Notes</h1>
      {hasNotes && (
        <div className={styles.grid}>
          {notes.map((note) => (
            <Note key={note.id} {...note} />
          ))}
        </div>
      )}
      {hasNotes || (
        <p>
          Looks like there are no notes here to show.{' '}
          <Link href='/notes/add' className={styles.action}>
            Add New Note
          </Link>
        </p>
      )}

      <AddNote />
    </div>
  );
}

function Note({ content, title, id, createdAt }: INote) {
  return (
    <Link href={`/notes/${id}`}>
      <article className={styles.note}>
        <h2 className={styles.title}>{title}</h2>
        <h5 className={styles.content}>{content}</h5>
        <p className={styles.created}>{createdAt}</p>
      </article>
    </Link>
  );
}
