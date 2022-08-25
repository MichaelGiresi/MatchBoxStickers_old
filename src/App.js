
import './App.css';
import Nav from './components/Nav';
import PreviousDrops from './components/PreviousDrops';
import Hero from './components/Hero'
import MbsMerch from './components/MbsMerch';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import NavCarousel from './components/NavCarousel';
import RedBullets from './components/RedBullets';



function App() {
  return (
    <div className='app'>
      <Nav/>
      <NavCarousel/>
      <Hero/>
      <RedBullets/>
      {/* <PreviousDrops/> */}
      <MbsMerch/>
      <HowItWorks/>
      <Footer/>
    </div>
  );
}

export default App;
