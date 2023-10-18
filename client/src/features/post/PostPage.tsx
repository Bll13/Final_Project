import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import closedBtn from './img/closedBtn.png';

import React, { useState } from 'react';

import { RootState } from '../../store/store';

import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const product = {
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'На главную', href: '/' },
    { id: 2, name: 'Выйти', href: '#' },
  ],
};

function PostPage(): JSX.Element {
  const { idPost } = useParams();
  const navigate = useNavigate();
  const [view, setView] = useState(false);

  const posts = useSelector((store: RootState) => store.posts.posts);
  let post;
  if (posts.length > 0) {
    post = posts.find((el) => el.id === Number(idPost));
  }

  let coord;
  const coordinats = useSelector((store: RootState) => store.map.card);

  if (coordinats.length > 0) {
    coord = coordinats[Number(idPost)].coordinates;
  }

  return (
    <div>
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className=" navBar mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          {product.breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-200">
                  {breadcrumb.name}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          ))}
        </ol>
      </nav>

      {view ? (
        <div className="flexMap">
          <div className="votEtoDa">
            <YMaps>
              <div className="PostBtn">
                <img
                  src={closedBtn}
                  alt=""
                  onClick={() => {
                    setView((prev) => !prev);
                  }}
                />
              </div>

              <Map defaultState={{ center: coord, zoom: 10 }} width="100%" height="90vh">
                <Placemark geometry={coord} />
              </Map>
            </YMaps>
          </div>
        </div>
      ) : (
        <div className="bg-green-700">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div key={post?.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={post?.photo}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-200">
                    <p>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {post?.category}
                    </p>
                  </h3>
                  <p className="mt-1 text-sm text-gray-200">{post?.obm}</p>
                </div>
                <p className="text-sm font-medium text-gray-200">{post?.ves}</p>
              </div>
            </div>
            <div className="postButtons">
              <button
                type="button"
                className="text-sm text-gray-200"
                onClick={() => setView((prev) => !prev)}
              >
                Показать на карте
              </button>

              <button
                type="button"
                className="text-sm text-gray-200"
                onClick={() => navigate('/posts')}
              >
                Вернуться к объявлениям
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostPage;
