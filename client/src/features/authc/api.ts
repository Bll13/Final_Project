import type { User, UserLogin, UserWithoutId } from './type';

export const registrationFetch = async (
  obj: UserWithoutId,
): Promise<{ message: string; user: User }> => {
  const res = await fetch('/api/auth/reg', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });

  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  console.log(data);
  return data;
};

export const loginFetch = async (obj: UserLogin): Promise<{ message: string; user: User }> => {
  const res = await fetch('/api/auth/login', {
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

export const logoutFetch = async (): Promise<{ message: string }> => {
  const res = await fetch('/api/auth/logout');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export const verificationFetch = async (): Promise< User > => {
  const res = await fetch('/api/auth/verification');
  
  
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};
