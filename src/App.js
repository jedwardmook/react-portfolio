import './components/header.module.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import ReachOut from './components/ReachOut';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Projects />
      <ReachOut />
      <Footer />
    </div>
  );
}

export default App;
