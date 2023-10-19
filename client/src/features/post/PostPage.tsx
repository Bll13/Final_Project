import React, { useState } from 'react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { RootState } from '../../store/store';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import closedBtn from './img/closedBtn.png';
import type { PostBuy } from './type';

function PostPage(): JSX.Element {
  const { idPost } = useParams();
  const navigate = useNavigate();
  const [view, setView] = useState(false);

  const posts = useSelector((store: RootState) => store.posts.posts);
  
  let post;
  if (posts.length > 0) {
    post = posts.find((el: PostBuy) => el.id === Number(idPost));
  }

  let coord;
  const coordinats = useSelector((store: RootState) => store.map.card);

  if (coordinats.length > 0) {
    coord = coordinats[Number(idPost)].coordinates;
  }

  return (
    <div>
      <NavBar />

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
                <Placemark
                  geometry={coord}
                  modules={['geoObject.addon.balloon']}
                  properties={{
                    balloonContent: `<div>
                    <div>Адрес:${post?.adres}</div>
                    <div>Категория:${post?.category}</div>
                    <div>Стоит:${post?.price}</div>
                    </div>`,
                  }}
                  key={post?.id}
                />
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
