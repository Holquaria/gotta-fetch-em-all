import Link from "next/link";
import Image from "next/image";
import { capitaliseFirstLetter } from "@/utils/capitalise";

const PokemonCard = ({ poke }) => {
  console.log(poke);
  return (
    <div className="w-11/12 m-auto my-1 border rounded border-4 border-red-900 hover:bg-white hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1">
      <Link href={`/pokemon/${poke.id}`}>
        <div className="w-full grid grid-cols-3 items-center justify-between">
        <div className="flex">
            <p className="self-center pl-2">{poke.id}:</p>
            <h3 className="self-center p-2">
            {capitaliseFirstLetter(poke.name)}
            </h3>
        </div>
          {poke.sprites.front_default ? (
            <img
              className="h-16"
              src={poke.sprites.front_default}
              alt={`image of ${poke.name}`}
            />
          ) : (
            <p>No image available</p>
          )}


          <ul className="self-center flex gap-1">
            {poke.types.map((type) => {
              const typeName = type.type.name;
              return (
                <li className="px-1" id={type.type.name} key={type.type.name}>
                  <p className="text-xs">{capitaliseFirstLetter(typeName)}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
