import { motion, type Variants } from 'framer-motion';

export const StaggeredText = ({ text, className = "" }: { text: string, className?: string }) => {
    const letters = Array.from(text);

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 10, // Slight lift effect like ink hitting paper
        },
    };

    return (
        <motion.h1
            className={`inline-block ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible" // Animate when it scrolls into view
            viewport={{ once: true }}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.h1>
    );
};
