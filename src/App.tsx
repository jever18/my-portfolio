// src/App.tsx
import Header from './components/Header.tsx';
import HeroSection from './components/HeroSection.tsx';
import About from './components/About.tsx'; // Import komponen About
import Projects from './components/Projects.tsx'; // Import komponen Projects
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import StickyCat from './components/StickyCat.tsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About /> {/* Tambahkan komponen About di sini */}
        <Projects /> {/* Tambahkan komponen Projects di sini */}
	<Contact />
      </main>
      <Footer />
      <StickyCat />
    </>
  );
}

export default App;
