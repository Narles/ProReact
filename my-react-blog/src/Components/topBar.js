import { Link } from "react-router-dom";

const topBar = () => {

    return ( 
        <nav className="navbar">
            <div className="col-md-6">
                <h1>Lino's Blog</h1>
            </div>
            <div className="col-md-6">
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/create" style={{ 
                        color: 'white', 
                        backgroundColor: '#f1356d',
                        borderRadius: '8px' 
                    }}>New Blog</Link>
                </div>
            </div>
        </nav>   
     );
}
 
export default topBar;