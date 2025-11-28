import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Card from './components/Card';
import Testimonials from './components/Quote';
import Footer from './components/Footer';
import CEO from './components/About';
import Main from './components/Main';
import Strategy from './components/Strategy';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Herosection />

        <Card />
        <Strategy />
        <Main />
        <Testimonials />
        <CEO />
        <Footer />
      </div>
    </>
  );
}

export default App;
