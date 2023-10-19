import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import React, { useState } from 'react';
import { MapsEntity } from '../Map/type';
import closedBtn from './img/closedBtn.png';
import openMap from './img/map.png';

function EntiItem({ enti }: { enti: MapsEntity }): JSX.Element {
  const [view, setView] = useState(false);
  const [state, setState] = useState(false);

  setTimeout(() => {
    setState(true);
  }, 2000);

  return (
    <div>
      {view ? (
        state ? (
          <div className="flexMapLittle">
            <div className="votEtoDaa">
              <div className="PostBtnLittle">
                <img
                  className="imgBtn"
                  src={closedBtn}
                  alt=""
                  onClick={() => {
                    setView((prev) => !prev);
                  }}
                />
              </div>

              <YMaps>
                <Map
                  defaultState={{ center: enti.coordinates, zoom: 15 }}
                  width="100%"
                  height="25vh"
                >
                  <Placemark geometry={enti.coordinates} key={enti?.id} />
                </Map>
              </YMaps>
            </div>
          </div>
        ) : (
          <p></p>
        )
      ) : (
        <div className="li">
          <li></li>
          <a href="/">{enti.name} </a>
          <div className="linkEnti">{<a href={enti.url}>Сайт Компании</a>}</div>
          <div>
            <img
              onClick={() => setView((prev) => !prev)}
              className="imgBtn1"
              src={openMap}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EntiItem;
