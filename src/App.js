
import './App.css';
import { Switch } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar.js'
import Footer from './components/footer.js'
import { CDBFooter } from 'cdbreact';
import Page from './pages/p1.js';
import Cardpage from './pages/p2.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
     
    <div className="App">
      <Navigation sticky='top' />
     
     {<Page/> }
    {/* < Cardpage/> */}

    
      


    </div>
     
  );
}

export default App;
