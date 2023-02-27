import PokemonList from "@/components/PokemonList";
import SearchBar from "@/components/SearchBar";
import TypeBar from "@/components/TypeBar";
import { capitaliseFirstLetter } from "@/utils/capitalise";

import { useState } from "react";

export default function PokemonIndex({ pokemonArray }) {
    const [search, setSearch] = useState('')
    const [type, setType] = useState('')

    const typeArray = [
        'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'
    ]

    const filteredByName = () => {
        return pokemonArray.filter((poke) => poke.name.toLowerCase().includes(search));
    };

    const filterByType = (type) => {
        return pokemonArray.filter((poke) => {
            for (let i = 0; i < poke.types.length; i++) {
                if (poke.types[i].type.name === type) {
                    return true
                }
            }
        })
    }


  return (
    <div>
        <div className="py-4 border-b-4 border-red-900">
            <SearchBar search={search} setSearch={setSearch} filteredByName={filteredByName} />
        </div>
        <div className="py-2">
        <TypeBar typeArray={typeArray} setType={setType} />
        </div>
      {search ? 
        <div>
            <p>Pokemon</p>
            <PokemonList pokemonArray={filteredByName()} />
        </div>
        : type ? 
        <div>
            <div className="flex gap-2 items-center">
                <p>Filter by Type: </p>
                <p id={type}>{capitaliseFirstLetter(type)}</p>
                <button onClick={() => setType('')}>Reset</button>
            </div>
            <PokemonList pokemonArray={filterByType(type)} />
        </div> 
      : <PokemonList pokemonArray={pokemonArray} />
      }
    </div>
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
