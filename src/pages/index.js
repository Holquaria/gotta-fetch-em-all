import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import PokemonList from "@/components/PokemonList";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ pokemonArray }) {
  const [search, setSearch] = useState("");

  const filteredByName = () => {
    return pokemonArray.filter((poke) =>
      poke.name.toLowerCase().includes(search)
    );
  };

  return (
    <>
      <Head>
        <title>Gotta Fetch 'Em All!</title>
        <meta name="description" content="Search for your favourite Pokemon!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pokeball.png" />
      </Head>
      <main className={styles.main}>
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-5xl text-center">Gotta Fetch 'Em All!</h1>
          <Link href='/pokemon'><p className="text-center hover:cursor-pointer w-1/6 m-auto bg-red-500 rounded-xl text-white">All Pokemon</p></Link>
          <SearchBar search={search} setSearch={setSearch} />
          {search ? <PokemonList pokemonArray={filteredByName()} /> : null}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const pokemonArray = [];
  for (let i = 1; i < 1009; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();
    pokemonArray.push(data);
  }

  return {
    props: { pokemonArray },
  };
}
