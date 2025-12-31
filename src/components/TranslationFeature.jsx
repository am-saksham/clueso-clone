import React, { useState } from 'react';
import { Languages } from 'lucide-react';

const languages = [
    { name: 'English', flag: '🇬🇧', videoId: '1083881529' },
    { name: 'Spanish', flag: '🇪🇸', videoId: '1083880549' },
    { name: 'German', flag: '🇩🇪', videoId: '1083880688' },
    { name: 'Japanese', flag: '🇯🇵', videoId: '1083880579' },
    { name: 'Hindi', flag: '🇮🇳', videoId: '1083880507' },
    { name: 'Arabic', flag: '🇦🇪', videoId: '1083880639' },
];

const TranslationFeature = () => {
    const [activeLanguage, setActiveLanguage] = useState(languages[0]);

    return (
        <section className="section-padding" style={{ background: '#ffffff', paddingBottom: '6rem' }}>
            <div className="container">
                {/* Header */}
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#ec4899', // Pink
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        marginBottom: '1rem',
                        textTransform: 'uppercase'
                    }}>
                        <Languages size={16} />
                        TRANSLATE
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 500,
                        lineHeight: 1.1,
                        color: '#111827',
                        marginBottom: '1rem'
                    }}>
                        Hola. Hallo. こんにちは. नमस्ते.
                    </h2>

                    <p style={{ fontSize: '1.2rem', color: '#4b5563', maxWidth: '900px' }}>
                        Make the world your audience. Translate your voiceover, captions, and documentation in one click.
                    </p>
                </div>

                {/* Language Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
                    {languages.map((lang, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveLanguage(lang)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                background: activeLanguage.name === lang.name ? '#f3f4f6' : 'transparent', // Highlight active language
                                padding: '0.5rem 1rem',
                                borderRadius: '999px',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                color: '#374151',
                                cursor: 'pointer',
                                border: activeLanguage.name === lang.name ? 'none' : '1px solid transparent', // Border for active language
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <span style={{ fontSize: '1.2em' }}>{lang.flag}</span>
                            {lang.name}
                        </div>
                    ))}
                    <div style={{
                        padding: '0.5rem 1rem',
                        color: '#9ca3af',
                        fontSize: '0.95rem'
                    }}>
                        +31 More Languages
                    </div>
                </div>

                {/* Main Content Area - Split Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
                    gap: '2rem', // Separated into 2 things
                    alignItems: 'start'
                }}>
                    {/* Left Column - Vimeo Player */}
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '24px',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        overflow: 'hidden', // Ensure video corners are clipped
                        display: 'flex',     // Remove extra space
                        alignItems: 'stretch'
                    }}>
                        <div style={{ width: '100%', position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                            <iframe
                                key={activeLanguage.videoId}
                                src={`https://player.vimeo.com/video/${activeLanguage.videoId}?autopause=0&app_id=122963`}
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                title={`${activeLanguage.name} Video`}
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column - Scrollable Frame */}
                    <div style={{
                        padding: '3rem',
                        background: '#f9fafb',
                        borderRadius: '24px',
                        border: '1px solid #e5e7eb',
                        aspectRatio: '32/27', // Matches height of left column (16:9 video at 1.2fr width vs 0.8fr)
                        overflowY: 'auto', // Scrollable
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem', color: '#111827', fontFamily: 'var(--font-heading)' }}>
                            How to Book an Airbnb
                        </h4>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            {/* Step 1 */}
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{
                                    width: '24px', height: '24px', flexShrink: 0,
                                    background: '#e5e7eb', borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.75rem', fontWeight: 600, color: '#374151',
                                    marginTop: '0.1rem'
                                }}>1</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                                    <p style={{ color: '#4b5563', lineHeight: 1.5, fontSize: '0.95rem', margin: 0 }}>
                                        From the website home, search for your desired destination and dates.
                                    </p>
                                    <img
                                        src="https://framerusercontent.com/images/AA54CbN63pludk9DczrUy5RiwTs.png"
                                        alt="Search Step"
                                        style={{ width: '100%', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'block' }}
                                    />
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{
                                    width: '24px', height: '24px', flexShrink: 0,
                                    background: '#e5e7eb', borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.75rem', fontWeight: 600, color: '#374151',
                                    marginTop: '0.1rem'
                                }}>2</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                                    <p style={{ color: '#4b5563', lineHeight: 1.5, fontSize: '0.95rem', margin: 0 }}>
                                        Find a place you like from the list of options.
                                    </p>
                                    <img
                                        src="https://framerusercontent.com/images/xmgmXBVcvWoFkpvr4TYLwBigmcM.png"
                                        alt="Select Option Step"
                                        style={{ width: '100%', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'block' }}
                                    />
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{
                                    width: '24px', height: '24px', flexShrink: 0,
                                    background: '#e5e7eb', borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.75rem', fontWeight: 600, color: '#374151',
                                    marginTop: '0.1rem'
                                }}>3</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                                    <p style={{ color: '#4b5563', lineHeight: 1.5, fontSize: '0.95rem', margin: 0 }}>
                                        Once you've found a place you like, click on it to view more details and read reviews. When you're ready to book, click on "Reserve".
                                    </p>
                                    <img
                                        src="https://framerusercontent.com/images/RwcJpcRoEbDicdK7DShGkpM54.png"
                                        alt="Reserve Step"
                                        style={{ width: '100%', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'block' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TranslationFeature;
