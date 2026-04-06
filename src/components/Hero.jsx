import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="lines-container">
                <div className="decoration-line line-l"></div>
                <div className="decoration-line line-r"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-header">
                        WE’RE HERE TO HELP YOU
                    </h1>
                    <div className="hero-row-2">
                        <span className="grow-text">GROW </span>
                        <div className="uiux-container">
                            <span>{'{'}</span>
                            <span className="uiux-text">WITH UI/UX</span>
                            <span>{'}'}</span>
                        </div>
                    </div>
                    <p className="hero-subtext">
                        Strategy-led design for brands that want clarity, scale, and results.<br />
                        We turn ideas into structured, high-performing systems.
                    </p>
                </div>

                <div className="hero-cta-block">
                    <button className="btn-primary">
                        <div className="texture-overlay"></div>
                        <span>Get Your Free Audit</span>
                    </button>
                    <button className="btn-secondary">
                        <span>See Our Work</span>
                        <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.99994 0.667725V1.99938H2.66577V3.33355H3.99994V4.66772H5.33286V6.00064H6.66577V7.33229H7.99995V8.66772H6.66451V10.0006H5.33286V11.3323H3.99994V12.6677H2.66577V13.9994H3.99994V15.3348H6.66451V13.9994H7.99995V12.6677H9.3316V11.3336H10.6645V10.0032H11.9987V8.66772H13.3316V7.33481H11.9999V5.99938H10.6658V4.66898H9.33286V3.33355H7.99995V1.99938H6.66829V0.667725H3.99994Z" fill="#008E80"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
