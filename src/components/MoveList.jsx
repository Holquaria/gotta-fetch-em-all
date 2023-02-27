import MoveCard from "./MoveCard";
import { moveNameFormatting } from "@/utils/moveNameFormatting";

const MoveList = ({ moveArray, filter }) => {

  if (filter === "level-up") {
    moveArray.sort((p1, p2) =>
      p1.level_learned_at > p2.level_learned_at
        ? 1
        : p1.level_learned_at < p2.level_learned_at
        ? -1
        : 0
    );
  }

  return (
    <div>
      <ul className="">
        <p className="border-b border-red-900">{moveNameFormatting(filter)}</p>
        <div className="my-2">
          {moveArray.map((move) => {
            if (move.learned_by === filter) {
              return (
                <div key={move.id} className="my-2">
                  <MoveCard
                    move={move}
                    moveNameFormatting={moveNameFormatting}
                  />
                </div>
              );
            }
          })}
        </div>
      </ul>
    </div>
  );
};

export default MoveList;
