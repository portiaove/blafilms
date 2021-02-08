import React from 'react';

const searchMovies = async (title) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=a461e386&s=${title}`,
  )

  return response.json()

}

export default { searchMovies }