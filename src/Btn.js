import React from 'react';

const Btn = ({ text }) => (
  <div className="form-group mx-sm-3 mb-2">
    <button type="submit" className="form-control btn-primary">{text}</button>
  </div>
);

export default Btn;
