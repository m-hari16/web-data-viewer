import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './page/Home';
import NotFound from './page/NotFound';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
