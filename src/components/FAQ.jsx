import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is Clueso?",
            answer: "Clueso is an AI-powered platform that helps you create stunning product videos and documentation in minutes. We turn your screen recordings into professional guides with AI voiceovers and polished visuals."
        },
        {
            question: "How does Clueso keep my data secure?",
            answer: "We prioritize your security with enterprise-grade encryption and strict data privacy policies. Your content is yours, and we ensure it stays protected at all times."
        },
        {
            question: "What export formats does Clueso support?",
            answer: "You can export your videos in MP4 format, and your documentation as PDF, HTML, or embed them directly into your knowledge base tools like Notion, Intercom, and more."
        },
        {
            question: "Can I collaborate with my team on Clueso?",
            answer: "Absolutely! Clueso is built for teams. You can invite team members, share projects, and collaborate in real-time to create content faster."
        },
        {
            question: "Where can I see more customer reviews of Clueso?",
            answer: "You can check out our G2 and Capterra profiles to read reviews from satisfied customers who have transformed their documentation workflow with Clueso."
        },
        {
            question: "Can I try Clueso before purchasing?",
            answer: "Yes, we offer a free trial so you can experience the magic of Clueso firsthand. No credit card required to get started."
        },
        {
            question: "What kind of support do you offer?",
            answer: "We offer dedicated support via email and chat. Enterprise plans also include a dedicated account manager to ensure your success."
        },
        {
            question: "Who is Clueso for?",
            answer: "Clueso is perfect for Customer Success teams, Product Managers, L&D professionals, and anyone who needs to create high-quality instructional content quickly."
        }
    ];

    return (
        <section className="section-padding" style={{ background: '#ffffff', paddingBottom: '8rem' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 0.35fr) minmax(0, 0.65fr)',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    {/* Left Column: Title */}
                    <div>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: 500,
                            color: '#111827',
                            margin: '0',
                            fontFamily: 'var(--font-heading)',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1
                        }}>
                            Frequently<br />
                            Asked<br />
                            Questions
                        </h2>
                    </div>

                    {/* Right Column: Accordion */}
                    <div>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                style={{
                                    borderBottom: '1px solid #e5e7eb',
                                }}
                            >
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '1.5rem 0',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left'
                                    }}
                                >
                                    <span style={{
                                        fontSize: '1.125rem',
                                        fontWeight: 500,
                                        color: '#111827',
                                        fontFamily: 'var(--font-body)'
                                    }}>
                                        {faq.question}
                                    </span>
                                    <span style={{
                                        color: '#ec4899', // Pink color
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginLeft: '1rem'
                                    }}>
                                        {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateRows: openIndex === index ? '1fr' : '0fr',
                                    transition: 'grid-template-rows 0.3s ease-out',
                                }}>
                                    <div style={{ overflow: 'hidden' }}>
                                        <div style={{
                                            paddingBottom: '1.5rem',
                                            color: '#4b5563',
                                            lineHeight: 1.6,
                                            fontSize: '1rem',
                                            opacity: openIndex === index ? 1 : 0,
                                            transform: openIndex === index ? 'translateY(0)' : 'translateY(-10px)',
                                            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
                                        }}>
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
