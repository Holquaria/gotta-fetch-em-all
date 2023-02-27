import { capitaliseFirstLetter } from "@/utils/capitalise";

const MoveCard = ({ move, moveNameFormatting }) => {
  const formatEffectChance = (effect) => {
    return effect.replace("$effect_chance", `${move.effect_chance}`);
  };

  return (
    <div className="grid grid-cols-7 grid-rows-2 divide-red-900 border-4 border-red-900 rounded-xl p-1">
      <div className="row-span-full border-r border-red-900">
        <p className="text-center text-sm break-words">{moveNameFormatting(move.name)}</p>
      </div>
      {move.level_learned_at === 0 ? (
        <div>
            <p className="text-center text-xs">{capitaliseFirstLetter(move.learned_by)}</p>
        </div>
      ) : (
        <div>
          <p className="text-center text-xs">Level:</p>
          <p className="text-center text-xs">{move.level_learned_at}</p>
        </div>
      )}
      <div>
        <p className="text-center text-xs">Power:</p>
        <p className="text-center text-xs">{move.power ? move.power : "-"}</p>
      </div>
      <div>
        <p className="text-center text-xs">Accuracy:</p>
        <p className="text-center text-xs">
          {move.accuracy === null ? "-" : move.accuracy}
        </p>
      </div>
      <div>
        <p className="text-center text-xs">Category:</p>
        <p className="text-center text-xs">
          {capitaliseFirstLetter(move.damage_class.name)}
        </p>
      </div>
      <div>
        <p className="text-center text-xs">PP</p>
        <p className="text-center text-xs">{move.pp}</p>
      </div>
      <div>
        <p className="text-center w-1/2 m-auto text-xs" id={move.type.name}>{capitaliseFirstLetter(move.type.name)}</p>
      </div>
      <div className="col-start-2 col-end-8 border-t">
        <p className="text-center text-xs">Effect</p>
        <p className="text-center text-xs">
          {move.effect_entries[0]?.short_effect.includes("$")
            ? formatEffectChance(move.effect_entries[0].short_effect)
            : move.effect_entries[0]?.short_effect}
        </p>
      </div>
    </div>
  );
};

export default MoveCard;
