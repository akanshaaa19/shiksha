
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import { Hero } from './Components/Hero';
import { Roadmap } from './Components/Roadmap';
import {LoginStudent} from './Components/LoginStudent';
import {SearchBar} from './Components/SearchBar';
import TrendingNow from './Components/TrendingNow';
import {Routes,BrowserRouter as Router,Route} from "react-router-dom"
import { Home } from './Components/Home';
function App() {
  return (
   <div>
    <Router>
      <Routes>
      <Route element={<LoginStudent/>} path={"/login"}/>
        <Route element={<Home/>} path={"/"}/>
        <Route element={<Roadmap />} path={"/roadmap/:id"}/>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
