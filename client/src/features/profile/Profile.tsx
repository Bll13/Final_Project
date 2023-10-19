import React from 'react';
import { RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/20/solid';
import { addEnti } from './addSlice';
import axios from 'axios';
import NavBar from '../post/NavBar';

function Profile(): JSX.Element {
  const users = useSelector((store: RootState) => store.auth.user);

  const [inn, setInn] = useState(0);
  const [ogrn, setOgrn] = useState(0);
  const [url, setUrl] = useState('');
  const [adres, setAdres] = useState('');
  const [description, setDescription] = useState('');

  const product = {
    images: [
      {
        src: 'https://nalogynet.ru/wp-content/uploads/2022/08/def.jpg',
        alt: '',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-green-400' },
      { name: 'Gray', class: 'bg-green-200', selectedClass: 'ring-green-400' },
      { name: 'Black', class: 'bg-green-900', selectedClass: 'ring-green-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description: `Спасибо ${users?.name}  за вашу заботу о важности утилизации мусора!`,
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  };
  const geocode = async (adres: string): Promise<number[]> => {
    try {
      const response = await axios.get('https://geocode-maps.yandex.ru/1.x', {
        params: {
          geocode: adres,
          format: 'json',
          apikey: '6141dfc9-90c8-4b3d-952a-bafd8feae6f9',
        },
      });
      const position =
        response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
      return position.reverse().map(Number);
    } catch (error) {
      console.error('Произошла ошибка при геокодировании', error);
      return [];
    }
  };
  //inn, ogrn, url, adres

  const dispatch = useAppDispatch();
  async function addEntri(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const coordinates = await geocode(adres);
    dispatch(addEnti({ inn, ogrn, url, adres, description, adresCod: coordinates })).catch((err:string) =>
      console.log(err),
    );
  }

  return (
    <div>
      <NavBar />
      <div className="bg-green-700">
        <div className="pt-6 max-w-full">
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-full lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-200">{product.description}</p>
                </div>
              </div>
              {!users?.avatar ? (
                <div className="mt-3 flex items-center gap-x-3">
                  <UserCircleIcon className="h-40 w-40 text-green-200" aria-hidden="true" />
                </div>
              ) : (
                users.avatar
              )}

              <h4 className="mt-1 text-2xl tracking-tight text-gray-200 sm:text-3xl">
                {users?.name}
              </h4>
              <p className="mt-20 text-3xl tracking-tight text-gray-200">
                {users?.phoneNumber} <br />
                {users?.email}
              </p>
              <img src={users?.avatar} className="imgA object-cover object-center" />
              <div className="mt-10 lg:row-span-3 lg:mt-0">
                <form onSubmit={addEntri}>
                  <div className="inputPost mt-2">
                    <input
                      type="text"
                      name="inn"
                      id="inn"
                      placeholder="ИНН"
                      className="block w-full rounded-md border-0 py-1.5 bg-green-100 text-gray-600 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      value={inn}
                      onChange={(e) => setInn(+e.target.value)}
                    />
                  </div>
                  <div className="inputPost mt-2">
                    <input
                      type="text"
                      name="ogrn"
                      id="ogrn"
                      placeholder="ОГРН"
                      className="block w-full rounded-md border-0 py-1.5 bg-green-100 text-gray-600 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      value={ogrn}
                      onChange={(e) => setOgrn(+e.target.value)}
                    />
                  </div>
                  <div className="inputPost mt-2">
                    <input
                      type="text"
                      name="url"
                      id="url"
                      placeholder="Ссылка"
                      className="block w-full rounded-md border-0 py-1.5 bg-green-100 text-gray-600 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                  <div className="inputPost mt-2">
                    <input
                      type="text"
                      name="adres"
                      id="adres"
                      placeholder="Адрес"
                      className="block w-full rounded-md border-0 py-1.5 bg-green-100 text-gray-600 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      value={adres}
                      onChange={(e) => setAdres(e.target.value)}
                    />
                  </div>
                  <div className="inputPost mt-2">
                    <input
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Описание"
                      className="block w-full rounded-md border-0 py-1.5 bg-green-100 text-gray-600 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <button type="submit">фыв</button>
                </form>

                {users?.idRole !== 2 ? (
                  <></>
                ) : (
                  <form className="mt-40">
                    <a href="/addPost">
                      {' '}
                      <button
                        type="button"
                        className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-green-900 px-8 py-3 text-base font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Подать объявление
                      </button>
                    </a>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
