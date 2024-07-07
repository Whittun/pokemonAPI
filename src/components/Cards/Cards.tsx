import React from 'react';
import { Card } from '../Card/Card';

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
      return <div>Loading...</div>;
    }

    if (this.props.pokemons.length === 0) {
      return <div>No Pokemon found</div>;
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
