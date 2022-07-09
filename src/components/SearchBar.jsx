import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="search-bar">
      <FaSearch className='search-bar-icon'/>
      <input 
        type="text" 
        className="search-bar-input" 
        placeholder='Search for todos'
        value={searchValue}
        onChange={(e) => {setSearchValue(e.target.value)}}
      />
    </div>
  )
}

export default SearchBar;
