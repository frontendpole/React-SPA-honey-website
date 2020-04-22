import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          {<Header />}
        </header>
        <main>
          <aside>
            {<Navigation />}
          </aside>
          <section className='blog'>
            {<Page />}
          </section>
        </main>
        <footer>
          {<Footer />}
        </footer>
      </div>
    </Router>
  );
}

export default App;
