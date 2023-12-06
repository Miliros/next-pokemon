import React, { ReactNode } from "react";
import { FC } from 'react';

import Head from 'next/head';
import { NavBar } from "../ui";

interface Props {
  title?: string;
  children: ReactNode;

}


export const Layout: FC<Props> = ({ children, title }) => {
  return (
      <>
        <Head>
            <title>{ title || 'PokemonApp' }</title>
            <meta name="author" content="Fernando Herrera" />
            <meta name="description" content={`Información sobre el pokémon ${ title }`} />
            <meta name="keywords" content={ `${ title }, pokemon, pokedex`} />
        </Head>
      
<NavBar/>
        <main style={{
          padding: '0px 15px'
        }}>
            { children }
        </main>
      
      </>
  )
};