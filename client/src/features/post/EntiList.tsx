import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import EntiItem from './EntiItem';

function EntiList(): JSX.Element {
  const arr = useSelector((store: RootState) => store.map.enti);

  return (
    <div className="entiContainer">
      {arr?.map((enti) => <EntiItem enti={enti} key={enti.id} />)}
    </div>
  );
}

export default EntiList;
