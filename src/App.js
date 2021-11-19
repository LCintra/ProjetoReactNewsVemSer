import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Politica from './pages/Politica';
import Mundo from './pages/Mundo'
import Saude from './pages/Saude'
import Ciencia from './pages/Ciencia'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import {NewsListProvider} from './context/NewsListContext';
import InsideNews from './components/InsideNews/InsideNews';

function App() {
  return (
    <>
      <NewsListProvider>
        <Router>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/politica" element={<Politica/>}></Route>
              <Route path="/saude" element={<Saude/>}></Route>
              <Route path="/mundo" element={<Mundo/>}></Route>
              <Route path="/ciencia" element={<Ciencia/>}></Route>
              <Route path="/noticia" element={<InsideNews/>}></Route>
          </Routes>
        </Router>
      </NewsListProvider>
    </>
  );
}

export default App;
