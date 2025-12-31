import React, { useState, useRef, useEffect } from 'react';

const ComparisonSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const containerRef = useRef(null);
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);

    const handleMove = (clientX) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const percentage = (x / rect.width) * 100;
            setSliderPosition(percentage);
        }
    };

    const handleMouseDown = (e) => {
        // Prevent drag start if clicking on controls
        if (e.target.closest('.video-controls')) return;
        setIsDragging(true);
        handleMove(e.clientX);
    };

    const handleTouchStart = (e) => {
        if (e.target.closest('.video-controls')) return;
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    const handleMouseMove = (e) => {
        if (isDragging) handleMove(e.clientX);
    };

    const handleTouchMove = (e) => {
        if (isDragging) handleMove(e.touches[0].clientX);
    };

    // Toggle Play/Pause
    const togglePlay = () => {
        const v1 = video1Ref.current;
        const v2 = video2Ref.current;

        if (isPlaying) {
            v1?.pause();
            v2?.pause();
        } else {
            v1?.play().catch(() => { });
            v2?.play().catch(() => { });
        }
        setIsPlaying(!isPlaying);
    };

    // Toggle Mute
    const toggleMute = () => {
        const v1 = video1Ref.current;
        const v2 = video2Ref.current;

        if (v1) v1.muted = !isMuted;
        if (v2) v2.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    // Toggle Fullscreen
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen().catch(() => { });
        } else {
            document.exitFullscreen();
        }
    };

    // Sync videos mainly when one plays/pauses or loops to keep them aligned
    useEffect(() => {
        const v1 = video1Ref.current;
        const v2 = video2Ref.current;

        const syncVideos = () => {
            if (v1 && v2 && Math.abs(v1.currentTime - v2.currentTime) > 0.1) {
                v2.currentTime = v1.currentTime;
            }
        };

        const interval = setInterval(syncVideos, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchend', handleTouchEnd);
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('touchmove', handleTouchMove);
        } else {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchend', handleTouchEnd);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('touchmove', handleTouchMove);
        }

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchend', handleTouchEnd);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('touchmove', handleTouchMove);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1000px',
                aspectRatio: '16/9',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'col-resize',
                margin: '0 auto',
                boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.2)',
                border: '4px solid white',
                userSelect: 'none',
                background: 'black'
            }}
        >
            {/* Before Video (Bottom Layer - "Rough Recording") */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <video
                    ref={video1Ref}
                    autoPlay
                    muted={isMuted} // Controlled mute state
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                    <source src="https://clueso-public-assets.s3.ap-south-1.amazonaws.com/original_final_airbnb.mp4" type="video/mp4" />
                </video>
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    pointerEvents: 'none'
                }}>
                    Rough Recording
                </div>
            </div>

            {/* After Video (Top Layer - "With Clueso") */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
            }}>
                <video
                    ref={video2Ref}
                    autoPlay
                    muted={isMuted} // Controlled mute state
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                    <source src="https://clueso-public-assets.s3.ap-south-1.amazonaws.com/compressed_final_airbnb.mp4" type="video/mp4" />
                </video>
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'linear-gradient(to right, #2450FF, #8b5cf6)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    pointerEvents: 'none'
                }}>
                    With Clueso
                </div>
            </div>

            {/* Slider Handle */}
            <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${sliderPosition}%`,
                width: '4px',
                background: '#2450FF',
                transform: 'translateX(-50%)',
                zIndex: 10,
                pointerEvents: 'none'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '40px',
                    height: '40px',
                    background: '#2450FF',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                    color: 'white',
                    border: '2px solid white'
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8L22 12L18 16" />
                        <path d="M6 8L2 12L6 16" />
                    </svg>
                </div>
            </div>

            {/* Controls Bar Overlay */}
            <div className="video-controls" style={{
                position: 'absolute',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px'
            }}>
                {/* Unmute Tooltip */}
                {isMuted && (
                    <div className="animate-bounce" style={{
                        background: 'white',
                        color: 'black',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        marginBottom: '12px',
                        position: 'relative',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        pointerEvents: 'none',
                        textAlign: 'center',
                        whiteSpace: 'nowrap'
                    }}>
                        Unmute to hear the difference
                        {/* Triangle pointing down */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-6px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '0',
                            height: '0',
                            borderLeft: '6px solid transparent',
                            borderRight: '6px solid transparent',
                            borderTop: '6px solid white'
                        }}></div>
                    </div>
                )}

                {/* Main Controls Pill */}
                <div style={{
                    background: 'rgba(30, 30, 30, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '100px',
                    padding: '8px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    {/* Play/Pause Button */}
                    <button
                        onClick={togglePlay}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: 0, display: 'flex' }}
                    >
                        {isPlaying ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5 3L19 12L5 21V3Z" />
                            </svg>
                        )}
                    </button>

                    {/* Divider */}
                    <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.2)' }}></div>

                    {/* Mute Button */}
                    <button
                        onClick={toggleMute}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: 0, display: 'flex' }}
                    >
                        {isMuted ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM19 12C19 12.94 18.2 14.82 17.5 15.58L18.91 17C20.21 15.59 21 13.88 21 12C21 7.63 17.81 3.96 13.65 3.1V5.13C16.89 5.92 19 8.68 19 12ZM4.27 3L3 4.27L7.73 9H4V15H9L14 20V15.27L19.73 21L21 19.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" />
                            </svg>
                        )}
                    </button>

                    {/* Divider */}
                    <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.2)' }}></div>

                    {/* Fullscreen Button */}
                    <button
                        onClick={toggleFullscreen}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: 0, display: 'flex' }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ComparisonSlider;
