import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar';

import Card from './components/Card';
import Testimonials from './components/Quote';
import Footer from './components/Footer';
import CEO from './components/About';
import Main from './components/Main';
import Strategy from './components/Strategy';
import ScrollTransition from './components/Pagetransition';
import Herosection from './components/Herosection';

function App() {
  return (
    <>
      <ScrollTransition>
        <Navbar />
      </ScrollTransition>
      <ScrollTransition>
        <Herosection />
      </ScrollTransition>
      <ScrollTransition>
        <Card />
      </ScrollTransition>
      <ScrollTransition>
        <Strategy />
      </ScrollTransition>
      <ScrollTransition>
        <Main />
      </ScrollTransition>
      <ScrollTransition>
        <Testimonials />
      </ScrollTransition>
      <ScrollTransition>
        <CEO />
      </ScrollTransition>
      <Footer />
    </>
  );
}

export default App;
