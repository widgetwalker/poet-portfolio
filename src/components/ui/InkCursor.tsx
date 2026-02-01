import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export const InkCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isIdle, setIsIdle] = useState(false);
    const timerRef = useRef<number | null>(null);

    // Snappier spring for "Brush" feel
    const springConfig = { damping: 15, stiffness: 150 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16); // Center the 32px cursor
            cursorY.set(e.clientY - 16);

            // Reset idle timer
            setIsIdle(false);
            if (timerRef.current) clearTimeout(timerRef.current);
            // "When still start to stain" -> 400ms delay
            timerRef.current = setTimeout(() => {
                setIsIdle(true);
            }, 400);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    // Helper for random rounded blobbiness
    const blobShape = ["50%", "60% 40% 30% 70%", "50% 50% 70% 30%", "40% 60%"];

    // "Blood Red" color - roughly #8a0303
    const stainColor = "bg-[#8a0303]";

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block mix-blend-multiply"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
        >
            {/* Moving Brush Tip (Always Visible) */}
            <div className={`absolute inset-0 w-full h-full ${stainColor} rounded-full opacity-80 blur-[1px]`}></div>

            {/* Expanding Stain (Only when idle) */}
            <AnimatePresence>
                {isIdle && (
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0.9 }}
                        animate={{
                            scale: 4,
                            opacity: 0.6,
                            borderRadius: blobShape
                        }}
                        exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.3 } }}
                        transition={{
                            duration: 3, // Slow bleed
                            borderRadius: { duration: 3, repeat: Infinity, repeatType: "mirror" }
                        }}
                        className={`absolute inset-0 w-full h-full ${stainColor} -z-10 blur-sm`}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};
