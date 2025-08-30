import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Navbar from './sections/Navbar.jsx';
import Projects from "./sections/Projects.jsx";
import Clients from "./sections/Clients.jsx";
import Contacts from "./sections/Contacts.jsx";
import Footer from "./sections/Footer.jsx";


const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Clients/>
      <Contacts/>
        <Footer/>
    </main>
  );
};

export default App;
