import { render, screen } from '@testing-library/react';
import { Pokemon } from '../../api/types/types';
import { Cards } from './Cards';

const mockPokemons: Pokemon[] = [
  { name: 'Picachu', image: 'pikachu.png' },
  { name: 'Charmander', image: 'charmander.png' },
];

describe('cards component', () => {
  it('renders the specified number of cards', () => {
    render(<Cards error={null} isLoading={false} pokemons={mockPokemons} />);

    const cards = screen.getAllByRole('listitem');
    expect(cards.length).toBe(mockPokemons.length);
  });

  it('displays a loading message when loading', () => {
    render(<Cards error={null} isLoading={true} pokemons={[]} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays an appropriate message if no cards are present', () => {
    render(
      <Cards error={'Pokemon not found'} isLoading={false} pokemons={[]} />,
    );

    expect(screen.queryByRole('listitem')).toBeNull();
    expect(screen.getByText('Pokemon not found')).toBeInTheDocument();
  });
});
