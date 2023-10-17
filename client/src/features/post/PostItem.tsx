import React from 'react';
import type { PostBuy } from './type';
import { Link } from 'react-router-dom';

export function PostItem({ post }: { post: PostBuy }): JSX.Element {
  return (
    <div className='flexPost'>
      <Link to={`${post.id}`}> <img className='photoPost' src={post.photo} /></Link>
      <h1 className='category'>{post.category}</h1>
      <div>{post.price}</div>
      <br />
      <br />
    </div>
  );
}
