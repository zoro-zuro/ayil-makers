import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Antigravity from './components/Antigravity';
import './index.css';

function App() {
  return (
    <div className="layout-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="center-bounds-bg">
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
