import React from 'react';
import Btn from './Btn';
import data from './data';
import Horoscope from './Horoscope';

function Select() {
  return (
    <div className="form-inline justify-content-center">
      <div className="form-group mx-sm-3 mb-2">
        <label className="my-1 mr-2">My sign : </label>
        <select className="form-control custom-select">
          { data.fullSigns.map((item) => <option value={item.name}>{item.name}</option>)}
        </select>
      </div>
      <Btn text="let's go" onClick={Horoscope} />
    </div>
  );
}
export default Select;
