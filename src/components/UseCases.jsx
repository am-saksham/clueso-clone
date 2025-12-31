import React, { useState } from 'react';
import {
    BookOpen,
    Megaphone,
    Sprout,
    HandCoins,
    ClipboardList,
    Monitor,
    Headphones,
    Code
} from 'lucide-react';

const cases = [
    { id: 'customer-education', label: 'Customer Education', icon: BookOpen, videoId: 'YFlWhyPLTaQ' },
    { id: 'product-marketing', label: 'Product Marketing', icon: Megaphone, videoId: 'Ej6uun5X928' },
    { id: 'learning-development', label: 'Learning & Development', icon: Sprout, videoId: '1tRpxoa6ZTw' },
    { id: 'sales-enablement', label: 'Sales Enablement', icon: HandCoins, videoId: 'hB_kz0_ICf0' },
    { id: 'product-management', label: 'Product Management', icon: ClipboardList, videoId: 'RH__cU3NVBQ' },
    { id: 'it-change-management', label: 'IT Change Management', icon: Monitor, videoId: 'YFlWhyPLTaQ' },
    { id: 'customer-success', label: 'Customer Success/Support', icon: Headphones, videoId: 'xinIJoxmNYE' },
    { id: 'engineering', label: 'Engineering', icon: Code, videoId: '8qcCkifuq0E' },
];

const UseCases = () => {
    const [activeTab, setActiveTab] = useState('customer-education');
    const activeCase = cases.find(c => c.id === activeTab);

    return (
        <section className="section-padding" style={{ background: '#ffffff' }}>
            <div className="container">
                <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 600, lineHeight: 1.1, color: '#111827', marginBottom: '1rem' }}>
                        Clueso is built for you
                    </h2>
                    <p style={{ fontSize: '1.15rem', color: '#4b5563' }}>
                        Explaining software is hard. Clueso makes it easy.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: '4rem', alignItems: 'start' }}>
                    {/* Left Navigation */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {cases.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1rem 1.5rem',
                                    borderRadius: '8px',
                                    background: activeTab === item.id ? '#f3f4f6' : 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'all 0.2s ease',
                                    color: activeTab === item.id ? '#111827' : '#6b7280',
                                    fontWeight: activeTab === item.id ? 400 : 400,
                                    fontSize: '1.2rem'
                                }}
                            >
                                <item.icon
                                    size={24}
                                    color={activeTab === item.id ? '#ec4899' : '#9ca3af'}
                                    strokeWidth={activeTab === item.id ? 1 : 1}
                                />
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Right Content Area - Full Video */}
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '850px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}>
                        <div style={{
                            position: 'relative',
                            paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
                            height: 0,
                            overflow: 'hidden',
                            background: '#000' // Black bg for video placeholder
                        }}>
                            <iframe
                                key={activeCase.videoId} // Force re-render on video change
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    border: 0
                                }}
                                src={`https://www.youtube.com/embed/${activeCase.videoId}?rel=0`}
                                title={activeCase.label}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseCases;
