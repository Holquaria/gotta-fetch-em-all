import { useRouter } from "next/router"



const SearchBar = ({search, setSearch}) => {
    const router = useRouter()

    const handleSubmit = (event) => {
        event.preventDefault()
        router.push(`/pokemon/${search}`)
    }

    return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-wrap m-auto justify-center">
            <label className="flex">
                <p className="mx-2">Search Pokemon:</p>
                <input onChange={(e) => setSearch(e.target.value)} className="border border-black" type="text" id="search" name={search} value={search} />
                <button className="mx-2 px-3 rounded-xl bg-red-500 text-white">Go!</button>
            </label>
        </form>
    </div>
    )
}

export default SearchBar