import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const CustomerStories = () => {
    const scrollContainerRef = React.useRef(null);
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollPrev(scrollLeft > 0);
            setCanScrollNext(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
        }
    };

    React.useEffect(() => {
        checkScroll();
        // Add resize listener to recheck scrolling capabilities
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scrollPrev = () => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
    };

    const scrollNext = () => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    };

    const story1 = {
        image: "https://framerusercontent.com/images/czArdLqlHAV0VYA9RgkxSERT2M.jpeg?width=533&height=800",
        logo: "https://www.globalp.com/wp-content/uploads/2025/03/logo-stacked.svg",
        quote: "Clueso has been a game-changer for supporting our front-line and office workers. Its intuitive interface and powerful AI let us quickly deliver clear, targeted content, dramatically boosting our productivity. Plus, Clueso's customer support is among the best of any vendor we use. A truly fantastic partner!",
        author: "Daniel Wood",
        role: "Director of Learning and Development, Global Partners LP"
    };

    const story2 = {
        image: "https://framerusercontent.com/images/Q8TvzHbbxtQv0IfiSMZbqsRpr0g.png?scale-down-to=1024&width=2675&height=3750",
        logo: "https://framerusercontent.com/images/IxLJ7lRxuakGMbGGOaNmtIK10.png?scale-down-to=512&width=1659&height=739",
        quote: "With Clueso, we created and launched 8 training courses for Duda’s new editor in just one quarter—something we never thought was possible given the resources we had. The ability to make dynamic updates to videos has truly been a game-changer for my team!",
        author: "Cyrus Dorosti",
        role: "VP of Customer Success, Duda"
    };

    const story3 = {
        image: "https://framerusercontent.com/images/TrY8pZ2a9TUPCbryy3ysStDSxZw.png?width=975&height=970",
        logo: "https://framerusercontent.com/images/h1UWZCRrdWahT4Zt0HM5qvIK4WY.svg?width=204&height=40",
        quote: "As a fast-evolving software product, Personio looks for partners who help us deliver at pace. Clueso has helped us transform our video production, letting our expert video producers focus their time and opening up high-quality video production across our team. We also trust the team at Clueso to be responsive to our needs and innovative for the industry.",
        author: "Adam Avramescu",
        role: "VP - Scaled Customer Experience, Personio "
    };

    const story4 = {
        image: "https://framerusercontent.com/images/ds9zJzAoSvho4HhJWNL9qdU7l3Y.png?width=666&height=666",
        logo: "https://framerusercontent.com/images/q7JxkNGLt0Y1RgOwyS1RHm09yxE.svg?width=182&height=26",
        quote: "We got Clueso to help us create product training videos for customers, and quickly realized we could use it to scale employee training on internal workflows too. What began with a few licenses has expanded across teams. Everyone loves Clueso!",
        author: "Hillary Deal",
        role: "Director of Product Training and Enablement, Keyfactor"
    };

    const story5 = {
        image: "https://framerusercontent.com/images/hDvm3ihpPrjBaoNoE9xinWNTR5U.png",
        logo: "https://framerusercontent.com/images/mwNm8Kfr5JPNOuhaULbbW972H8.png?width=301&height=74",
        quote: "We're now producing 30+ professional-grade product videos every month. What used to take hours can now be done in just 15 minutes with Clueso.",
        author: "Krish Ramineni",
        role: "Co-founder & CEO, Fireflies.ai"
    };

    const stories = [
        { ...story1, id: 1 },
        { ...story2, id: 2 },
        { ...story3, id: 3 },
        { ...story4, id: 4 },
        { ...story5, id: 5 }
    ];

    return (
        <section className="section-padding" style={{ background: '#ffffff', paddingBottom: '5rem' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 500,
                        color: '#111827',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '-0.02em'
                    }}>
                        You're in good company
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#4b5563',
                        maxWidth: '600px',
                        margin: '0'
                    }}>
                        From start-ups to enterprises, teams of all sizes trust Clueso.
                    </p>
                </div>

                {/* Testimonial Slider Area */}
                <div style={{
                    position: 'relative',
                    marginLeft: '-1rem',
                    marginRight: '-1rem',
                }}>
                    {/* Scrolling Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                        className="hide-scrollbar"
                        style={{
                            display: 'flex',
                            gap: '2rem',
                            overflowX: 'auto',
                            padding: '1rem',
                            scrollSnapType: 'x mandatory',
                            scrollBehavior: 'smooth',
                            scrollbarWidth: 'none', // Firefox
                            msOverflowStyle: 'none'  // IE/Edge
                        }}
                    >
                        <style>{`
                            .hide-scrollbar::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>

                        {stories.map((story) => (
                            <div
                                key={story.id}
                                style={{
                                    flex: '0 0 100%',
                                    minWidth: '100%',
                                    scrollSnapAlign: 'center',
                                    background: '#F9FAFB',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    display: 'grid',
                                    gridTemplateColumns: 'minmax(0, 0.4fr) minmax(0, 0.6fr)',
                                    minHeight: '320px',
                                    border: '1px solid #f3f4f6'
                                }}
                            >
                                {/* Image Side */}
                                <div style={{
                                    position: 'relative',
                                    height: '100%',
                                    minHeight: '300px',
                                    background: '#e5e7eb'
                                }}>
                                    <img
                                        src={story.image}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                        alt={story.author}
                                    />
                                </div>

                                {/* Content Side */}
                                <div style={{
                                    padding: '2rem 3rem 2rem 2.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    {/* Logo */}
                                    <div style={{ marginBottom: '1.5rem', height: '40px', display: 'flex', alignItems: 'center' }}>
                                        <img src={story.logo} alt="Global Partners" style={{ height: '100%', maxWidth: '180px' }} />
                                    </div>

                                    {/* Quote */}
                                    <blockquote style={{
                                        fontSize: '1.25rem',
                                        color: '#4b5563',
                                        lineHeight: 1.6,
                                        marginBottom: '1.5rem',
                                        fontStyle: 'normal'
                                    }}>
                                        "{story.quote}"
                                    </blockquote>

                                    {/* Author Info */}
                                    <div>
                                        <strong style={{ color: '#111827', display: 'block', marginBottom: '0.25rem' }}>{story.author}</strong>
                                        <span style={{ color: '#6b7280', fontSize: '0.95rem' }}>{story.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons Overlay */}
                    {/* Previous Button - Condition: canScrollPrev */}
                    {canScrollPrev && (
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '-24px',
                            transform: 'translateY(-50%)',
                            zIndex: 10
                        }}>
                            <button
                                onClick={scrollPrev}
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    background: '#111827',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: 'none',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                }}
                            >
                                <ChevronLeft size={28} />
                            </button>
                        </div>
                    )}

                    {/* Next Button - Condition: canScrollNext */}
                    {canScrollNext && (
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            right: '-24px',
                            transform: 'translateY(-50%)',
                            zIndex: 10
                        }}>
                            <button
                                onClick={scrollNext}
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    background: '#111827',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: 'none',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                }}
                            >
                                <ChevronRight size={28} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CustomerStories;
