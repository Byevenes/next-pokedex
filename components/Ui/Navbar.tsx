import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'

export const Navbar = () => {
  const { theme } = useTheme()
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray900.value
    }}>
      <Image
        src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
        alt={'pokemon icon'}
        width={70}
        height={70}
      />
      <NextLink href={'/'}>
        <Link>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href={'/favorites'} >
        <Link>
          <Text color='white'>Favorites</Text>
        </Link>
      </NextLink>

    </div>
  )
}
