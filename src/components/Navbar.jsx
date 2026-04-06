import React from 'react';
import { motion } from 'motion/react';

const AnimatedNavLink = ({ text, className }) => {
    return (
        <motion.a 
            href="#" 
            className={`nav-link ${className}`}
            initial="initial"
            whileHover="hover"
        >
            <span style={{ position: 'relative', display: 'flex', overflow: 'hidden', alignItems: 'center', paddingRight: '8px', marginRight: '-8px' }}>
                <span style={{ display: 'flex' }}>
                    {text.split('').map((char, i) => (
                        <motion.span
                            key={`top-${i}`}
                            style={{ display: 'inline-block', whiteSpace: 'pre' }}
                            variants={{
                                initial: { y: 0 },
                                hover: { y: "-100%" }
                            }}
                            transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1], delay: i * 0.02 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
                <span style={{ position: 'absolute', top: '100%', left: 0, display: 'flex' }}>
                    {text.split('').map((char, i) => (
                        <motion.span
                            key={`bot-${i}`}
                            style={{ display: 'inline-block', whiteSpace: 'pre' }}
                            variants={{
                                initial: { y: 0 },
                                hover: { y: "-100%" }
                            }}
                            transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1], delay: i * 0.02 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            </span>
        </motion.a>
    );
};

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="lines-container">
                <img src="/assets/Cross-l.png" alt="cross-l" className="cross-top-l" />
                <img src="/assets/Cross-r.png" alt="cross-r" className="cross-top-r" />
                <img src="/assets/Cross-l.png" alt="cross-l" className="cross-bot-l" />
                <img src="/assets/Cross-r.png" alt="cross-r" className="cross-bot-r" />
                <div className="decoration-line line-l"></div>
                <div className="decoration-line line-r"></div>
            </div>

            <div className="nav-container">
                <div className="nav-logo">
                    <img src="/assets/Logo.png" alt="Logo" width="144.5" height="48" />
                </div>

                <div className="nav-links">
                    <a href="#" className="nav-link home active">
                        <svg className="nav-chip" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.2 0.923077H12.1333V1.84615H13.0667V2.76923V3.69231V4.61538H12.1333V5.53846V6.46154H11.2V7.38462H10.2667V8.30769H9.33333V9.23077H8.4V10.1538H7.46667V11.0769H6.53333V10.1538H5.6V9.23077H4.66667V8.30769H3.73333V7.38462H2.8V6.46154H1.86667V5.53846V4.61538H0.933333V3.69231V2.76923V1.84615H1.86667V0.923077H2.8H3.73333H4.66667V1.84615H5.6V2.76923H6.53333V3.69231H7.46667V2.76923H8.4V1.84615H9.33333V0.923077H10.2667H11.2ZM9.33333 0.923077H8.4V1.84615H7.46667V2.76923H6.53333V1.84615H5.6V0.923077H4.66667V0H3.73333H2.8H1.86667V0.923077H0.933333V1.84615H0V2.76923V3.69231V4.61538H0.933333V5.53846V6.46154H1.86667V7.38462H2.8V8.30769H3.73333V9.23077H4.66667V10.1538H5.6V11.0769H6.53333V12H7.46667V11.0769H8.4V10.1538H9.33333V9.23077H10.2667V8.30769H11.2V7.38462H12.1333V6.46154H13.0667V5.53846V4.61538H14V3.69231V2.76923V1.84615H13.0667V0.923077H12.1333V0H11.2H10.2667H9.33333V0.923077Z" fill="#002B26"/>
                            <path d="M12.1333 0.923077H11.2H10.2667H9.33333V1.84615H8.4V2.76923H7.46667V3.69231H6.53333V2.76923H5.6V1.84615H4.66667V0.923077H3.73333H2.8H1.86667V1.84615H0.933333V2.76923V3.69231V4.61538H1.86667V5.53846V6.46154H2.8V7.38462H3.73333V8.30769H4.66667V9.23077H5.6V10.1538H6.53333V11.0769H7.46667V10.1538H8.4V9.23077H9.33333V8.30769H10.2667V7.38462H11.2V6.46154H12.1333V5.53846V4.61538H13.0667V3.69231V2.76923V1.84615H12.1333V0.923077Z" fill="#00C8B3"/>
                        </svg>
                        <span>Home</span>
                    </a>
                    <AnimatedNavLink text="About us" className="about-us" />
                    <AnimatedNavLink text="Service" className="service" />
                    <AnimatedNavLink text="Portfolio" className="portfolio" />
                    <AnimatedNavLink text="Testimonial" className="testimonial" />
                </div>

                <button className="nav-cta">
                    <div className="texture-overlay"></div>
                    <span className="nav-cta-text">Get Your<br />Free Audit</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
