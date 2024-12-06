import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Intro from './components/sections/Intro';
import MainSection from './components/sections/MainSection';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Intro />
      <MainSection />
    </div>
  );
}

export default App;
