import React, {useState, Fragment} from 'react';
import { ReactComponent as ChevronLeft } from '../../assets/chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../assets/chevron-right.svg'

import OmdbApiService from '../../services/OmdbApi'

import MovieCard from './MovieCard'
import MovieFinderInput from './MovieFinderInput'


function MovieFinder() {

  const [searchResult, setSearchResult] = useState()
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)


  const searchMovieService = (search, page) =>{
    OmdbApiService.searchMovies(search, page)
      .then(res => res.Response !== "False" ? setSearchResult(res) : setSearchResult())
      .catch(err=>console.error(err))
  }


  const handleSearchMovie = text => {
    setSearch(text)
    setPage(1)
    searchMovieService(text, 1)
  }

  const handlePagination = d => {
    if (d === 'right' && searchResult.Search.length === 10) {
      setPage(page+1)
      searchMovieService(search, page+1)
    }
    if (d === 'left' && page>1) {
      setPage(page-1)
      searchMovieService(search, page-1)
    }
  }
  

  return(
    <Fragment>
      <MovieFinderInput onSearch={handleSearchMovie} />
      {!searchResult ? (
        <p className="center-text">No results yet</p>
      ) : (
        <div className="search-results">
          <div className="chevron">
            <ChevronLeft onClick={()=>handlePagination('left')}/>
          </div>
          <div className="search-results-list">
            {searchResult.Search.map(result => (
              <MovieCard key={result.imdbID} result={result} />
            ))}
          </div>
          <div className="chevron">
            <ChevronRight onClick={()=>handlePagination('right')}/>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default MovieFinder;