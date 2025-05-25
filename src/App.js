import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import ContactForm from './Pages/ContactForm';
import ProjectOverview from './Pages/ProjectOverview';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
       <ScrollToTop />
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/project/:id" element={<ProjectOverview/>} />
        </Routes>
        <ContactForm/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
