import React, { useEffect, useRef, useState } from 'react';

const TestimonialHighlight = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const text = "Clueso has empowered our Product team to produce high-quality videos & training content 20x faster";
    const chars = text.split('');

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Start revealing when the element is 80% down the viewport (entering)
            // Finish revealing when it's 20% down the viewport (fully visible/scrolled past)
            const startY = windowHeight * 0.9;
            const endY = windowHeight * 0.2; // Adjusted to finish later, making the animation slower/longer

            // Calculate progress: 0 when at startY, 1 when at endY
            // We clamp it between 0 and 1
            let progress = (startY - rect.top) / (startY - endY);
            progress = Math.max(0, Math.min(1, progress));

            const newActiveIndex = Math.floor(progress * chars.length);
            setActiveIndex(newActiveIndex);
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount in case already in view
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [chars.length]);

    return (
        <section className="section-padding" style={{ borderBottom: '1px solid #f3f4f6' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                <h2 ref={containerRef} style={{
                    fontSize: 'clamp(3rem, 5vw, 3.5rem)',
                    lineHeight: '1.1',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 400,
                    marginBottom: '3rem',
                    color: '#d1d5db' // Default light grey
                }}>
                    {chars.map((char, index) => (
                        <span key={index} style={{
                            color: index < activeIndex ? '#111827' : '#d1d5db',
                            transition: 'color 0.1s ease'
                        }}>
                            {char}
                        </span>
                    ))}
                </h2>

                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#f9fafb',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '16px',
                    gap: '1rem',
                    border: '1px solid #f3f4f6'
                }}>
                    <img
                        src="/sean-odonnell.png"
                        alt="Sean O'Donnell"
                        style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '8px',
                            objectFit: 'cover'
                        }}
                    />
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ fontWeight: 600, color: '#111827', fontSize: '1rem' }}>Sean O’Donnell</div>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                            Director of Product Management, Phenom
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialHighlight;
