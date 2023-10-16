
import type { Maps } from './type';

export const locationFetch = async (): Promise<{ message: string; marcers: Maps[] }> => {
  const res = await fetch('/api/map');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};
export const postAdresFetch = async (): Promise<{ message: string; marcers: Maps[] }> => {
  const res = await fetch('/api/map',{
    method:'post',
    
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};


