import { useContext, useState } from "react"
import { ImageContext } from "../App";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  const handleButtonSearch = () => {
    fetchData(`search/photos?per_page=12&query=${searchValue}&client_id=${import.meta.env.VITE_API_KEY}`)
    setSearchValue("");
    setSearchImage(searchValue);
  }
  const handleEnterSearch = e => {
    if(e.key === 'Enter') {
      fetchData(`search/photos?per_page=12&query=${searchValue}&client_id=${import.meta.env.VITE_API_KEY}`)
      setSearchValue("");
      setSearchImage(searchValue);
    }
  }

  return (
    <div className="flex gap-2">
      <input
        className="bg-gray-50 y-550 border border-gray-300 text-sm w-full py-3 indent-4 rounded-full"
        type="search"
        placeholder="Search Anything..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
        />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-blue-600 px-4 rounded-full  "
        
      >Search</button>
    </div>
  )
}

export default SearchField