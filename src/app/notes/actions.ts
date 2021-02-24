'use server';

import PocketBase from 'pocketbase';

export async function addNote(formData: FormData) {
  const data = Object.fromEntries(formData);

  const title = data.title;
  const content = data.content;

  // add validations
  if (!title || !content) {
    return {
      message: 'Title or content cannot be empty',
    };
  }

  try {
    const db = new PocketBase('http://127.0.0.1:8090');
    await db.collection('note').create(data);

    return {
      message: 'Successfully added the note',
    };
  } catch (error) {
    return {
      message: 'Failed to add a a anew note',
    };
  }
}
