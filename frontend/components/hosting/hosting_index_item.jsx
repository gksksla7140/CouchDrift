import React from 'react';
import { withRouter } from 'react-router-dom';

export default ({ hosting }) => {
  return (
    <div>
    <h2>{hosting.address}</h2>
    <p>{hosting.description}</p>
   </div>
  );
};
