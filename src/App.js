import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutPage from './components/AboutPage/AboutPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ContactPage from './components/ContactPage/ContactPage';
import NotFound from './components/NotFound/NotFound';
import './App.css';
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      
      <Header></Header>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;