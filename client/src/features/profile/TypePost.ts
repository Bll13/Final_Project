import type{ User } from "../authc/type";

export type Post = {
  photo: string;
  adres: string;
  price: number;
  ves: number;
  category: string;
  status: boolean;
  obm: number;
  userIdPost: number
};



export type AddPost = {
  photo: Photo[];
  adres: string;
  price: string;
  ves: string;
  category: string;
  obm: string;
  
};

export type Photo = {
  id: number;
  CardBuyId: number;
  url: string;
};

export type UserIdPost = User['id']

export type PostStatus = Post['status'];

export type State = {
  posts: Post[] ;
  errPost: string | undefined;
};


