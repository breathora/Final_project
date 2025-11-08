import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import CardComponent from './components/CardComponent';
import DescriptionPage from './pages/DescriptionPage';

function App() {

  return (
    <Router>
    <div className="App d-flex flex-column min-vh-100">
      <header className="text-white py-3" style={{backgroundColor: 'rgba(243, 189, 39, 1)'}}>
        
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <img src={logo} className="App-logo" alt="logo" style={{height: '80px'}} />
            
          </div>
          <div className="col-md-9 text-end">
            <Link to="/description" className="text-black text-decoration-none me-3"></Link>
          </div>
        </div>
      </div>
      </header>
      <main className="container my-5">
        <Routes>
          <Route path="/description" element={<DescriptionPage/>}/>
        </Routes>  
      </main>
      <footer className="py-3 mt-auto" style={{backgroundColor: 'rgba(218, 142, 1, 1)'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <span>2025, Агаева А.Н., Москва, Россия</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;
