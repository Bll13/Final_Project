
import type { AddPost, Post } from './TypePost';

export const addPostFetch = async (obj:FormData): Promise<{ newPost: AddPost; message: string }> => {
  const res = await fetch('/api/posts', {
    method: 'POST',
    body: obj,
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export default addPostFetch;
