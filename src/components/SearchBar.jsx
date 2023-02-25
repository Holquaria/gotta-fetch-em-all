import { useRouter } from "next/router"
import { useState } from "react"



const SearchBar = () => {
    const [search, setSearch] = useState('')
    const router = useRouter()

    console.log(search)


    const handleSubmit = (event) => {
        event.preventDefault()
        router.push(`/pokemon/${search}`)
    }

    return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex m-auto justify-center">
        <label>
            Search Pokemon:
            <input onChange={(e) => setSearch(e.target.value)} className="border border-black" type="text" id="search" name={search} value={search} />
            <button>Go!</button>
        </label>
    </form>
    )
}

export default SearchBar