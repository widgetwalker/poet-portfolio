import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InkTransitionProps {
    children: ReactNode;
}

export const InkTransition = ({ children }: InkTransitionProps) => {
    return (
        <div style={{ perspective: "1500px", width: "100%", position: "relative" }}>
            <motion.div
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                    transformOrigin: "left center",
                    width: "100%",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden"
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};
