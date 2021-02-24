import { addNote } from './actions';
import styles from './AddNote.module.css';

export default function AddNote() {
  return (
    <>
      <div className={styles.divider} />
      <form action={addNote} method='post' className={styles.form}>
        <h3>Create a new Note</h3>

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

        <button className={styles.btn} type='submit'>
          Add Note
        </button>
      </form>
    </>
  );
}
