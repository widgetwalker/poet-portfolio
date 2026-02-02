import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Splatter {
    id: number;
    x: number;
    y: number;
    scale: number;
    rotation: number;
}

export const InkClickEffect = () => {
    const [splatters, setSplatters] = useState<Splatter[]>([]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const newSplatter = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
                scale: 0.5 + Math.random() * 0.8, // Random size
                rotation: Math.random() * 360,
            };

            setSplatters((prev) => [...prev, newSplatter]);

            // Clean up after animation
            setTimeout(() => {
                setSplatters((prev) => prev.filter((s) => s.id !== newSplatter.id));
            }, 1000);
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
            <AnimatePresence>
                {splatters.map((splatter) => (
                    <SplatterItem key={splatter.id} {...splatter} />
                ))}
            </AnimatePresence>
        </div>
    );
};

const SplatterItem = ({ x, y, scale, rotation }: Splatter) => {
    return (
        <motion.div
            initial={{ opacity: 0.8, scale: 0 }}
            animate={{ opacity: 0, scale: scale }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                position: 'absolute',
                left: x,
                top: y,
                width: 0,
                height: 0,
            }}
        >
            <div
                className="relative -translate-x-1/2 -translate-y-1/2 w-32 h-32"
                style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
            >
                {/* Main splatter shape - simplified SVG path or CSS blob */}
                <svg viewBox="0 0 100 100" className="w-full h-full fill-ink opacity-80">
                    <path d="M50 20 C60 10, 80 10, 80 30 C90 40, 90 60, 70 70 C60 85, 40 85, 30 70 C10 60, 10 40, 20 30 C20 10, 40 10, 50 20 Z" />
                </svg>
                {/* Satellite drops */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-ink rounded-full opacity-60"></div>
                <div className="absolute bottom-10 left-0 w-3 h-3 bg-ink rounded-full opacity-70"></div>
                <div className="absolute top-10 left-10 w-1 h-1 bg-ink rounded-full opacity-50"></div>
            </div>
        </motion.div>
    );
};
