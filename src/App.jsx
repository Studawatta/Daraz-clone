import React from 'react';
import { Landing } from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className=" relative top-[90px] px-40 m-auto bg-[#f6f6f6]">
        <Landing />
        <div className="h-60"></div>
      </div>
    </div>
  );
};

export default App;
