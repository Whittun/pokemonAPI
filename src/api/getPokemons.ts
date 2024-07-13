import { Pokemon, PokemonResult } from './types/types';

export const getPokemons = async (
  baseUrl: string,
  targetUrl: string = '',
): Promise<Pokemon[]> => {
  const url =
    targetUrl.trim() === ''
      ? baseUrl
      : `${baseUrl}${targetUrl.toLowerCase().trim()}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Pokemon not found');
  }

  const data = await response.json();

  if (targetUrl.trim() === '') {
    const promises = data.results.map(async (result: PokemonResult) => {
      const response = await fetch(result.url);
      const data = await response.json();
      return {
        name: data.name,
        image: data.sprites.front_default,
      };
    });
    return await Promise.all(promises);
  } else {
    return [
      {
        name: data.name,
        image: data.sprites.front_default,
      },
    ];
  }
};
