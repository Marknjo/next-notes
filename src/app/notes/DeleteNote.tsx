import { redirect } from 'next/navigation';
import styles from './Notes.module.css';
import PocketBase from 'pocketbase';
import { revalidatePath } from 'next/cache';

export default function DeleteNote({ id }: { id: string }) {
  async function action() {
    'use server';
    const db = new PocketBase('http://127.0.0.1:8090');
    await db.collection('note').delete(id);

    revalidatePath('/notes');
    return redirect('/notes');
  }

  return (
    <form action={action}>
      <button className={styles.deleteBtn} type='submit'>
        🗑️ Delete
      </button>
    </form>
  );
}
