import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import CareerPage from './Pages/CareerPage';
import ContactPage from './Pages/ContactPage';


function App() {
  return (
    <div className="App">
       <Header/>
      <Routes>
        <Route path='/'   element={<HomePage/>}/>
        <Route path='/about'   element={<AboutPage/>}/>
        <Route path='/services'   element={<ServicesPage/>}/>
        <Route path='/career'   element={<CareerPage/>}/>
        <Route path='/contact'   element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
