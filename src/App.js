import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Service from './Components/Service';
import './bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
