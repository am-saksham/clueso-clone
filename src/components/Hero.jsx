import React from 'react';
import ComparisonSlider from './ComparisonSlider';

const Hero = () => {
    const [isDemoHovered, setIsDemoHovered] = React.useState(false);

    return (
        <section style={{ position: 'relative', overflow: 'hidden', paddingBottom: '4rem' }}>
            {/* Background Image */}
            {/* Background Image */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '1000px', // Constrain width
                height: '1000px',
                zIndex: -1,
                pointerEvents: 'none' // Ensure clicks pass through
            }}>
                <img
                    decoding="auto"
                    width="2952"
                    height="1968"
                    src="https://framerusercontent.com/images/YZKxOgTgkIZQK5Cm06NGZpz5k.png?width=2952&height=1968"
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        opacity: 0.8 // Slight opacity to match design feel
                    }}
                />
            </div>

            <div className="container" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
                <div style={{ maxWidth: '800px' }}>
                    <h1 style={{
                        fontSize: '4.5rem',
                        fontWeight: 500,
                        lineHeight: 1,
                        letterSpacing: '-0.02em',
                        marginBottom: '0.5rem'
                    }}>
                        Product videos <br />
                        <span style={{ color: '#9ca3af' }}>in minutes with AI</span>
                    </h1>

                    <p style={{
                        fontSize: '1.05rem',
                        color: '#4b5563',
                        marginBottom: '2.5rem',
                        maxWidth: '800px'
                    }}>
                        Transform raw screen recordings into stunning videos & documentation.
                    </p>

                    <div className="flex gap-4">
                        <button
                            className="btn"
                            onClick={() => window.open('/signup', '_blank')}
                            style={{
                                padding: '0.6rem 1.4rem',
                                fontSize: '1rem',
                                backgroundColor: '#F770E3',
                                color: 'white'
                            }}
                        >
                            Start Free Trial
                        </button>
                        <button
                            className="btn"
                            onClick={() => window.open('/login', '_blank')}
                            onMouseEnter={() => setIsDemoHovered(true)}
                            onMouseLeave={() => setIsDemoHovered(false)}
                            style={{
                                padding: '0.6rem 1.4rem',
                                fontSize: '1rem',
                                borderColor: '#F770E3',
                                backgroundColor: isDemoHovered ? '#FAE6F8' : 'white',
                                color: '#F770E3',
                                border: '1px solid #F770E3',
                                transition: 'background-color 0.2s ease'
                            }}
                        >
                            Book a Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero Image Mockup Area */}
            <div className="container">
                <ComparisonSlider />
            </div>
        </section>
    );
};

export default Hero;
