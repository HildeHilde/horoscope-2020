import React from 'react';
import Btn from './Btn';

function Form() {
  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 31,
  ];

  return (
    <div className="form-inline justify-content-center">
      <div className="form-group mx-sm-3 mb-2">
        <label className="my-1 mr-2">What's your date of birth ?  </label>
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <label className="my-1 mr-2">month</label>
        <select className="form-control custom-select">
          { months.map((item) => <option value={item}>{item}</option>)}
        </select>
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <label className="my-1 mr-2">day</label>
        <select className="form-control custom-select">
          { days.map((item) => <option value={item}>{item}</option>)}
        </select>
      </div>
      <Btn text="submit" />
    </div>
  );
}


export default Form;
