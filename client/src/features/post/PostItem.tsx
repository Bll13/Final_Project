import React from 'react';
import { PostBuy } from './type';
import deleteBtn from './img/deleteBtn.png';
import { useAppDispatch } from '../../store/store';

import { delPost } from './postSlice';


function PostItem({ post }: { post: PostBuy }): JSX.Element {
  const dispatch = useAppDispatch();
  function deletePostItem(): void {
    dispatch(delPost(post.id)).catch((err) => console.log(err));
  }

  return (

    
    <div key={post.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <button className="yyy" type="button" onClick={deletePostItem}>
          <img className="ttt" src={deleteBtn} alt="" />
        </button>

        <img
          src={post?.Photos[0].url}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-200">
            <a href={`/posts/${post.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {post.category}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-200">{post.obm}</p>
        </div>
        <p className="text-sm font-medium text-gray-200">{post.ves}</p>
      </div>
    </div>

  );
}

export default PostItem;
