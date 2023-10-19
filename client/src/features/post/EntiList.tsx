import React from 'react';
import { useSelector } from 'react-redux';

import EntiItem from './EntiItem';
import { RootState } from '../../store/store';
import { MapsEntity } from '../Map/type';

function EntiList(): JSX.Element {
  const arr = useSelector((store: RootState) => store.map.enti);

  return (
    <div className="entiContainer">
      {arr?.map((enti: MapsEntity) => <EntiItem enti={enti} key={enti.id} />)}
    </div>
  );
}

export default EntiList;
