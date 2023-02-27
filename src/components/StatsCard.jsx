import { capitaliseFirstLetter } from "@/utils/capitalise";

const StatsCard = ({ stats }) => {
  return (
    <ul className="flex flex-col items-center">
      <div className="border-4 rounded-xl border-red-900">
        <p className="text-center w-full border-b-4 border-red-900 p-2">
          Base Stats
        </p>
        <div className="p-4">
          {stats.map((stat) => {
            return (
              <li key={stat.stat.name} className="px-2">
                <div className="flex">
                  {stat.stat.name === "hp" ? (
                    <p>HP</p>
                  ) : stat.stat.name === "special-attack" ? (
                    <p>Special Attack</p>
                  ) : stat.stat.name === "special-defense" ? (
                    <p>Special Defense</p>
                  ) : (
                    <p>{capitaliseFirstLetter(stat.stat.name)}</p>
                  )}
                  : <p>{stat.base_stat}</p>
                </div>
                <svg className="" height="20">
                  <rect
                    width={stat.base_stat}
                    height="20"
                    className="fill-green-700 hover:fill-green-900 stroke-green-900 stroke-2"
                  />
                </svg>
              </li>
            );
          })}
        </div>
      </div>
    </ul>
  );
};

export default StatsCard