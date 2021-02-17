import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
// import bootstrap from "bootstrap";


const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (

    <div className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>YSale</b> A new and better way to yard sale! {' '} <span style={{ fontFamily: 'monospace' }}>Yard Sale</span> 
          </h4>
          <br />
          
        </div>
      </div>
    </div>
  );
}

export default Landing;
