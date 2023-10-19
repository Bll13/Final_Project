export type PostBuy = {
  id: number;
  userId: number;
  photo: string;
  adres: string;
  price: number;
  ves: number;
  category: string;
  status: boolean;
  obm: number;
  Photos: Photo[];
};
export type Photo = {
  id: number;
  url: string;
  cardBuyId: number;
};

export type PostBuyId = PostBuy['id'];

export type State = {
  posts: PostBuy[];
  errPost: string | undefined;
};
