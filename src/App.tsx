import {
  ChangeEvent,
  ReactNode,
  FormEvent,
  useState,
  useEffect,
  useRef,
} from 'react';
import './App.css';
import { Search } from './components/Search/Search';
import { Cards } from './components/Cards/Cards';
import { getPokemons } from './api/getPokemons';
import { BASE_URL } from './api/apiConfig';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Pokemon } from './api/types/types';

export const App = (): ReactNode => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const initialRender = useRef(true);

  useEffect(() => {
    const searchValue = localStorage.getItem('search') || '';

    setInputValue(searchValue);
    fetchPokemons(searchValue);
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      localStorage.setItem('search', inputValue);
    }
  }, [inputValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchPokemons(inputValue);
  };

  const fetchPokemons = async (searchValue: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getPokemons(BASE_URL, searchValue);

      setPokemons(data);
      setIsLoading(false);
    } catch (error) {
      setPokemons([]);
      setIsLoading(false);

      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <ErrorBoundary>
      <div className="app">
        <Search
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          inputValue={inputValue}
        />
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          <Cards isLoading={isLoading} pokemons={pokemons} />
        )}
      </div>
    </ErrorBoundary>
  );
};
