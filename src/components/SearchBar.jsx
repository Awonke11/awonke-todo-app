import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className="search-bar">
      <FaSearch className='search-bar-icon'/>
      <input type="text" className="search-bar-input" placeholder='Search for todos'/>
    </div>
  )
}

export default SearchBar
