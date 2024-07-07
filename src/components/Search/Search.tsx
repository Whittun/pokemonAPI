import React, { ChangeEvent, FormEvent } from 'react';

interface SearchProps {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  inputValue: string;
}

export class Search extends React.Component<SearchProps> {
  render() {
    return (
      <section className="search">
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <button type="submit" className="search__button">
            Search
          </button>
        </form>
      </section>
    );
  }
}
