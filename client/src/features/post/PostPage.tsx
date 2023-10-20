import React, { useState } from 'react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { RootState } from '../../store/store';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import closedBtn from './img/closedBtn.png';

function PostPage(): JSX.Element {
  const { idPost } = useParams();
  const navigate = useNavigate();
  const [view, setView] = useState(false);

  const posts = useSelector((store: RootState) => store.posts.posts);
  const coordinates = useSelector((store: RootState) => store.map.card);

  let post;
  let photo;
  let coord;
  if (posts.length > 0) {
    post = posts.find((el) => el.id === Number(idPost));
    photo = post?.Photos[0].url;
    coord = post?.adresCod;
  }

  if (coordinates.length > 0) {
    coord = coordinates.find((el) => el.id === Number(idPost))?.coordinates;
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
                  src={photo}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div></div>

                <button
                  type="button"
                  className="mr-2 text-sm font-medium text-gray-200"
                  onClick={() => navigate('/posts')}
                >
                  \ Вернуться к объявлениям
                </button>
                <button
                  type="button"
                  className="mr-2 text-sm font-medium text-gray-200"
                  onClick={() => setView((prev) => !prev)}
                >
                  \ Показать на карте
                </button>
              </div>
            </div>

            <div className="postButtons">
              <p className="mr-2 text-sm font-medium text-gray-200">
                \ Категория: {post?.category}
              </p>
              <p className="text-sm font-medium text-gray-200">\ Объем: {post?.obm}</p>
              <p className="text-sm font-medium text-gray-200">\ Масса: {post?.ves}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostPage;
