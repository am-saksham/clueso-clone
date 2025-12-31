import React from 'react';

const FeatureCard = ({ title, description, badge }) => (
    <div style={{
        background: '#ffffff',
        borderRadius: '24px',
        padding: '3rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        border: '1px solid #f3f4f6',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '500px'
    }}>
        <div style={{ marginBottom: '2rem' }}>
            {/* Placeholder for feature visual */}
            <div style={{
                width: '100%',
                height: '200px',
                background: 'linear-gradient(to top, #f9fafb, transparent)',
                borderRadius: '12px'
            }}></div>
        </div>

        <div style={{ position: 'relative' }}>
            {badge && (
                <span style={{
                    position: 'absolute',
                    top: '-40px',
                    left: 0,
                    color: '#ec4899', // Pink
                    fontSize: '1.5rem'
                }}>✦</span>
            )}
            <h3 style={{ fontSize: '1.75rem', fontWeight: 500, marginBottom: '1rem', color: '#111827' }}>
                {title}
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', lineHeight: 1.6 }}>
                {description}
            </p>
        </div>
    </div>
);

const Features = () => {
    return (
        <section className="section-padding" style={{ background: '#ffffff' }}>
            <div className="container">
                <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
                    <div style={{
                        color: '#d946ef',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        marginBottom: '1rem',
                        fontSize: '0.9rem'
                    }}>
                        ✦ CRAFTED WITH AI
                    </div>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 500, lineHeight: 1.1, color: '#111827' }}>
                        Major video edits, automated.
                    </h2>
                    <p style={{ fontSize: '1.15rem', color: '#4b5563', marginTop: '1.5rem' }}>
                        AI does the heavy-lifting. The final touches are all yours – everything is customizable.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                    <FeatureCard
                        title="Perfect Video Scripts"
                        description="AI removes filler words and rewrites your script clearly and concisely, perfectly matching your brand voice."
                    />
                    <FeatureCard
                        title="Lifelike AI Voiceovers"
                        description="Your recorded audio is swapped with AI voiceovers that sound impressively professional and realistic."
                    />
                    <FeatureCard
                        title="Smart Auto-Zooms"
                        description="AI automatically zooms into key actions, highlighting exactly what viewers need to see."
                    />
                    <FeatureCard
                        title="Beautiful Captions"
                        description="Instantly engage your viewers with eye-catching, AI-generated captions."
                    />
                    <FeatureCard
                        title="Auto-Generated SOPs & How-Tos"
                        description="Clear, step-by-step documentation magically created from your videos."
                    />
                    <FeatureCard
                        title="Branded Video Templates"
                        description="Keep your videos consistently on brand with themed intros, outros, and backgrounds."
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
