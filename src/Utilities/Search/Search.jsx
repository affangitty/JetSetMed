import React from 'react'
import "./Search.css"
import search from "../../../public/Images/Icons/search.png"
import downarrow from "../../../public/Images/Icons/downarrow.png"
const Search = () => {
  return (
    <div className="aphtop">
      <div className="search">
        <img src={search} />
        <input type="text" placeholder="Search name or contact number" />
      </div>
      <div className="date">
        <input type="text" placeholder="Date"/>
        <img src={downarrow} />
      </div>
      <div className="ppl">
      <input type="text" placeholder="People"/>
      <img src={downarrow} />
      </div>
    </div>
  )
}

export default Search;
