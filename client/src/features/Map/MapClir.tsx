import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { type RootState } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import './MapClir.css';
import { addCardBuy } from './mapSlice';

function MapClir(): JSX.Element {
  const dispatch = useAppDispatch();
  const [adres, setAddress] = useState('');
  const [price, setPrice] = useState(0);
  const adresEntity = useSelector((store: RootState) => store.map.enti);
  const adresCardBuy = useSelector((store: RootState) => store.map.card);
 
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const coordinates = await geocode(adres);
    dispatch(addCardBuy({ adres, adresCod: coordinates, price })).catch((err) => console.log(err));
  };
  const handleGeocode = (geocode: any) => {
    const coordinates = geocode.target.geometry.getCoordinates();
    console.log(coordinates);
  };

  return (
    <div>
      <div className="divFormMap">
        <form onSubmit={handleSubmit} className="formAddMap">
          <div className="divI">
            <input
              type="text"
              value={adres}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Введите адрес"
            />
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(+e.target.value)}
              placeholder="Сколько мани нужно"
            />
          </div>
          <button type="submit">Добавить метку</button>
        </form>
      </div>
      <YMaps>
        <Map
          defaultState={{ center: [59.938678, 30.314474], zoom: 10 }}
          width="100%"
          height="100vh"
        >
          <Placemark geometry={[55.751574, 37.573856]} />
          <Placemark
            options={{
              draggable: true,
            }}
            onDragEnd={handleGeocode}
          />
          {adresEntity.map((el) => (
            <Placemark
              geometry={el.coordinates}
              options={{ preset: 'islands#redDotIcon', draggable: true }}
              modules={['geoObject.addon.balloon']}
              properties={{
                balloonContent: `<div>
                <div>Адрес:${el.content}</div>
                <div>Имя:${el.name}</div>
                <div>Стоит:${el.price}</div>
                <a href='/posts/${el.id}'>asd</a>
                </div>`,
              }}
              key={el.id}
            />
          ))}

          {adresCardBuy.map((el) => (
            <Placemark
              geometry={el.coordinates}
              modules={['geoObject.addon.balloon']}
              properties={{
                balloonContent: `<div>
                <div>Адрес:${el.content}</div>
                <div>Имя:${el.name}</div>
                <div>Стоит:${el.price}</div>
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

export default MapClir;
