import React from 'react'
import searchCSS from "../Searches/Search.module.css"
const Search = () => {
  return (
    <div className={`${searchCSS.search_wrapper} section`} id='searches'> 
      <h2>Beliebte Suchanfragen</h2>
      <div className={searchCSS.Cards}>
        <div className={searchCSS.card}>
            <i className='ri-search-line'></i>
          <h3>
          Inlandsreisen <span>Sehen Sie Amerika in einem neuen Licht</span>
          </h3>
        </div>
        <div className={searchCSS.card}>
            <i className='ri-search-line'></i>
          <h3>
           Vacations in 14 Days<span> Limited Avealiablity and Seling Fast</span>
          </h3>
        </div>
        <div className={searchCSS.card}>
            <i className='ri-search-line'></i>
          <h3>
           Offer for Traveling Groups <span> Save When you 9+ Guests</span>
          </h3>
        </div>
        <div className={searchCSS.card}>
            <i className='ri-search-line'></i>
          <h3>
          Past Guests Benefits  <span> Save When you 9+ Guests</span>
          </h3>
        </div>
        <div className={searchCSS.card}>
            <i className='ri-search-line'></i>
          <h3>
          Tours Under $2000 <span>Browse Our Value Vacations</span>
          </h3>
        </div>
        <div className={searchCSS.card}>
            <i className='ri-search-line'></i>
          <h3>
          Past Guests Benefits  <span>Saving With Global Tour Rewards</span>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Search
