import React from 'react';

const StunningSteps = () => {
    return (
        <section className="section-padding" style={{ background: '#ffffff', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Section Header */}
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 500,
                    lineHeight: 1.1,
                    color: '#111827',
                    marginBottom: '4rem',
                    fontFamily: 'var(--font-heading)'
                }}>
                    Stunning content <br />
                    in just four steps
                </h2>

                {/* Steps Container */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Step 01 */}
                    <div style={{
                        background: '#F7F7F7', // Light gray background
                        borderRadius: '24px',
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                        minHeight: '400px',
                        position: 'sticky',
                        top: '150px',
                        zIndex: 1,
                        boxShadow: '0 -4px 20px -5px rgba(0,0,0,0.05)' // Subtle shadow for depth
                    }}>
                        {/* Content Side */}
                        <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span style={{
                                fontSize: '2rem',
                                color: '#d1d1d1',
                                fontWeight: 600,
                                marginBottom: '1rem',
                                display: 'block'
                            }}>
                                01
                            </span>

                            <h3 style={{
                                display: 'inline-block',
                                background: '#fe3459', // Red/Pink highlight
                                color: 'white',
                                padding: '0.2em 0.5em',
                                fontSize: '2rem',
                                fontWeight: 600,
                                lineHeight: 1.2,
                                marginBottom: '1.5rem',
                                width: 'fit-content'
                            }}>
                                Record or Upload
                            </h3>

                            <p style={{
                                fontSize: '1rem',
                                color: '#4b5563',
                                lineHeight: 1.6,
                                maxWidth: '400px'
                            }}>
                                Record a new video with Clueso or upload an existing screen recording or slide deck.
                            </p>
                        </div>

                        {/* Visual Side */}
                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // background removed
                        }}>
                            <img
                                src="https://framerusercontent.com/images/Mv0GK3Ui6NFdg4Rxk0Fww2N1Z0.svg"
                                alt="Start Recording"
                                style={{ width: '500px', height: 'auto', display: 'block', borderRadius: '12px' }}
                            />
                        </div>
                    </div>

                    {/* Step 02 */}
                    <div style={{
                        background: '#F7F7F7',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                        minHeight: '400px',
                        position: 'sticky',
                        top: '150px',
                        zIndex: 2,
                        boxShadow: '0 -4px 20px -5px rgba(0,0,0,0.05)'
                    }}>
                        {/* Content Side */}
                        <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span style={{
                                fontSize: '2rem',
                                color: '#d1d1d1',
                                fontWeight: 600,
                                marginBottom: '1rem',
                                display: 'block'
                            }}>
                                02
                            </span>

                            <h3 style={{
                                display: 'inline-block',
                                background: '#DD41C6', // Red/Pink highlight
                                color: 'white',
                                padding: '0.2em 0.5em',
                                fontSize: '2rem',
                                fontWeight: 600,
                                lineHeight: 1.2,
                                marginBottom: '1.5rem',
                                width: 'fit-content'
                            }}>
                                Clueso does the magic
                            </h3>

                            <p style={{
                                fontSize: '1rem',
                                color: '#4b5563',
                                lineHeight: 1.6,
                                maxWidth: '400px'
                            }}>
                                Clueso's AI improves your script, adds a natural- sounding AI voiceover, and enhances visuals.
                            </p>
                        </div>

                        {/* Visual Side */}
                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img
                                src="https://framerusercontent.com/images/3mUT4592h3O2pi7QCU6EOAjzwk.svg"
                                alt="Clueso Magic"
                                style={{ width: '100%', maxWidth: '500px', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </div>

                    {/* Step 03 */}
                    <div style={{
                        background: '#F7F7F7',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                        minHeight: '400px',
                        position: 'sticky',
                        top: '150px',
                        zIndex: 3,
                        boxShadow: '0 -4px 20px -5px rgba(0,0,0,0.05)'
                    }}>
                        {/* Content Side */}
                        <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span style={{
                                fontSize: '2rem',
                                color: '#d1d1d1',
                                fontWeight: 600,
                                marginBottom: '1rem',
                                display: 'block'
                            }}>
                                03
                            </span>

                            <h3 style={{
                                display: 'inline-block',
                                background: '#3559E9', // Blue highlight
                                color: 'white',
                                padding: '0.2em 0.5em',
                                fontSize: '2rem',
                                fontWeight: 600,
                                lineHeight: 1.2,
                                marginBottom: '1.5rem',
                                width: 'fit-content'
                            }}>
                                Customize to Your Liking
                            </h3>

                            <p style={{
                                fontSize: '1rem',
                                color: '#4b5563',
                                lineHeight: 1.6,
                                maxWidth: '400px'
                            }}>
                                Every video made by Clueso AI is fully customizable. Edit the voice, flow, or visuals directly from the video editor.
                            </p>
                        </div>

                        {/* Visual Side */}
                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img
                                src="https://framerusercontent.com/images/ngQbcmOKxyPzAGPhlCdr63RwZsg.svg"
                                alt="Customize"
                                style={{ width: '100%', maxWidth: '500px', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </div>

                    {/* Step 04 */}
                    <div style={{
                        background: '#F7F7F7',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                        minHeight: '400px',
                        position: 'sticky',
                        top: '150px',
                        zIndex: 4,
                        boxShadow: '0 -4px 20px -5px rgba(0,0,0,0.05)'
                    }}>
                        {/* Content Side */}
                        <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span style={{
                                fontSize: '2rem',
                                color: '#d1d1d1',
                                fontWeight: 600,
                                marginBottom: '1rem',
                                display: 'block'
                            }}>
                                04
                            </span>

                            <h3 style={{
                                display: 'inline-block',
                                background: '#1DAF61', // Green highlight
                                color: 'white',
                                padding: '0.2em 0.5em',
                                fontSize: '2rem',
                                fontWeight: 600,
                                lineHeight: 1.2,
                                marginBottom: '1.5rem',
                                width: 'fit-content'
                            }}>
                                Export & Share
                            </h3>

                            <p style={{
                                fontSize: '1rem',
                                color: '#4b5563',
                                lineHeight: 1.6,
                                maxWidth: '400px'
                            }}>
                                Download, embed, or share your creation as a link instantly.
                            </p>
                        </div>

                        {/* Visual Side */}
                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img
                                src="https://framerusercontent.com/images/X5OtKOMTNlbeYnUd7TDffJKhLY.svg"
                                alt="Export and Share"
                                style={{ width: '100%', maxWidth: '500px', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StunningSteps;
