import { capitaliseFirstLetter } from "@/utils/capitalise"

const TypeBar = ({ typeArray, setType }) => {
    return <ul className="flex flex-wrap w-11/12 gap-1 m-auto my-2 justify-center">{typeArray.map((type) => {
        return <li key={type} className="hover:cursor-pointer hover:shadow-lg hover:-translate-x-0.5 hover:-translate-y-0.5 text-center" id={type} onClick={() => setType(type)}>{capitaliseFirstLetter(type)}</li>
    })}
    </ul>
}

export default TypeBar