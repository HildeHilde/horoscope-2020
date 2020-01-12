import React from 'react';
import ActionLink from './ActionLink';

function Card(props) {
  return (
    <div className="col-sm-6">
      <div className="card">
        <img src={props.src} alt={props.signName} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">
            {props.signName}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.start}
            {' '}
            {props.month}
            {' '}
/
            {' '}
            {props.end}
            {' '}
            {props.monthEnd}
          </h6>
          <p className="card-text">{props.flash}</p>
          <ActionLink />
        </div>
      </div>
    </div>
  );
}

export default Card;
