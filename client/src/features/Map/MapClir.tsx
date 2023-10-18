import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import './MapClir.css';
import { addCardBuy } from './mapSlice';
import axios from 'axios';

//

function MapClir(): JSX.Element {
  const [adres, setAddress] = useState('');
  const [price, setPrice] = useState(0);
  const adresEntity = useSelector((store: RootState) => store.map.enti);
  const adresCardBuy = useSelector((store: RootState) => store.map.card);

  const dispatch = useAppDispatch();

  const geocode = async (adres: string): Promise<void> => {
    try {
      const response = await axios.get('https://geocode-maps.yandex.ru/1.x', {
        params: {
          geocode: adres,
          format: 'json',
          apikey: '6141dfc9-90c8-4b3d-952a-bafd8feae6f9', // замените на ваш API-ключ
        },
      });

      const position =
        response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
      return position.reverse().map(Number);
    } catch (error) {
      console.error('Произошла ошибка при геокодировании', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const coordinates = await geocode(adres);

    dispatch(addCardBuy({ adres, adresCod: coordinates, price })).catch((err) => console.log(err));
  };

  return (
    //

    //
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Добавить метку</button>
      </form>

      <YMaps>
        <Map
          defaultState={{ center: [59.938678, 30.314474], zoom: 10 }}
          width="100%"
          height="100vh"
        >
          {adresEntity.map((el) => (
            <Placemark
              geometry={el.coordinates}
              properties={{ iconCaption: el.content }}
              key={el.content}
            />
          ))}

          {adresCardBuy.map((el) => (
            <Placemark
              geometry={el.coordinates}
              properties={{ iconCaption: el.content }}
              key={el.content}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
}

export default MapClir;
