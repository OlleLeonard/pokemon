import React from 'react'
import Fetch from '../PokeAPI/Fetch'
import Opponent from '../PokeAPI/Opponent'
import Attack from '../Combat/Attack'
import {Link} from "react-router-dom";

const Arena = () => {
  return (
    <div className="arena">
      <div className="stadium">
       <div className="main">
        <div className="main__left">
          <Fetch />
        </div>
        <div className="main__right">
          <Opponent />
        </div>
       </div>
       <div>
         <Attack />
       </div>
      </div>
      <div className="container"> <Link className="Links" to="/Choose">Press to Restart</Link></div>
    </div>
  )
}

export default Arena