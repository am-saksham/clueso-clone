import React from 'react';
import { Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ padding: '5rem 0 2rem 0', borderTop: 'none', background: '#fff' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.5fr) repeat(4, minmax(0, 1fr))',
                    gap: '2rem',
                    marginBottom: '5rem'
                }}>
                    {/* Brand Column */}
                    <div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <img
                                src="src/assets/clueso_logo.png"
                                alt="Clueso Logo"
                                style={{ height: '32px', display: 'block' }}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://www.linkedin.com/company/clueso/" target='_blank' style={{ color: '#d1d5db', transition: 'color 0.2s' }} aria-label="LinkedIn">
                                <Linkedin size={20} strokeWidth={1.5} />
                            </a>
                            <a href="https://x.com/goClueso" target='_blank' style={{ color: '#d1d5db', transition: 'color 0.2s' }} aria-label="Twitter">
                                <Twitter size={20} strokeWidth={1.5} />
                            </a>
                            <a href="https://www.youtube.com/@goClueso" target='_blank' style={{ color: '#d1d5db', transition: 'color 0.2s' }} aria-label="YouTube">
                                <Youtube size={20} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111827', marginBottom: '1.25rem' }}>Product</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['Pricing', 'Video', 'Documentation', 'Translate', 'AI Voiceovers', 'Slides to Video', 'Changelog'].map((item, i) => (
                                <li key={i}>
                                    <a href="#" style={{ fontSize: '0.9rem', color: '#6b7280', textDecoration: 'none' }}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111827', marginBottom: '1.25rem' }}>Resources</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                            <li><a href="#" style={{ fontSize: '0.9rem', color: '#6b7280', textDecoration: 'none' }}>Blog</a></li>
                            <li><a href="#" style={{ fontSize: '0.9rem', color: '#6b7280', textDecoration: 'none' }}>Help Center</a></li>
                            <li><a href="#" style={{ fontSize: '0.9rem', color: '#6b7280', textDecoration: 'none' }}>Customers</a></li>
                            <li><a href="#" style={{ fontSize: '0.9rem', color: '#6b7280', textDecoration: 'none' }}>Tutorials</a></li>
                            <li><a href="#" style={{ fontSize: '0.9rem', color: '#6b7280', textDecoration: 'none' }}>Affiliate Program</a></li>
                            <li><a href="#" style={{ fontSize: '0.9rem', color: '#6b7280', textDecoration: 'none' }}>Careers at Clueso</a></li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <a href="#" style={{ fontSize: '0.9rem', color: '#6b7280', textDecoration: 'none' }}>Video glossary</a>
                                <span style={{
                                    background: '#e879f9',
                                    color: 'white',
                                    fontSize: '0.65rem',
                                    fontWeight: 600,
                                    padding: '0.1rem 0.3rem',
                                    borderRadius: '4px',
                                    lineHeight: 1
                                }}>New</span>
                            </li>
                            <li><a href="#" style={{ fontSize: '0.9rem', color: '#6b7280', textDecoration: 'none' }}>FAQs</a></li>
                            <li><a href="#" style={{ fontSize: '0.9rem', color: '#6b7280', textDecoration: 'none' }}>Sitemap</a></li>
                        </ul>

                        <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111827', marginBottom: '1.25rem' }}>Free Tools</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['Video Caption Generator', 'Video Subtitle Generator', 'Video Translator', 'Add AI Voiceover to Video', 'PDF to Video Converter', 'Video to GIF Converter'].map((item, i) => (
                                <li key={i}>
                                    <a href="#" style={{ fontSize: '0.9rem', color: '#6b7280', textDecoration: 'none' }}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compare */}
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111827', marginBottom: '1.25rem' }}>Compare</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[
                                'Clueso vs Camtasia', 'Clueso vs Loom', 'Clueso vs Synthesia', 'Clueso vs Descript',
                                'Clueso vs Scribe', 'Clueso vs Guidde', 'Clueso vs Vyond', 'Clueso vs Tango',
                                'Clueso vs HeyGen', 'Clueso vs Veed'
                            ].map((item, i) => (
                                <li key={i}>
                                    <a href="#" style={{ fontSize: '0.9rem', color: '#6b7280', textDecoration: 'none' }}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Buyer's Guide */}
                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111827', marginBottom: '1.25rem' }}>Buyer's Guide</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[
                                'Best Screen Recording Software', 'Best Screen Capture Software', 'Best Documentation Software',
                                'Best Product Walkthrough Software', 'Best SOP Creation Software', 'Best Training Video Software',
                                'Best Onboarding Software', 'Best Video Editing Software', 'Best Learning Management Systems'
                            ].map((item, i) => (
                                <li key={i}>
                                    <a href="#" style={{ fontSize: '0.9rem', color: '#6b7280', textDecoration: 'none' }}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar is not explicitly shown in design but usually exists, omitting or keeping minimal as per image which ends at lists */}
            </div>
        </footer>
    );
};

export default Footer;
