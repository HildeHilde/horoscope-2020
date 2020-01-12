/* eslint-disable no-console */
import React from 'react';

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('Le lien a été cliqué.');
  }
  return (
    <a href="~" className="card-link" onClick={handleClick}>more</a>
  );
}


export default ActionLink;
