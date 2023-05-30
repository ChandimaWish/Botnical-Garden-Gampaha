import React from 'react'
import Navbar from './components/Navbar'
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contacts';
import Gallery from './pages/Gallery';
import Herbarium from './pages/Herbarium';
import News from './pages/News';
import Publication from './pages/Publication';
import Services from './pages/Services';



function App() {
  return (
    <div className='app'>
     <Router>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contacts' element={<Contact/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Herbarium' element={<Herbarium/>}/>
        <Route path='/News' element={<News/>}/>
        <Route path='Publication' element={<Publication/>}/>
        <Route path='Services' element={<Services/>}/>
      </Routes>
     
      
      
      </Router>
      
      
      
    </div>
  );
}

export default App
