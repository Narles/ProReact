import BlogList from './Components/BlogList';
import logo from './img/logo.svg';
import {useState} from 'react';
import useFetch from "./Components/useFetch";

const Home = () => {
    // Hooks
    const [name, setName] = useState('Narles Lino');
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs');

    return (  
        <div className="homeContent">
            <img src={logo} className="App-logo" alt="logo" />            

            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} /> }

            <p style={{ margin: '10px auto', padding: '10px', color: 'yellow'}}>
               -- Made with React by {name} --
            </p>
        </div>
    );
}
 
export default Home;