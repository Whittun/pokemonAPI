import React, { ReactNode } from 'react';
import './App.css';
import { Search } from './components/Search/Search';

export class App extends React.Component {
  render(): ReactNode {
    return (
      <div className="app">
        <Search />
      </div>
    );
  }
}

export default App;
