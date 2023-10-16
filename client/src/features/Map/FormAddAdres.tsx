// import React, { useState } from 'react';
// import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
// import ymaps, { GeoObjectCollection, map } from 'yandex-maps';
// import { useAppDispatch } from '../../store/store';

// function FormAddAdres(): JSX.Element {
//   const [name, setName] = useState('');
//   const [adres, setAdres] = useState('');
//   const [price, setPrice] = useState('');
//   const dispatch = useAppDispatch();
//   function addAdres(): void {
//     //
//     // let myGeocoder = ymaps.geocode(adres);
//     // myGeocoder.then(
//     //   (res) => {
//     //     const one = new map.GeoObjects();
//     //     one.add(res.geoObjects);
//     //     // map.geoObjects.add(res.geoObjects);

//     //   },
//     //   (err) => {
//     //   },
//     // );
//     // console.log(myGeocoder, '----asd----');
//     ymaps
//       .geocode('Москва')
//       .then((res) => {
//         // Получаем первый объект из результата геокодирования
//         const firstGeoObject = res.geoObjects.get(0);
//         if (firstGeoObject && firstGeoObject.geometry) {
//           const type = firstGeoObject.geometry.getType();
//           let coordinates;

//           if (type === 'Point') {
//             coordinates = firstGeoObject.geometry.getCoordinates();
//           } else if (type === 'LineString' || type === 'Polygon') {
//             coordinates = firstGeoObject.geometry.getCoordinates();
//           } else if (type === 'Rectangle') {
//             coordinates = firstGeoObject.geometry.getBounds();
//           } else {
//             console.log('Неподдерживаемый тип геометрии');
//             return;
//           }

//           console.log(coordinates);
//         } else {
//           console.log('Не удалось найти геометрию для указанного адреса');
//         }
//       })
//       .catch((error) => {
//         // Обрабатываем ошибку, если она возникла
//         console.log('Ошибка геокодирования', error);
//       });
//     //

//     // dispatch()
//   }

//   return (
//     <div>
//       <div>
//         <form onSubmit={addAdres}>
//           <input value={name} name="name" onChange={(e) => setName(e.target.value)} />
//           <input value={adres} name="adres" onChange={(e) => setAdres(e.target.value)} />
//           <input value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
//           <button type="submit">add</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default FormAddAdres;
