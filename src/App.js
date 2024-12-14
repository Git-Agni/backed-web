import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import AppPreview from './components/AppPreview';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';


function App() {
  return (
    <div className="mt-0 w-full">
      <div className="relative z-10 bg-red isolate" id="section-wrapper-home">
        <div className=" top-0 z-50">
          <Navbar />
        </div>
        <div className=" mb-16">
          <Hero />
        </div>
      </div>

        <Intro />
   

      <div className="mt-16 mb-16">
        <AppPreview />
      </div>

      <div className="mt-16 mb-16">
        <Testimonials />
      </div>

      <div className="mt-16 mb-16">
        <FAQ />
      </div>

      <div className="mt-16">
        <Footer />
      </div>
        {/* <h1 className='text-3xl font-bold underline bg-red-500'>Hello</h1> */}
        
      </div>
     
  );
}

export default App;
