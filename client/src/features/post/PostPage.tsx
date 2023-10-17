import React from 'react';

import { RootState } from '../../Store/store';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function PostPage(): JSX.Element {

  const { idPost } = useParams();

  const posts = useSelector((store: RootState) => store.posts.posts);
  let post;
  if (posts.length > 0) {
    post = posts.find((el) => el.id === Number(idPost));
  }

  return (
    <div className="flexPostPage">
      <img className="photoPostPage" src={post?.photo} />
      <br />
      <br />
      <div>Вес товара: {post?.ves}; Объём товара: {post?.obm}</div>
      <br />
      <button type="button">Показать на карте</button>
    </div>
  );
}

export default PostPage;
