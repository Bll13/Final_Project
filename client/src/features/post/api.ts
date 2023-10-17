import type { PostBuy} from './type';

export const loadPostFetch = async (): Promise<{ message: string; posts: PostBuy[] }> => {
  const res = await fetch('/api/postbuy');

  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

// export const loadOneFetch = async (id: PostBuyId): Promise<{ message: string; post: PostBuy }> => {
//   const res = await fetch(`/api/postbuy/${id}`);
  
 

//   if (!res.ok) {
//     const { message } = await res.json();
//     throw message;
//   }
//   const data = await res.json();
//   return data;
// };
