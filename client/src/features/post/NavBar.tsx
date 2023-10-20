import React from 'react';
import { delThunk } from '../authc/authSlice';
import { useAppDispatch } from '../../Store/store';
import { useNavigate } from 'react-router';

const product = {
  href: '#',
  breadcrumbs: [{ id: 1, name: 'На главную', href: '/' }],
};

function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function logOut() {
    dispatch(delThunk()).catch((err: string) => console.log(err));
    navigate('/');
  }

  return (
    <nav aria-label="Breadcrumb navnav">
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

        <button className="mr-2 text-sm font-medium text-gray-200" type="button" onClick={logOut}>
          Выйти
        </button>
        <button
          className="mr-2 text-sm font-medium text-gray-200"
          type="button"
          onClick={() => {
            navigate('/enti');
          }}
        >
          {' '}
          \ Пункты
        </button>
      </ol>
    </nav>
  );
}

export default NavBar;
