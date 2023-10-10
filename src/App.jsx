import React from 'react';
import { Landing, SingleProduct } from './pages';
import { Footer, Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className=" relative top-[60px] sm:top-[90px] xl:px-40 pb-8 sm:pb-14 m-auto bg-[#f6f6f6] w-full min-w-full">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/item/:id" element={<SingleProduct />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
