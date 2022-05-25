
import './App.css';
import Nav from './components/Nav';
import PreviousDrops from './components/PreviousDrops';
import Hero from './components/Hero'
import MBSMerch from './components/MBSMerch';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Carousel from './components/Carousel';



function App() {
  return (
    <div className='app'>
      <Nav/>
      <Carousel/>
      <Hero/>
      <PreviousDrops/>
      <MBSMerch/>
      <HowItWorks/>
      <Footer/>
    </div>
  );
}

export default App;
