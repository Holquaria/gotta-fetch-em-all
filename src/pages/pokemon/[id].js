import { useRouter } from "next/router";
import { capitaliseFirstLetter } from "@/utils/capitalise";
import Link from "next/link";
import { moveNameFormatting } from "@/utils/moveNameFormatting";

import Head from "next/head";
import MoveList from "@/components/MoveList";
import TypesCard from "@/components/TypesCard";
import StatsCard from "@/components/StatsCard";

export default function SinglePokemon({ pokemon, moveArray }) {
  const router = useRouter();
  const { id } = router.query;

  const joinedMoveArray = moveArray.map((move) => {
    for (let i = 0; i < pokemon.moves.length; i++) {
        if (move.name === pokemon.moves[i].move.name) {
            move.learned_by = pokemon.moves[i].version_group_details[0].move_learn_method.name
            move.level_learned_at = pokemon.moves[i].version_group_details[0].level_learned_at

        }
    }
  })

  return (
    <>
      <Head>
        <title>
        {pokemon.id}: {capitaliseFirstLetter(pokemon.name)} 
        </title>
      </Head>
      <div className="">
        <div>
        <Link href='/pokemon'><p className="text-center hover:cursor-pointer w-[175px] mt-4 m-auto bg-red-500 rounded-xl text-white">All Pokemon</p></Link>
        </div>
      <div className="flex m-auto justify-center p-4">
          <Link href={`/pokemon/${parseInt(pokemon.id) - 1}`}>
            <p className="mx-2 px-3 rounded-xl bg-red-500 text-white px-4">
              Previous
            </p>
          </Link>
          <Link href={`/pokemon/${parseInt(pokemon.id) + 1}`}>
            <p className="mx-2 px-3 rounded-xl bg-red-500 text-white px-4">
              Next
            </p>
          </Link>
        </div>
        <h1 className="text-3xl mt-4 text-center">
          {capitaliseFirstLetter(pokemon.name)} - ID: {pokemon.id}
        </h1>
        <TypesCard types={pokemon.types} />
          <img
            className="flex m-auto"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={`image of ${pokemon.name}`}
          />
        <StatsCard stats={pokemon.stats} />
        <h3 className="text-center text-2xl my-4">Moves Learned</h3>
        <div className="w-11/12 m-auto">
            <MoveList moveArray={moveArray} filter={'level-up'} />
            <MoveList moveArray={moveArray} filter={'machine'} />
            <MoveList moveArray={moveArray} filter={'egg'} />
            <MoveList moveArray={moveArray} filter={'tutor'} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const data = await res.json();

  const moveArray = []
  for (let i = 0; i < data.moves.length; i++) {
    const res = await fetch(data.moves[i].move.url)
    const moves = await res.json()
    moveArray.push(moves)
  }

  return {
    props: { pokemon: data, moveArray },
  };
}

export async function getStaticPaths() {
  
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset-0&limit=1280`);
  const data = await res.json()
  
  const paths = data.results.map((pokemon) => {
    return { params: { id: pokemon.name }}
  })

  for (let i = 1; i < 1009; i++) {
    const path = { params: { id: i.toString() }}
    paths.push(path)
  }

  return {
    paths,
    fallback: false
  }
}