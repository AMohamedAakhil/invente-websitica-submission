import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {
  return (
    <div className="flex items-center">
        <AiOutlineSearch />
        <div className="ml-3">Search...</div>
    </div>
  )
}

export default SearchBar