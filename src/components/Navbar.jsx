import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/clueso_logo.png';
import { ChevronDown, ArrowRight, LogOut } from 'lucide-react';
import authService from '../services/api';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isResourcesHovered, setIsResourcesHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <img src={logo} alt="Clueso" style={{ height: '20px' }} />
        </div>

        {/* Links */}
        <div className="flex items-center gap-8" style={{ fontSize: '0.95rem', fontWeight: 500, color: '#4b5563', height: '100%' }}>
          {/* Product Dropdown Trigger */}
          <div
            style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => setIsProductHovered(true)}
            onMouseLeave={() => setIsProductHovered(false)}
          >
            <a className="nav-link flex items-center gap-1" style={{ cursor: 'default' }}>
              Product <ChevronDown size={14} />
            </a>

            {/* Mega Menu Dropdown */}
            {isProductHovered && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: '1rem',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                padding: '2.5rem',
                width: '850px',
                minHeight: '200px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                border: '1px solid #f3f4f6',
                zIndex: 1100, // Ensure it's above other things
                cursor: 'default'
              }}>
                {/* Capabilities Column */}
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <h4 style={{ fontSize: '0.9rem', color: '#9ca3af', fontWeight: 500, marginBottom: '1.5rem' }}>Capabilities</h4>

                  <div className="flex flex-col gap-8">
                    <div className="flex gap-4 group cursor-pointer">
                      <div style={{ color: '#ec4899' }}><Video /></div>
                      <div>
                        <div style={{ color: '#111827', fontWeight: 500, marginBottom: '0.2rem' }} className="group-hover:text-pink-500 transition-colors">Videos</div>
                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Studio style videos for any product</div>
                      </div>
                    </div>
                    <div className="flex gap-4 group cursor-pointer">
                      <div style={{ color: '#ec4899' }}><FileText /></div>
                      <div>
                        <div style={{ color: '#111827', fontWeight: 500, marginBottom: '0.2rem' }} className="group-hover:text-pink-500 transition-colors">Documentation</div>
                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Step by step articles with screenshots</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '2rem' }}>
                    {/* Changelog Card */}
                    <div style={{
                      padding: '1.5rem',
                      background: '#f9fafb',
                      borderRadius: '12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }} className="hover:bg-gray-100 transition-colors">
                      <div>
                        <div style={{ color: '#111827', fontWeight: 600, marginBottom: '0.2rem' }}>Changelog</div>
                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>See what's new in Clueso</div>
                      </div>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {/* Placeholder graphic for megaphone */}
                        <Megaphone size={32} color="#ec4899" style={{ transform: 'rotate(-15deg)' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Column */}
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#9ca3af', fontWeight: 500, marginBottom: '1.5rem' }}>Features</h4>
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-4 group cursor-pointer">
                      <div style={{ color: '#ec4899' }}><Languages /></div>
                      <div>
                        <div style={{ color: '#111827', fontWeight: 500, marginBottom: '0.2rem' }} className="group-hover:text-pink-500 transition-colors">Translate</div>
                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Translate your videos and docs</div>
                      </div>
                    </div>
                    <div className="flex gap-4 group cursor-pointer">
                      <div style={{ color: '#ec4899' }}><Mic /></div>
                      <div>
                        <div style={{ color: '#111827', fontWeight: 500, marginBottom: '0.2rem' }} className="group-hover:text-pink-500 transition-colors">AI Voiceovers</div>
                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Translate your videos and docs</div>
                      </div>
                    </div>
                    <div className="flex gap-4 group cursor-pointer">
                      <div style={{ color: '#ec4899' }}><MonitorPlay /></div>
                      <div>
                        <div style={{ color: '#111827', fontWeight: 500, marginBottom: '0.2rem' }} className="group-hover:text-pink-500 transition-colors">Slides to video</div>
                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Convert static slides into videos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown Trigger */}
          <div
            style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => setIsResourcesHovered(true)}
            onMouseLeave={() => setIsResourcesHovered(false)}
          >
            <a className="nav-link flex items-center gap-1" style={{ cursor: 'default' }}>
              Resources <ChevronDown size={14} />
            </a>

            {isResourcesHovered && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: '1rem',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                padding: '2rem',
                width: '400px', // Smaller width for single column
                border: '1px solid #f3f4f6',
                zIndex: 1100,
                cursor: 'default'
              }}>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 group cursor-pointer">
                    <div style={{ color: '#ec4899' }}><PenTool /></div>
                    <div>
                      <div style={{ color: '#111827', fontWeight: 500, marginBottom: '0.2rem' }} className="group-hover:text-pink-500 transition-colors">Blog</div>
                      <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Latest news and practical guides</div>
                    </div>
                  </div>
                  <div className="flex gap-4 group cursor-pointer">
                    <div style={{ color: '#ec4899' }}><Book /></div>
                    <div>
                      <div style={{ color: '#111827', fontWeight: 500, marginBottom: '0.2rem' }} className="group-hover:text-pink-500 transition-colors">Help Center</div>
                      <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Learn how to use Clueso</div>
                    </div>
                  </div>
                  <div className="flex gap-4 group cursor-pointer">
                    <div style={{ color: '#ec4899' }}><Users /></div>
                    <div>
                      <div style={{ color: '#111827', fontWeight: 500, marginBottom: '0.2rem' }} className="group-hover:text-pink-500 transition-colors">Customer Stories</div>
                      <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Hear from our customers</div>
                    </div>
                  </div>
                  <div className="flex gap-4 group cursor-pointer">
                    <div style={{ color: '#ec4899' }}><Type /></div>
                    <div>
                      <div style={{ color: '#111827', fontWeight: 500, marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '8px' }} className="group-hover:text-pink-500 transition-colors">
                        Video Glossary
                        <span style={{
                          fontSize: '0.7rem',
                          backgroundColor: '#d946ef',
                          color: 'white',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontWeight: 600,
                          textTransform: 'uppercase'
                        }}>New</span>
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Unhinged list of all things video production</div>
                    </div>
                  </div>
                  <div className="flex gap-4 group cursor-pointer">
                    <div style={{ color: '#ec4899' }}><MessageCircle /></div>
                    <div>
                      <div style={{ color: '#111827', fontWeight: 500, marginBottom: '0.2rem' }} className="group-hover:text-pink-500 transition-colors">FAQs</div>
                      <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Frequently asked questions</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="nav-link">Pricing</a>
          <a href="#" className="nav-link">Careers</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  flexShrink: 0
                }}
              >
                <img
                  src={user.profilePicture || `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=F770E3&color=fff`}
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=F770E3&color=fff`;
                  }}
                />
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#374151' }}>
                {user.firstName}
              </span>
              <button
                onClick={() => {
                  authService.logout();
                  setUser(null);
                  toast.success("Successfully signed out!");
                  window.location.reload();
                }}
                className="hover:text-pink-500 transition-colors"
                title="Sign Out"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#6b7280',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px'
                }}
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <>
              <button onClick={() => window.open('/login', '_blank')} className="btn btn-outline" style={{ border: '1px solid #e5e7eb', padding: '0.5rem 1rem' }}>Sign In</button>
              <button onClick={() => window.open('/signup', '_blank')} className="btn btn-primary" style={{
                padding: '0.5rem 1rem',
                backgroundColor: isScrolled ? '#F770E3' : '#000000',
                transition: 'background-color 0.3s ease'
              }}>Start Free Trial</button>
            </>
          )}
        </div>
      </div>
      <style>{`
                .nav-link:hover {
                    color: var(--color-text-main);
                }
            `}</style>
    </nav>
  );
};

export default Navbar;
