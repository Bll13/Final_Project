import type { MapsCardBuy, MapsEntity, Post } from './type';

export const entityFetch = async (): Promise<{ message: string; enti: MapsEntity[] }> => {
  const res = await fetch('/api/map/entity');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();

  
  return data;
};
export const cardBuyFetch = async (): Promise<{ message: string; card: MapsCardBuy[] }> => {
  const res = await fetch('/api/map/carBuy');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();


  return data;
};
export const postAdresFetch = async (obj: Post): Promise<{ message: string; postCardBuy: MapsCardBuy }> => {
  const res = await fetch('/api/map/carBuy', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};
