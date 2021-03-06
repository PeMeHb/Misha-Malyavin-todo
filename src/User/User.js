import React from 'react';
import './user.scss';

export const User = props => (
  <div className="user-holder">
    <div className="name">{props.name}</div>
    <div className="surname">{props.surname}</div>
    <div className="age">{props.age}</div>
  </div>
);
