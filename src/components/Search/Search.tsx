import { ChangeEvent, FormEvent, ReactNode } from 'react';

import './Search.css';

interface SearchProps {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  inputValue: string;
}

export const Search = ({
  handleInputChange,
  handleSubmit,
  inputValue,
}: SearchProps): ReactNode => {
  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    </section>
  );
};
