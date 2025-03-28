import NavBar from './Components/topBar'
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BlogDetails from './Components/BlogDetails';
import NotFound from './NotFound';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Narles Lino');

  return (
    <Router>
      <div className="App">  
        <NavBar/>
        <br/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create"  element={<Create />}/>
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        <footer style={{ margin: '10px auto', padding: '10px', color: 'red'}}>
               -- Made with React by {name} --
        </footer>
      </div>
      
    </Router>
  );
}

export default App;