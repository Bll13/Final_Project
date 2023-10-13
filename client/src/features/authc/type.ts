export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  idRole: number;
  raiting: number;
  phoneNumber: number;
  avatar: string;
};

export type UserWithoutId = Omit<User, 'id'>
export type UserLogin={
    email: string;
    password: string; 
}