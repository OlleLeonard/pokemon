import {Link} from "react-router-dom";
function Choose() {
    return (
        
        <div className="choose-img">
           <Link className="pkmn__link" to="/Rival"><p className="ball1"/></Link>
            <Link className="pkmn_link" to="/Rival"><p className="ball2"/></Link>
           <Link className="pkmn__link" to="/Start"><p className="ball3"/></Link>
   </div>           
    );
    }
  
  export default Choose;