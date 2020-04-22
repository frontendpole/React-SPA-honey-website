import React from 'react';
import img1 from '../images/beehive1.jpg'
import img2 from '../images/beehive2.jpg'
import img3 from '../images/beehive3.jpg'
import img4 from '../images/beehive4.jpg'
import '../styles/Header.css'
import { Route, Switch } from 'react-router-dom'

const Header = () => {

  return (
    <>
      <Switch>
        <Route path='/' exact render={() => (
          <img class='home-img' src={img3} alt="bees making honey" />
        )}>
        </Route>
        <Route path='/products' exact render={() => (
          <img src={img4} alt="honey on bread" />
        )}>
        </Route>
        <Route path='/contact' exact render={() => (
          <img src={img1} alt="bees approaching a beehive" />
        )}>
        </Route>
        <Route path='/admin' exact render={() => (
          <img src={img2} alt="honey jars on a wooden table in the garden" />
        )}>
        </Route>
        <Route render={() => (
          <img src={img2} alt="honey jars on a wooden table in the garden" />
        )}></Route>
      </Switch>
    </>
  );
}

export default Header;
