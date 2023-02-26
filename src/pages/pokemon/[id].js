import { useRouter } from "next/router";
import { capitaliseFirstLetter } from "@/utils/capitalise";
import Link from "next/link";

import Head from "next/head";

export default function SinglePokemon({ pokemon }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(pokemon);

  return (
    <>
      <Head>
        <title>
          {pokemon.name} {pokemon.id}
        </title>
      </Head>
      <div>
        <h2 className="text-3xl text-center">{capitaliseFirstLetter(pokemon.name)} - ID: {pokemon.id}</h2>
        {pokemon.sprites.front_default ? (
          <img className="flex m-auto"
            src={pokemon.sprites.front_default}
            alt={`image of ${pokemon.name}`}
          />
        ) : (
          <p>No image available</p>
        )}
        <ul className="m-auto justify-center flex flex-col items-center self-center">
          {pokemon.types.map((type) => {
            const typeName = type.type.name;
            return (
              <li className={"px-5 w-32 text-center"} id={type.type.name} key={type.type.name}>{capitaliseFirstLetter(typeName)}</li>
            );
          })}
        </ul>
        <ul className="flex flex-col items-center">
          <p>Base Stats</p>
          <div className="border-2 border-black p-4">
          {pokemon.stats.map((stat) => {
            return (
                <li className="">
                    <p className="flex">{stat.stat.name === 'hp' ? <p>HP</p> : stat.stat.name === 'special-attack' ? <p>Special Attack</p> : stat.stat.name === 'special-defense' ? <p>Special Defense</p> : <p>{capitaliseFirstLetter(stat.stat.name)}</p>}: {stat.base_stat}</p>
                    <svg className="" height='20'>
                    <rect width={stat.base_stat} height="20" className='fill-green-700 hover:fill-green-900 stroke-green-900 stroke-2' />
                    </svg>
                </li>
            )
          })}
          </div>
        </ul>
        <div className="flex m-auto justify-center p-4">
            <Link href={`/pokemon/${parseInt(pokemon.id) - 1}`}><p className="px-4">Previous</p></Link>
            <Link href={`/pokemon/${parseInt(pokemon.id) + 1}`}><p className="px-4">Next</p></Link>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
}

// export async function getStaticProps({ params }) {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
//     const data = await res.json();

//     return {
//         props: { pokemon: data },
//     }
// }

// export async function getStaticPaths() {

//     const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
//     const data = await res.json();
//     console.log(data)
//     const paths = data.results.map(pokemon => {
//         return { params: { id: pokemon.name } }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }
