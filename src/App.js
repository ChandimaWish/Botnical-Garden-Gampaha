import React from 'react'
import Navbar from './components/Navbar'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    <div className='app'>
     <Router>
      <Navbar/>
      {/* <Switch>

      </Switch> */}
      </Router>
      
      
      
    </div>
  )
}

export default App
