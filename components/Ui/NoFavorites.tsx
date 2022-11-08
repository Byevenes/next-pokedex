import { Container, Image, Text } from '@nextui-org/react'

export const NoFavorites = () => {
  return (
    <Container
      display='flex'
      direction='column'
      alignItems='center'
      justify='center'
      css={{ height: 'calc(100vh - 100px)' }}>
      <Text></Text>
      <Image
        src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'}
        alt={'pokemon'}
        height={250}
        width={250}
      />
    </Container>
  )
}
