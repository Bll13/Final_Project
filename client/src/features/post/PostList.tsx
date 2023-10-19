import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './Post.css';

import PostItem from './PostItem';

import NavBar from './NavBar';

import MapCarb from '../Map/MapCarb';

function PostList(): JSX.Element {
  const [select, setSelect] = useState('');
  const [money, setMoney] = useState<string>('');
  let posts;
  let newPosts;

  if (select === '' && !money) {
    posts = useSelector((store: RootState) => store.posts.posts);

    newPosts = [...posts].sort((a, b) => a.price - b.price);
  } else if (select === '' && money) {
    newPosts = useSelector((store: RootState) =>
      store.posts.posts.filter((el) => el.price > Number(money)),
    );
  } else if (select) {
    newPosts = useSelector((store: RootState) =>
      store.posts.posts.filter((el) => el.category === select && el.price > Number(money)),
    );
  }

  return (
    <>
      <div>
        <NavBar />

        <div className="divMapCard">
          <div>
            <MapCarb />
          </div>
        </div>

        <div className="MainContainer">
          <div className="inputContainer">
            <div className="mt-2 mt-3">
              <input
                type="text"
                name="ves"
                id="ves"
                value={money}
                onChange={(e) => setMoney(e.target.value)}
                placeholder="Money"
                className="block w-full rounded-md border-0 py-1.5 bg-green-100 text-gray-600 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-2 mt-3">
              <select
                id="category"
                name="category"
                value={select}
                onChange={(e) => setSelect(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-600 bg-green-100 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value="">Все Категории</option>
                <option value="металл">Металл</option>
                <option value="пластик">Пластик</option>
                <option value="бумага">Бумага</option>
                <option value="дерево">Дерево</option>
                <option value="стекло">Стекло</option>
                <option value="органика">Органика</option>
              </select>
            </div>
          </div>
          {
            <div className="bg-green-700">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
                <h2 className=" postsContainer text-2xl font-bold tracking-tight text-gray-200">
                  Объявления на продажу
                </h2>

                <div className="postsContainer mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {newPosts?.map((post) => <PostItem post={post} key={post.id} />)}
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default PostList;
