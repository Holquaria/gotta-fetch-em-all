import { capitaliseFirstLetter } from "@/utils/capitalise";

const MoveCard = ({ move, moveNameFormatting }) => {
    const formatEffectChance = (effect) => {
        return effect.replace('$effect_chance', `${move.effect_chance}`)
    }

  return (
    <div className="grid grid-cols-6 border-4 border-red-900 rounded-xl p-1">
        <div>
            <p className="text-center">{moveNameFormatting(move.name)}</p>
        </div>
        <div>
            <p className="text-center">Level:</p>
            <p className="text-center">{move.level_learned_at}</p>
        </div>
        <div>
            <p className="text-center">Power:</p>
            <p className="text-center">{move.power ? move.power : '-'}</p>
        </div>
        <div >
          <p className="text-center">Accuracy:</p>
          <p className="text-center">{move.accuracy === null ? '-' : move.accuracy}</p>
        </div>
        <div>
          <p className="text-center">Category:</p>
          <p className="text-center">{capitaliseFirstLetter(move.damage_class.name)}</p>
        </div>
        <div>
            <p className="text-center">Effect</p>
            <p className="text-center">{move.effect_entries[0].short_effect.includes('$') ? formatEffectChance(move.effect_entries[0].short_effect) : move.effect_entries[0].short_effect }</p>
        </div>
    </div>
  );
};

export default MoveCard