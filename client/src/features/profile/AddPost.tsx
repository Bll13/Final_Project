import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { addPost } from './addSlice';
import type { RootState } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import axios from 'axios';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import './AddPost.css';
import { addCardBuy } from '../Map/mapSlice';

const product = {
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'На главную', href: '/' },
    { id: 2, name: 'Выйти', href: '#' },
  ],
};

function AddPost(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);

  const categoryInput = useRef<HTMLInputElement>(null);
  const adresInput = useRef<HTMLInputElement>(null);
  const vesInput = useRef<HTMLInputElement>(null);
  const priceInput = useRef<HTMLInputElement>(null);
  const photoIdInput = useRef<HTMLInputElement>(null);
  const obmInput = useRef<HTMLInputElement>(null);
  //
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


  //

  async  function postUpd(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (
      photoIdInput.current?.files?.length &&
      categoryInput.current?.value &&
      adresInput.current?.value &&
      vesInput.current?.value &&
      priceInput.current?.value &&
      obmInput.current?.value
    ) {
      const url = photoIdInput.current.files;
      const category = categoryInput.current.value;
      const adres = adresInput.current.value;
      const ves = vesInput.current.value;
      const price = priceInput.current.value;
      const obm = obmInput.current.value;

      const formData = new FormData();

      for (const key in url) {
        formData.append('url', url[key]);
      }

      formData.append('category', category);
      formData.append('adres', adres);
      formData.append('ves', ves);
      formData.append('price', price);
      formData.append('obm', obm);

 
        const coordinates = await geocode(adres);
        formData.append('adresCod', `${coordinates}`);
        dispatch(addPost(formData)).catch((err) =>
        console.log(err),
      );
      
      
      };
 
     
    }


  

  return (
    <form onSubmit={postUpd}>
      <div className="space-y-12 bg-green-700">
        <div className="mx-auto flex max-w-2xl justify-end lg:max-w-full lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
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
        </div>
        <div className="ml-10 mt-2 flex justify-center h-30 w-80 rounded-lg border border-dashed border-gray-200/25 px-6 py-10">
          <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-40 w-40 text-green-200" aria-hidden="true" />
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="ml-16 block text-xl font-medium leading-10 text-gray-200"
                >
                  {user?.name}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className=" ml-10 col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-200"
          >
            <h2 className="text-base font-semibold leading-7 text-gray-200">Информация о мусоре</h2>
          </label>
          <div className="mt-2 flex justify-center h-30 w-80 rounded-lg border border-dashed border-gray-200/25 px-6 py-10">
            <div className="text-center">
              <div className="ml-10 border-b border-gray-900/10 pb-12">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-200"
                  >
                    Выберете категорию
                  </label>
                  <div className="mt-2">
                    <select
                      id="category"
                      name="category"
                      ref={categoryInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-600 bg-green-100 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="ferrum">Металл</option>
                      <option value="plastic">Пластик</option>
                      <option value="paper">Бумага</option>
                      <option value="wood">Дерево</option>
                      <option value="glass">Стекло</option>
                      <option value="organic">Органика</option>
                    </select>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      Адрес
                    </label>
                    <div className="inputPost mt-2">
                      <input
                        type="text"
                        name="adres"
                        id="adres"
                        ref={adresInput}
                        placeholder="Введите адрес"
                        className="block w-full rounded-md border-0  py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-green-900 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6 bg-green-100"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      Вес(кг)
                    </label>
                    <div className="inputPost mt-2">
                      <input
                        type="text"
                        name="ves"
                        id="ves"
                        ref={vesInput}
                        placeholder="Вес"
                        className="block w-full rounded-md border-0 py-1.5 bg-green-100 text-gray-600 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-200"
                      >
                        Объем
                      </label>
                      <div className="inputPost mt-2">
                        <input
                          type="text"
                          name="obm"
                          id="obm"
                          ref={obmInput}
                          placeholder="obm"
                          className="block w-full rounded-md border-0 py-1.5 bg-green-100 text-gray-600 shadow-sm ring-1 ring-inset ring-green-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-300 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-200"
                      >
                        Стоимость
                      </label>
                      <div className="inputPost mt-2">
                        <input
                          type="text"
                          name="price"
                          id="price"
                          ref={priceInput}
                          placeholder="Введите стоимость"
                          className="block w-full rounded-md border-0 py-1.5 bg-green-100 text-gray-600 shadow-sm ring-1 ring-inset ring-green-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <br></br>
                </div>
              </div>
              <PhotoIcon className="mx-auto h-12 w-12 text-green-200" aria-hidden="true" />
              <div className="mt-5 flex justify-center text-sm leading-6 text-gray-200">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-green-600 h-7 w-40 font-semibold text-gray-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-200 focus-within:ring-offset-2 hover:text-green-100"
                >
                  <span>Загрузить изображение</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    multiple
                    ref={photoIdInput}
                  />
                </label>
              </div>
              <p className="text-xs mt-2 leading-5 text-gray-200">PNG, JPG, GIF up to 10MB</p>
              <button
                type="submit"
                className="rounded-md mt-12 bg-green-900 px-2.5 py-1.5 text-sm font-semibold text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-800"
              >
                Разместить объявление
              </button>
            </div>
          </div>
        </div>

        <div className="ml-10border-b border-gray-200/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-200">Notifications</h2>
          <p className="mt-1 text-sm leading-6 text-gray-200">
            We'll always let you know about important changes, but you pick what else you want to
            hear about.
          </p>
        </div>
      </div>
    </form>
  );
}

export default AddPost;
