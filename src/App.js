/* eslint-disable max-len */
import React from 'react';
import './App.scss';
import data from './data';
import Form from './Form';
import Select from './Select';
import Card from './Card';


function App() {
  return (
    <div className="container">
      <img src="../images/banner.png" alt="img" className="banner justify-content-center" />
      <Select />
      <div />
      <Form m="month" d="day" y="year" />
      <div className="row">
        {data.fullSigns.map((item) => <Card src={item.avatar} signName={item.name} start={item.start} month={item.monthS} end={item.end} monthEnd={item.monthE} flash={item.behaviour} />)}
      </div>
    </div>
  );
}

export default App;
