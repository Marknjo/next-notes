import { INote } from '@/src/types/INote';

async function getNotes() {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/note/records?page=1&perPage=30'
  );

  const data = await res.json();

  return data?.items as Array<INote>;
}

export default async function NotesPage() {
  return (
    <div>
      <h1>Notes</h1>
    </div>
  );
}
