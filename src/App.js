
import './App.css';
import Navbar from './components/Navbar';
import Display from './components/Display';
import Add from './components/Add';

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route  path='/' element={<Display />}></Route>
      <Route  path='/add' element={<Add />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
