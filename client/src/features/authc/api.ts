import type { User, UserLogin, UserWithoutId } from './type';

export const registrationFetch = async (
  obj: UserWithoutId,
): Promise<{ message: string; user: User }> => {
  const data = await (
    await fetch('/auth/reg', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    })
  ).json();
  return data;
};

export const loginFetch = async (obj: UserLogin): Promise<{ message: string; user: User }> => {
  const data = await (
    await fetch('/auth/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    })
  ).json();
  return data;
};

export const logoutFetch = async (): Promise<{ message: string }> => {
  const data = await (await fetch('/auth/logout')).json();
  return data;
};

export const verificationFetch = async (): Promise<{ message: string }> => {
  const data = await (await fetch('/auth/logout')).json();
  return data;
};
