import React, {useState, Fragment} from 'react';
import { ReactComponent as ChevronLeft } from '../assets/chevron-left.svg'
import { ReactComponent as ChevronRight } from '../assets/chevron-right.svg'

import OmdbApiService from '../services/OmdbApi'

import Card from './Card'
import SearchBox from './SearchBox'

function MovieFinder() {

  const [searchResult, setSearchResult] = useState()

  const handleSearchMovie = text => {
    OmdbApiService.searchMovies(text)
      .then(res=>{
        res.Response !== "False" ? setSearchResult(res) : setSearchResult()
      })
      .catch(err=>console.error(err))
  }

  return(
    <Fragment>
      <SearchBox onSearch={handleSearchMovie} />
      {!searchResult ? (
        <p>No results yet</p>
      ) : (
        <div className="search-results">
          <div className="chevron">
            <ChevronLeft />
          </div>
          <div className="search-results-list">
            {searchResult.Search.map(result => (
              <Card key={result.imdbID} result={result} />
            ))}
          </div>
          <div className="chevron">
            <ChevronRight />
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default MovieFinder;