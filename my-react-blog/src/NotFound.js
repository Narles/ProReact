import { Link } from "react-router-dom"
const NotFound = () => {
    return ( 
        <div className="not-found">
            <br></br>
            <h1>Error - 404</h1>
            <br></br>
            <br></br>
            <h2 style={{color: '#f1356d'}}>That page cannot be found</h2>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/">Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;