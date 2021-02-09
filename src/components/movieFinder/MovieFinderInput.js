import React, { useState } from 'react'

function MovieFinderInput({onSearch}) {

  const [inputValue, setInputValue] = useState('')


  const handleSubmit = e => {
    e.preventDefault()
    onSearch(inputValue)
  }

  const handleInputChange = e => setInputValue(e.target.value)

  return(
    <form className="search">
      <input type="text" placeholder="Search..." value={inputValue} onChange={handleInputChange} />
      <button type="submit" onClick={handleSubmit}>Search</button>
    </form>
  )
}

export default MovieFinderInput