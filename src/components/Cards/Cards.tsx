import React from 'react';
import { Card } from '../Card/Card';

import './Cards.css';

interface Pokemon {
  name: string;
  image: string;
}

interface CardsProps {
  isLoading: boolean;
  pokemons: Pokemon[];
}

export class Cards extends React.Component<CardsProps> {
  render() {
    if (this.props.isLoading) {
      return <p className="cards__load">Loading...</p>;
    }
    return (
      <section className="cards">
        <ul className="cards__list">
          {this.props.pokemons.map((pokemon) => (
            <Card
              key={pokemon.name}
              image={pokemon.image}
              title={pokemon.name}
            />
          ))}
        </ul>
      </section>
    );
  }
}
