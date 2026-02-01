import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface MagicTextProps {
    text: string;
    className?: string;
    delay?: number;
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
    isHTML?: boolean; // If true, we just animate the block, not chars (hard to parse chars in HTML)
}

export const MagicText: React.FC<MagicTextProps> = ({
    text,
    className,
    delay = 0,
    as: Tag = 'p',
    isHTML = false
}) => {

    // For HTML content (like paragraphs with bold tags), we stagger smoothly
    if (isHTML) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay, ease: "easeOut" }}
                viewport={{ once: true, margin: "-10%" }}
                className={cn(className)}
                dangerouslySetInnerHTML={{ __html: text }}
            />
        );
    }

    // For plain text, we animate characters for "invisible hand writing" effect
    const characters = Array.from(text);

    return (
        <Tag className={cn("inline-block", className)}>
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: 'blur(3px)' }} // Start invisible & blurred
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{
                        duration: 0.4,
                        delay: delay + (index * 0.015), // Very fast typewriter
                        ease: "easeOut"
                    }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="inline-block whitespace-pre"
                >
                    {char}
                </motion.span>
            ))}
        </Tag>
    );
};
