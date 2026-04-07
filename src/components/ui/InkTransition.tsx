import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface InkTransitionProps {
    children: ReactNode;
}

export const InkTransition = ({ children }: InkTransitionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", y: 15 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(12px)", y: -15 }}
            transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for a very smooth, organic ease-out
            }}
            className="w-full relative"
        >
            {children}
        </motion.div>
    );
};
