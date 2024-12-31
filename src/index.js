import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Breakfast from './Pages/Breakfast';
import Contact from './Pages/Contact';
import Dinner from './Pages/Dinner';
import Desserts from './Pages/Desserts';
import Lunch from './Pages/Lunch';
import Snacks from './Pages/Snacks';
import Keto from './Pages/Keto'; 
import Paleo from './Pages/Paleo'; 
import Vegan from './Pages/Vegan'; 
import Glutenfree from './Pages/Glutenfree'; 
import Mediterranean from './Pages/Mediterranean'; 
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="breakfast" element={<Breakfast />} />
          <Route path="dinner" element={<Dinner />} />
          <Route path="snacks" element={<Snacks />} />
          <Route path="keto" element={<Keto />} />
          <Route path="paleo" element={<Paleo />} />
          <Route path="vegan" element={<Vegan />} />
          <Route path="glutenfree" element={<Glutenfree />} />
          <Route path="mediterranean" element={<Mediterranean />} />
          <Route path="desserts" element={<Desserts />} />
        </Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
