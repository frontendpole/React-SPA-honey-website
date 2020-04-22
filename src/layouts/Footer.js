import React from 'react';
import { Route } from 'react-router-dom';

const Footer = () => {
  return (
    < div style={{
      height: '5%'
    }}>
      <h2>footer</h2>
      <Route path='/:page' exact render={(props) => {
        return (
          <p>lorem ipsum</p>
        )
      }} />
    </div >
  );
}

export default Footer;