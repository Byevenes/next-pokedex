import { pokeApi } from '../api';
import { Pokemon } from '../interfaces/pokemon-full';
export type PokemonInfo = Pick<Pokemon, 'sprites' | 'name' | 'id'>
export type PokemonNameOrId = PokemonInfo['name'] | PokemonInfo['id']

export const getPokemonInfo = async (T: PokemonNameOrId): Promise<PokemonInfo> => {
  const { data: { id: idPokemon, name, sprites } } = await pokeApi.get<Pokemon>(`pokemon/${T}`)

  const pokemon = {
    id: idPokemon,
    name,
    sprites,
  }

  return pokemon
}