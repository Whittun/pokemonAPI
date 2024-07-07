import React, { ReactNode } from 'react';
import './App.css';
import { Search } from './components/Search/Search';
import { Cards } from './components/Cards/Cards';

export class App extends React.Component {
  render(): ReactNode {
    return (
      <div className="app">
        <Search />
        <Cards />
      </div>
    );
  }
}

export default App;
