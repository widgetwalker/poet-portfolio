import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface InkTransitionProps {
    children: ReactNode;
}

export const InkTransition = ({ children }: InkTransitionProps) => {
    return (
        <div style={{ perspective: "1500px", width: "100%", position: "relative" }}>
            <motion.div
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                exit={{ rotateY: -90 }}
                transition={{ duration: 0.7, ease: [0.645, 0.045, 0.355, 1.000] }} // cubic-bezier for "book flip" timing
                style={{
                    transformOrigin: "left center",
                    width: "100%",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    position: "relative"
                }}
            >
                {children}

                {/* Shadow/Lighting Overlay for depth */}
                <motion.div
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0.6 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-50"
                />
            </motion.div>
        </div>
    );
};
