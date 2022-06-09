import {Link} from "react-router-dom";

function Rival() {
    return (
        
        <div className="rival-img">
        <Link class="pkmn_link" to="/Start"><p className="ball1"/></Link> 
        <Link class="pkmn__link" to="/Start"><p className="ball2"/></Link>
        <Link class="pkmn__link" to="/Arena"><p className="ball3"/></Link>
   </div>           
    );
    }
  
  export default Rival;