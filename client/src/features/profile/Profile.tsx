import React from 'react';
import { RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { StarIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import { addEnti } from './addSlice';

function Profile(): JSX.Element {
  const users = useSelector((store: RootState) => store.auth.user);
  const enti = useSelector((store: RootState) => store.map.enti);

  const [inn, setInn] = useState(0);
  const [ogrn, setOgrn] = useState(0);
  const [url, setUrl] = useState('');
  const [adres, setAdres] = useState('');
  const [description, setDescription] = useState('');

  const product = {
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'На главную', href: '/' },
      { id: 2, name: 'Выйти', href: '#' },
    ],
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
    description: `Спасибо ${users?.name} вашу заботу о важности утилизации мусора!`,
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  };

  //inn, ogrn, url, adres
  const dispatch = useAppDispatch();
  function addEntri(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    dispatch(addEnti({ inn, ogrn, url, adres, description, adresCod }));
  }

  return (
    <div>
      <div className="bg-green-700">
        <div className="pt-6 max-w-full">
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
              <li className="text-sm">
                <a
                  href={product.href}
                  aria-current="page"
                  className="font-medium text-gray-200 hover:text-gray-200"
                >
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>
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
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-green-200 hover:text-yellow-300"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  </RadioGroup>
                </div>

               <a href='/addPost'> <button
                
                  type="button" 
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-900 px-8 py-3 text-base font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Подать объявление
                </button></a>
              </form>
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg"></div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Profile;
