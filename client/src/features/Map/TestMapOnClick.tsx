// import React, { useState } from 'react';
// import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
// import querystring from 'querystring';
// import axios from 'axios';

// function TestMapOnClick(): JSX.Element {
//   const [placemarks, setPlacemarks] = useState([]);
//   const [address, setAddress] = useState("");

//   const handleMapClick = (e) => {
//     const coords = e.get('coords');
//     // Выполняем геокодирование для получения адреса
//     const geocodeUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=6141dfc9-90c8-4b3d-952a-bafd8feae6f9&geocode=${coords.join(",")}&format=json`;

//     axios
//       .get(geocodeUrl)
//       .then((response) => {
//         const { data } = response;
//         const address =
//           data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty
//             .GeocoderMetaData.text;
//         setAddress(address);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     setPlacemarks((prev) => [...prev, coords]);
//   };
//   //

//   return (
//     <div>
//       <YMaps>
//         <Map
//           defaultState={{ center: [55.76, 37.64], zoom: 10 }}
//           width="100%"
//           height="400px"
//           onClick={handleMapClick}
//         >
//           {placemarks.map((coords, index) => (
//             <Placemark key={index} geometry={coords} />
//           ))}
//         </Map>
//       </YMaps>
//       <p>Адрес точки: {address}</p>
//     </div>
//   );
// }

// export default TestMapOnClick;

///

import React, { useState } from 'react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import querystring from 'querystring';
import axios from 'axios';

function TestMapOnClick(): JSX.Element {
  const [placemarks, setPlacemarks] = useState([]);
  const [address, setAddress] = useState('');

  const handleMapClick = (e) => {
    const coords = e.get('coords');

    // Encode the coordinates using querystring.stringify()
    const encodedCoords = querystring.stringify({ geocode: coords.join(',') });

    // Create the geocode URL
    const geocodeUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=6141dfc9-90c8-4b3d-952a-bafd8feae6f9&${encodedCoords}&format=json`;

    axios
      .get(geocodeUrl)
      .then((response) => {
        const { data } = response;
        const address = data.response.GeoObjectCollection.featureMember[0].GeoObject.name;
        setAddress(address);
      })
      .catch((error) => {
        console.log(error);
      });

    setPlacemarks((prev) => [...prev, coords]);
  };

  return (
    <div>
      <YMaps>
        <Map
          defaultState={{ center: [55.76, 37.64], zoom: 10 }}
          width="100%"
          height="400px"
          onClick={handleMapClick}
        >
          {placemarks.map((coords, index) => (
            <Placemark key={index} geometry={coords} />
          ))}
        </Map>
      </YMaps>
      <p>Адрес точки: {address}</p>
    </div>
  );
}

export default TestMapOnClick;
