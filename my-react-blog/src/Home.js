import BlogList from './BlogList';
import logo from './logo.svg';
import {useState} from 'react';

const Home = () => {
    // useState hook
    const [name, setName] = useState('Narles Lino');
    const [blogs, setBlogs] = useState([
        { title: 'My new website',   body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'Welcome party!',   body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Luigi', id: 3 }
    ])

    return (  
        <div className="homeContent">
            <img src={logo} className="App-logo" alt="logo" />            

            <BlogList blogs={blogs} title='Check all Blogs:' />

            <BlogList blogs={blogs.filter(blog => blog.author === 'Mario')} title="Mario's Blogs" />

            <p style={{ margin: 'auto', padding: '10px', color: 'red'}}>
                Meu site em React.js -- Builded by {name}
            </p>
        </div>
    );
}
 
export default Home;