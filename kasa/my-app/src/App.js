import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./../src/components/Header/Header.js";
import Footer from "./../src/components/Footer/Footer.js";
import MainContent from './../src/components/MainContent/MainContent.js';
import AccommodationDetails from './../src/components/AccommodationDetails/AccommodationDetails.js';
import NotFoundPage from './../src/components/NotFoundPage/NotFoundPage.js';
import About from './../src/components/AboutPage/About.js';
import './App.scss';


export const useData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading };
}


function App() {
  const { data, isLoading } = useData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent accommodations={data} />} />
          <Route path="/accommodation/:id" element={<AccommodationDetails />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



export default App;