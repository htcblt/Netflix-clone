/* eslint-disable jsx-a11y/alt-text */
import axios from './../../api/localaxios'
import React, { useEffect, useState } from 'react'
import './Category.css'

const Category = ({ title, isLargeRow, fetchURL }) => {
  const [movies, setMovie] = useState([])
  const movieName = movies.title || movies.name
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL)
      setMovie(request.data.results)
      return request
    }
    fetchData()
  }, [fetchURL])
  const base_url = 'https://image.tmdb.org/t/p/original/'
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <div>
              <img
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                className={`rowposter ${isLargeRow && 'largeImage'}`}
                key={movie.id}
                alt={movieName}
              />
              <p>{movieName} </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Category
