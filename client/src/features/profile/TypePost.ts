import type { User } from '../authc/type';

export type Post = {
  photo: Photo[];
  adres: string;
  price: number;
  ves: number;
  category: string;
  status: boolean;
  obm: number;
  userId: number;
};

export type EntitiAdd = {
  inn: number;
  ogrn: number;
  adres: string;
  adresCod: string;
  url: string;
  description: string;
};

export type AddPost = {
  id: number;
  photo: Photo[];
  adres: string;
  price: number;
  ves: number;
  category: string;
  obm: number;
  status: boolean;
  userId: number;
};

export type Photo = {
  id: number;
  CardBuyId: number;
  url: string;
};

export type UserIdPost = User['id'];

export type PostStatus = Post['status'];

export type State = {
  posts: Post[];
  errPost: string | undefined;
  enti: EntitiAdd[];
};

export type Entiti = {
  inn: number;
  ogrn: number;
  adres: string;
  adresCod: string;
  url: string;
  userId: number;
  description: string;
};
