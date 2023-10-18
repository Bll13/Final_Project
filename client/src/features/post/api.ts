import type { PostBuy, PostBuyId } from './type';

export const loadPostFetch = async (): Promise<{ message: string; posts: PostBuy[] }> => {
  const res = await fetch('/api/postbuy');

  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export const delFetch = async (id: PostBuyId): Promise<{ id: PostBuyId }> => {
  const res = await fetch(`/api/postbuy/${id}`, { method: 'DELETE' });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};
