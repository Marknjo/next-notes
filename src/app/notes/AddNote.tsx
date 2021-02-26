'use client';

import { useState } from 'react';
import styles from './AddNote.module.css';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

interface IOnAddNoteProps {
  onAddNote: (
    formData: FormData
    // setMessage: (message: string) => void
  ) => Promise<{ message: string }>;
}

export default function AddNote({ onAddNote }: IOnAddNoteProps) {
  const [message, setMessage] = useState('');
  const { pending } = useFormStatus();

  async function onCreate(formData: FormData) {
    const res = await onAddNote(formData);
    setMessage(res.message);
  }

  return (
    <>
      <div className={styles.divider} />
      <form action={onCreate} className={styles.form}>
        <h3 className={styles.title}>Create a new Note</h3>

        <div className={styles['form-control']}>
          <label className={styles.label} htmlFor='title'>
            Title
          </label>
          <input
            className={styles['form-input']}
            type='text'
            name='title'
            id='title'
            placeholder='Title'
          />
        </div>

        <div className={styles['form-control']}>
          <label className={styles.label} htmlFor='content'>
            Content
          </label>
          <textarea
            className={styles['form-input']}
            name='content'
            id='content'
            placeholder='content'
            rows={5}
          />
        </div>

        {message && (
          <div className={`${styles['form-control']} ${styles.error}`}>
            <p>{message}</p>
          </div>
        )}

        <button className={styles.btn} type='submit' disabled={pending}>
          {pending ? 'Adding...' : 'Add Note'}
        </button>
      </form>
    </>
  );
}
