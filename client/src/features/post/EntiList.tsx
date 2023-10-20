import React from 'react';
import { useSelector } from 'react-redux';

import EntiItem from './EntiItem';
import { RootState } from '../../Store/store';
import { MapsEntity } from '../Map/type';
import NavBar from './NavBar';

function EntiList(): JSX.Element {
  const arr = useSelector((store: RootState) => store.map.enti);

  return (
    <div>
      <NavBar />
    <div className="entiContainer">
      {arr?.map((enti: MapsEntity) => <EntiItem enti={enti} key={enti.id} />)}
    </div>

    </div>
  );
}

export default EntiList;
