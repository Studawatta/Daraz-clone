import React from 'react';
import { Landing } from './pages';
import { Footer, Navbar } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[90px] px-40 pb-14 m-auto bg-[#f6f6f6]">
        <Landing />
      </div>
      <Footer />
    </div>
  );
};

export default App;
