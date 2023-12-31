import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import React from 'react';
import { useSelector } from 'react-redux';

import './MapClir.css';
import type { MapsCardBuy } from './type';
import { RootState } from '../../Store/store';

function MapCarb(): JSX.Element {
  const adresCardBuy = useSelector((store: RootState) => store.map.card);
  return (
    <div>
      <YMaps>
        <Map defaultState={{ center: [59.938678, 30.314474], zoom: 10 }} width="100%" height="50vh">
          <Placemark geometry={[55.751574, 37.573856]} />
          <Placemark
            options={{
              draggable: true,
            }}
          />
          {adresCardBuy.map((el: MapsCardBuy) =>(
            <Placemark
              geometry={el.coordinates}
              modules={['geoObject.addon.balloon']}
              properties={{
                balloonContent: `<div>
                <div>Адрес:${el.content}</div>
                <div>Имя:${el.name}</div>
                <div>Стоимость:${el.price}</div>
                <a href='/posts/${el.id}'>Подробнее</a>
                </div>`,
              }}
              key={el.id}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
}

export default MapCarb;
