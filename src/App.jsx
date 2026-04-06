import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Antigravity from './components/Antigravity';
import './index.css';

function App() {
  return (
    <div className="layout-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 15 }}>
        <Antigravity />
      </div>

      <div className="crosses-layer">
        <div className="crosses-bounds">
          <img src="/assets/Cross-l.png" alt="cross-l" className="cross-l" />
          <img src="/assets/Cross-r.png" alt="cross-r" className="cross-r" />
        </div>
      </div>

      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
