const searchMovies = async (title, page) => {

  const response = await fetch(`http://www.omdbapi.com/?apikey=a461e386&s=${title}&page=${page}`)

  return response.json()
}

const OmdbApiService = { searchMovies }

export default OmdbApiService