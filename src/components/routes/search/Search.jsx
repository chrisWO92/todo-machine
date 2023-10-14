import React from 'react'
import { useSearchParams} from 'react-router-dom'
import HomePage from '../home/HomePage'

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search')
  return (
    <HomePage search={search} />
    
  )
}

export default Search