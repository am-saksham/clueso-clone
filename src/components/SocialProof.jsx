import React from 'react';

const SocialProof = () => {
    const logos = [
        { name: "Phenom", url: "https://framerusercontent.com/images/RefCSwvoRZRsLIZDPw6pIJkGxeE.png?width=345&height=144" },
        { name: "Samsara", url: "https://framerusercontent.com/images/sbyzNMRReTntcG6tkTqk3VTAis.png?scale-down-to=512&width=3000&height=842" },
        { name: "Smartsheet", url: "https://framerusercontent.com/images/rQQIU9uM43Iygg7iZaUlSZDxro.png?width=345&height=144" },
        { name: "Personio", url: "https://framerusercontent.com/images/hREg4z1o0bK9pf1gHSBAuCG5JM.png?width=345&height=144" },
        { name: "UiPath", url: "https://framerusercontent.com/images/gcDmOJGVEqSsvEF8KT3Zo44KD20.png?width=234&height=145" },
        { name: "Duda", url: "https://framerusercontent.com/images/ynuGxxKUM2Lbi8W7idQsymxOxLo.png?width=345&height=144" },
        { name: "Darwinbox", url: "https://framerusercontent.com/images/pIfeZhS6zoJzPS2iYgltKr66oc.png?width=345&height=144" },
        { name: "MovableInk", url: "https://framerusercontent.com/images/WEJ9KG2rCZOyCwut6IcXkRbKQLw.png?width=345&height=144" },
        { name: "Keyfactor", url: "https://framerusercontent.com/images/fPxF23Q4MSswc6pn3weaxKo5eo.png?width=345&height=144" },
        { name: "MoEngage", url: "https://framerusercontent.com/images/rpClTIkj1irpyhp0BJphNABTOsY.png?width=345&height=132" },
        { name: "Fireflies.ai", url: "https://framerusercontent.com/images/YQlv1GP5rHPPLtTBB0FfWXAtCLs.png?width=345&height=144" },
        { name: "Pleo", url: "https://framerusercontent.com/images/nABqmriDXNt3hmXFXchJmWLLQc8.png?width=345&height=144" }
    ];

    return (
        <section className="section-padding" style={{ borderBottom: '1px solid #f3f4f6' }}>
            <div className="container">
                <div className="flex items-center justify-between w-full gap-8" style={{ marginBottom: '3rem', fontSize: '0.95rem', color: '#6b7280' }}>
                    {/* Left Line */}
                    <div style={{ height: '1px', background: '#e5e7eb', flex: 1 }}></div>

                    {/* Content */}
                    <div className="flex items-center gap-16">
                        {/* Backed by YC */}
                        <div className="flex items-center gap-3">
                            <span>Backed by</span>
                            <div className="flex items-center gap-2">
                                <div style={{
                                    background: '#f97316',
                                    color: 'white',
                                    width: '24px',
                                    height: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                    borderRadius: '3px'
                                }}>Y</div>
                                <span style={{ color: '#f97316', fontWeight: 'bold' }}>Combinator</span>
                            </div>
                        </div>

                        {/* Rated on G2 */}
                        <div className="flex items-center gap-3">
                            <span>Rated 4.9</span>
                            <span style={{ color: '#f59e0b', fontSize: '1.2rem' }}>★</span>
                            <span>on</span>
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://company.g2.com/hs-fs/hubfs/brand-guide/g2-logo.png?width=300&name=g2-logo.png"
                                    alt="G2 Logo"
                                    style={{ height: '24px', width: 'auto' }}
                                />
                                <span style={{ color: '#374151', fontWeight: 'bold' }}>G2<span style={{ fontWeight: 'normal', color: '#6b7280' }}>.com</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Right Line */}
                    <div style={{ height: '1px', background: '#e5e7eb', flex: 1 }}></div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    // borderTop: '1px solid #f3f4f6', // Removed outer top border
                    // borderLeft: '1px solid #f3f4f6' // Removed outer left border
                }}>
                    {logos.map((logo, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '5rem 2rem',
                            borderRight: (index + 1) % 4 !== 0 ? '1px solid #f3f4f6' : 'none',
                            borderBottom: index < 8 ? '1px solid #f3f4f6' : 'none',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        >
                            <img
                                src={logo.url}
                                alt={logo.name}
                                style={{
                                    maxWidth: '200px',
                                    maxHeight: '80px',
                                    objectFit: 'contain',
                                    filter: 'grayscale(100%)',
                                    opacity: 0.6,
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(0%)';
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(100%)';
                                    e.currentTarget.style.opacity = '0.6';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
