import { capitaliseFirstLetter } from "@/utils/capitalise";

const TypesCard = ({ types }) => {
  return (
    <ul className="m-auto justify-center flex flex-col items-center self-center p-4">
      <div className="border-4 border-red-900 rounded-xl">
        <h2 className="py-2 text-center border-b-4 border-red-900">Types</h2>
        <div className="p-4">
          {types.map((type) => {
            const typeName = type.type.name;
            return (
              <li
                className={"px-5 my-1 w-32 text-center"}
                id={type.type.name}
                key={type.type.name}
              >
                {capitaliseFirstLetter(typeName)}
              </li>
            );
          })}
        </div>
      </div>
    </ul>
  );
};

export default TypesCard