
import './App.css';
// import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
// import Portfolio from './components/portfolio';
import Projects from './components/project';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
    
  <Routes>
    <Route path='/' element={<About/>} />
    <Route path='/projects' element={<Projects/>}  />
    <Route path='/contact' element={<Contact/>}  />
  </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
