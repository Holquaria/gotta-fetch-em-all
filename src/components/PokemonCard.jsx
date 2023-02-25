import Link from "next/link";
import { capitaliseFirstLetter } from "@/utils/capitalise";

const PokemonCard = ({ poke }) => {
  console.log(poke);
  return (
    <div className="w-11/12 m-auto">
      <Link href={`/pokemon/${poke.id}`}>
        <div className="w-full flex flex-row items-center justify-between">
          {poke.sprites.front_default ? (
            <img
              className=""
              src={poke.sprites.front_default}
              alt={`image of ${poke.name}`}
            />
          ) : (
            <p>No image available</p>
          )}
          <p className="self-center p-5">{poke.id}</p>
          <h3 className="self-center text-3xl p-5">
            {capitaliseFirstLetter(poke.name)}
          </h3>
          <ul className="self-center flex">
            {poke.types.map((type) => {
              const typeName = type.type.name;
              return (
                <li className="px-5" id={type.type.name} key={type.type.name}>
                  {capitaliseFirstLetter(typeName)}
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
