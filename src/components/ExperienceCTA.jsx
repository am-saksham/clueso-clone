import React from 'react';

const ExperienceCTA = () => {
    return (
        <section className="section-padding" style={{ background: '#ffffff', paddingTop: '2rem', paddingBottom: '6rem' }}>
            <div className="container">
                <div style={{
                    background: '#262626', // Dark background
                    borderRadius: '24px',
                    padding: '6rem 2rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}>
                    {/* Logo */}
                    <img
                        src="https://framerusercontent.com/images/O5aCDw9DBjuYHa1LCCmFDdhk7M.png?width=472&height=252"
                        alt="Clueso Logo Icon"
                        style={{ width: '120px', height: 'auto', marginBottom: '1rem' }}
                    />

                    {/* Heading */}
                    <h2 style={{
                        color: '#ffffff',
                        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                        marginBottom: '0.5rem'
                    }}>
                        Experience it yourself
                    </h2>

                    {/* Button */}
                    <button className="btn" style={{
                        background: '#e93bf0', // Pink from screenshot
                        color: 'white',
                        border: 'none',
                        padding: '1rem 2rem',
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        marginTop: '1rem'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        onClick={() => window.open('/login', '_blank')}
                    >
                        Make Your First Video
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ExperienceCTA;
