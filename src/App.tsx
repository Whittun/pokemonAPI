import { ChangeEvent, ReactNode, FormEvent, useState, useEffect } from 'react';
import './App.css';
import { Search } from './components/Search/Search';
import { Cards } from './components/Cards/Cards';
import { getPokemons } from './api/getPokemons';
import { BASE_URL } from './api/apiConfig';
import { Pokemon } from './api/types/types';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './components/NotFound/NotFound';
import { useSearchQuery } from './hooks/useSearchQuery';

export const App = (): ReactNode => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchValue, setSearchValue, isLoadStorage] = useSearchQuery();

  useEffect(() => {
    if (isLoadStorage) {
      fetchPokemons(searchValue);
    }
  }, [isLoadStorage]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchPokemons(searchValue);
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
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Search
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                inputValue={searchValue}
              />
              {error ? (
                <p className="error-message">{error}</p>
              ) : (
                <Cards isLoading={isLoading} pokemons={pokemons} />
              )}
            </div>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
