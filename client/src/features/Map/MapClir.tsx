import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../store/store';

import './MapClir.css';

function MapClir(): JSX.Element {
  const adres = useSelector((store: RootState) => store.map.maps);
  console.log(adres, '00000000000');



    const handleGeocode = (coords) => {
      console.log(coords);
    };


  const points = [
    {
      coordinates: [59.913782172940365, 30.35027170522696],
      content: 'Метка 1',
    },
    {
      coordinates: [59.90616325435614, 30.317502043899943],
      content: 'Метка 2',
    },
    {
      coordinates: [59.92244874319101, 30.300085825113875],
      content: 'Метка 3',
    },
  ];

  return (
    <div>
      <YMaps>
        <div>
          <Map defaultState={{ center: [59.938678, 30.314474], zoom: 10 }}>
          <Geocode query="Москва" onResult={handleGeocode} />
            {adres.map((el) => (
              <Placemark geometry={el.coordinates} properties={{ iconCaption: el.content}} />
            ))}
          </Map>
        </div>
      </YMaps>
    </div>
  );
}

export default MapClir;
