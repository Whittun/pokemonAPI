import React, { ChangeEvent, ReactNode, FormEvent } from 'react';
import './App.css';
import { Search } from './components/Search/Search';
import { Cards } from './components/Cards/Cards';
import { getPokemons } from './api/getPokemons';
import { BASE_URL } from './api/apiConfig';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Pokemon } from './api/types/types';

interface AppProps {}

interface AppState {
  pokemons: Pokemon[];
  isLoading: boolean;
  inputValue: string;
  error: string | null;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      pokemons: [],
      isLoading: false,
      inputValue: '',
      error: null,
    };
  }

  componentDidMount(): void {
    const searchValue = localStorage.getItem('search');

    if (searchValue) {
      this.setState({ inputValue: searchValue });
      this.fetchPokemons(searchValue);
    } else {
      this.fetchPokemons('');
    }
  }

  componentDidUpdate(prevState: AppState): void {
    if (prevState.inputValue !== this.state.inputValue) {
      localStorage.setItem('search', this.state.inputValue);
    }
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.fetchPokemons(this.state.inputValue);
  };

  fetchPokemons = async (searchValue: string) => {
    this.setState({ isLoading: true, error: null });

    try {
      const data = await getPokemons(BASE_URL, searchValue);

      this.setState({ pokemons: data, isLoading: false });
    } catch (error) {
      this.setState({
        pokemons: [],
        isLoading: false,
        error: (error as Error).message,
      });
    }
  };

  render(): ReactNode {
    return (
      <ErrorBoundary>
        <div className="app">
          <Search
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            inputValue={this.state.inputValue}
          />
          {this.state.error ? (
            <p className="error-message">{this.state.error}</p>
          ) : (
            <Cards
              isLoading={this.state.isLoading}
              pokemons={this.state.pokemons}
            />
          )}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
