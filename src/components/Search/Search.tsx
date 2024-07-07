import React, { ChangeEvent, ReactNode } from 'react';

interface SearchProps {}

interface SearchState {
  inputValue: string;
}

export class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  componentDidMount(): void {
    const searchValue = localStorage.getItem('search');

    if (!searchValue) return;

    if (searchValue !== '') {
      this.setState({ inputValue: searchValue });
    }
  }

  componentDidUpdate(prevState: Readonly<SearchState>): void {
    if (prevState.inputValue !== this.state.inputValue) {
      localStorage.setItem('search', this.state.inputValue);
    }
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  render(): ReactNode {
    return (
      <section className="search">
        <form>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button type="submit" className="search__button">
            find
          </button>
        </form>
      </section>
    );
  }
}
