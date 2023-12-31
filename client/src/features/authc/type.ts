export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  idRole: number;
  raiting: number;
  phoneNumber: string;
  avatar: string;
};

export type UserId = User['id']

export type UserWithoutId = {
  name: string;
  email: string;
  password: string;
  idRole: number;
  phoneNumber: string;
  passwordtwo: string;
};
export type UserLogin = {
  email: string;
  password: string;
};
export type State = {
  user: User | null;
  errUser: string | undefined;
};
