import { ReactNode } from 'react';
import { Card } from '../Card/Card';

import './Cards.css';
import { Pokemon } from '../../api/types/types';

interface CardsProps {
  isLoading: boolean;
  pokemons: Pokemon[];
}

export const Cards = ({ isLoading, pokemons }: CardsProps): ReactNode => {
  if (isLoading) {
    return <p className="cards__load">Loading...</p>;
  }
  return (
    <section className="cards">
      <ul className="cards__list">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} image={pokemon.image} title={pokemon.name} />
        ))}
      </ul>
    </section>
  );
};
