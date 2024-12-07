import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Intro from './components/Intro/Intro';
import AppPreview from './components/AppPreview/AppPreview';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

const theme = {
  colors: {
    primary: '#0066ff',
    secondary: '#333333',
    background: '#ffffff',
    text: '#333333',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <Hero />
        <Intro />
        <AppPreview />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
