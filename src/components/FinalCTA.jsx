import React from 'react';

const FinalCTA = () => {
    return (
        <section className="section-padding" style={{ background: '#ffffff', paddingBottom: '8rem' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    backgroundImage: 'url(https://framerusercontent.com/images/XWkNSGHHwN7pSuIoMe5Sb8ljz4.png?width=3552&height=1500)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '500px', // Fixed height for impact
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 5rem'
                }}>
                    {/* Content Container */}
                    <div style={{ maxWidth: '600px', zIndex: 1 }}>
                        <h2 style={{
                            fontSize: 'clamp(3rem, 5vw, 4rem)',
                            fontWeight: 500,
                            color: '#ffffff',
                            marginBottom: '1.5rem',
                            fontFamily: 'var(--font-heading)',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em'
                        }}>
                            Start making<br />
                            beautiful videos
                        </h2>

                        <p style={{
                            fontSize: '1.25rem',
                            color: 'rgba(255, 255, 255, 0.9)',
                            marginBottom: '2.5rem',
                            lineHeight: 1.6,
                            maxWidth: '480px'
                        }}>
                            Transform rough screen recordings into stunning videos & documentation.
                        </p>

                        <button style={{
                            backgroundColor: '#ec4899', // Pink button
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: '12px',
                            border: 'none',
                            fontSize: '1.125rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease, background-color 0.2s ease',
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.backgroundColor = '#db2777';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.backgroundColor = '#ec4899';
                            }}
                        >
                            Begin Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
