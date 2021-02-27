import Link from 'next/link';
import DeleteNote from './DeleteNote';
import styles from './Notes.module.css';
import { INote } from '@/src/types/INote';

export function Note({
  note: { content, title, id, created },
}: {
  note: INote;
}) {
  return (
    <article className={styles.note}>
      <Link href={`/notes/${id}`}>
        <h2 className={styles.title}>{title}</h2>
        <h5 className={styles.content}>{content}</h5>
      </Link>
      <footer className={styles.footer}>
        <p className={styles.created}>{created}</p>
        <DeleteNote id={id} />
      </footer>
    </article>
  );
}
