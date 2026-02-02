import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export const InkCursor = () => {
    // Current mouse position tracking
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring for the main cursor dot
    const springConfig = { damping: 20, stiffness: 100 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Trail state
    const [trail, setTrail] = useState<{ x: number, y: number, id: number }[]>([]);
    const requestRef = useRef<number | null>(null);
    const mousePos = useRef({ x: -100, y: -100 });

    // Idle detection
    const [isIdle, setIsIdle] = useState(false);
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            cursorX.set(e.clientX - 6); // Offset for center of main dot
            cursorY.set(e.clientY - 6);

            // Reset idle timer
            setIsIdle(false);
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                setIsIdle(true);
            }, 500);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    // Animation Loop for Trail
    useEffect(() => {
        const animateTrail = () => {
            setTrail(prevTrail => {
                const newPoint = { x: mousePos.current.x, y: mousePos.current.y, id: Date.now() };

                // Keep last 20 points
                const newTrail = [...prevTrail, newPoint].slice(-20);

                // If the mouse hasn't moved much, don't add points to avoid bunching? 
                // Actually, for a "drying" ink effect, we might want points to disappear.

                // Filter out old points implicitly by slicing, but we also want time-based decay?
                // For React performance, just slicing is better.
                return newTrail;
            });

            requestRef.current = requestAnimationFrame(animateTrail);
        };

        requestRef.current = requestAnimationFrame(animateTrail);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    // Color: Dark Ink
    // const inkColor = "bg-[#2C3E50]"; // Using 'ink' color code
    // Color: Blood Red
    const inkColor = "bg-[#8a0303]";

    // Helper for random rounded blobbiness
    const blobShape = ["50%", "60% 40% 30% 70%", "50% 50% 70% 30%", "40% 60%"];

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
            {/* The Trail */}
            <svg className="absolute inset-0 w-full h-full overflow-visible">
                {trail.map((point, i) => {
                    // Calculate fading opacity based on index
                    const opacity = (i / trail.length) * 0.5;
                    const size = 2 + (i / trail.length) * 4; // Thinner at tail? Quills are usually consistent or taper at end.
                    // Let's make it taper at the END (oldest point).

                    return (
                        <circle
                            key={point.id + i}
                            cx={point.x}
                            cy={point.y}
                            r={size / 2}
                            fill="#8a0303"
                            opacity={opacity}
                        />
                    );
                })}
            </svg>

            {/* Main Cursor (The Nib) */}
            <motion.div
                className={`fixed top-0 left-0 w-3 h-3 ${inkColor} rounded-full`}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
            />

            {/* Expanding Stain (Only when idle) */}
            <AnimatePresence>
                {isIdle && (
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0.9 }}
                        animate={{
                            scale: 4,
                            opacity: 0.6,
                            borderRadius: blobShape // Organic shape
                        }}
                        exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.3 } }}
                        transition={{
                            duration: 3, // Slow bleed like original
                            borderRadius: { duration: 3, repeat: Infinity, repeatType: "mirror" }
                        }}
                        style={{
                            translateX: cursorXSpring,
                            translateY: cursorYSpring,
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: 12, // Match cursor size basis
                            height: 12,
                            background: '#8a0303',
                            zIndex: -1,
                            filter: 'blur(2px)', // Softens edges for liquid look
                            mixBlendMode: 'multiply' // Blends with paper
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};
