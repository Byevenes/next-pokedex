import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import Image from 'next/image';

interface Props {
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout>
      <ul>
        {pokemons.map(({ id, name, image }) => (
          <div key={id}>
            <Image
              src={image}
              alt={'pokemon'}
              width={70}
              height={70}
            />
            <li>#{id} - {name}</li>
          </div>
        ))}
      </ul>
    </Layout>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default Home
