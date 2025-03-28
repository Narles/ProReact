import NavBar from './Components/topBar'
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BlogDetails from './Components/BlogDetails';
import NotFound from './NotFound';

function App() {
  
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
      </div>
    </Router>
  );
}

export default App;