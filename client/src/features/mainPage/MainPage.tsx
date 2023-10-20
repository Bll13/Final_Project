
import React from 'react';
import './MainPage.css';


import NavBar from '../post/NavBar';



function MainPage(): JSX.Element {


  return (
    <div className="mainPage">
      <div className="textInfo relative isolate overflow-hidden  py-24 sm:py-32">
        <NavBar />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 ">
            <h2 className="text-4x1 font-bold tracking-tight text-white sm:text-6xl ">
              Ceep Clean
            </h2>
            <p className="wordSpace mt-40 text-lg leading-9 text-gray-200 sm:text-3xl">
              Правильная утилизация отходов является неотъемлемой частью нашей ответственности перед
              природой и будущим поколением. Она помогает минимизировать загрязнение окружающей
              среды, сохранять природные ресурсы и создавать более здоровую планету для всех.
              Давайте вместе принимать меры и делать свой вклад в сохранение экологии, начиная с
              правильной утилизации отходов.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"></div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
