import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Navbar } from '../Ui/Navbar';

interface Props extends PropsWithChildren {
  title?: string
}

export const Layout: FC<Props> = ({ children, title = 'Pokemon App' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Brayan Yevenes" />
        <meta name="description" content={`Información soobre el pokémon ${title}`} />
        <meta name="keywords" content={` ${title}, pokemon,. pokedex `} />
      </Head>

      <Navbar />

      <main style={{ padding: '0px 20px' }}>
        {children}
      </main>
    </>
  )
}