import { INote } from '@/src/types/INote';

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collection/notes/record/${noteId}`,
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
    <div>
      <h1>Notes</h1>
    </div>
  );
}
