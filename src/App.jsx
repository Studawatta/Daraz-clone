import React from 'react';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="px-40 m-auto bg-[#f6f6f6]">
        <Landing />
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default App;
