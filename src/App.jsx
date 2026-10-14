import React, { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    let isCeiling = false;

    const handleWheel = (e) => {
      const delta = e.deltaY;

      if (delta < 0 && !isCeiling) {
        // Scrolling up -> Light Blue for top overscroll
        document.documentElement.style.background = '#74B4FB'; // or var(--sky-blue)
        isCeiling = true;
      } else if (delta > 0 && isCeiling) {
        // Scrolling down -> Dark Green for bottom overscroll
        document.documentElement.style.background = '#3c6948'; // or var(--dark-bg)
        isCeiling = false;
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="App">
      <header className="banner">
        <h1 className="banner-title">Alex Roy | Software Developer</h1>
      </header>
      <div className="forest-section">
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;