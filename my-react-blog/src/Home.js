import BlogList from './Components/BlogList';
import logo from './img/logo.svg';
import useFetch from "./Components/useFetch";

const Home = () => {
    // Hooks
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs');

    return (  
        <div className="homeContent">

            <img src={logo} className="App-logo" alt="logo" />          
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} /> }
            
        </div>        
    );
}
 
export default Home;