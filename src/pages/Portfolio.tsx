import { motion } from 'framer-motion';
import { MagicText } from '../components/ui/MagicText';
import { Link } from 'react-router-dom';
import { poems } from '../data/poems';
import { useEffect } from 'react';

// Map categories to subtle accent colors from the design system
const categoryAccents: Record<string, { border: string; bg: string; text: string }> = {
    // Dark/pain themes → rose (muted red, grief)
    'Masks': { border: 'border-rose/40', bg: 'hover:bg-rose/5', text: 'text-rose' },
    'Reflection': { border: 'border-ink-light/30', bg: 'hover:bg-ink-light/5', text: 'text-ink-light' },
    'Heartbreak': { border: 'border-rose/50', bg: 'hover:bg-rose/8', text: 'text-rose' },
    'Love Dynamics': { border: 'border-rose/30', bg: 'hover:bg-rose/5', text: 'text-rose' },
    'Loss': { border: 'border-ink/20', bg: 'hover:bg-ink/5', text: 'text-ink/60' },
    'Resilience': { border: 'border-sage/50', bg: 'hover:bg-sage/5', text: 'text-sage' },
    'Humanity': { border: 'border-ink-light/30', bg: 'hover:bg-ink-light/5', text: 'text-ink-light' },
    'Desire': { border: 'border-rose/40', bg: 'hover:bg-rose/5', text: 'text-rose' },
    'Friendship': { border: 'border-sage/40', bg: 'hover:bg-sage/5', text: 'text-sage' },
    'Longing': { border: 'border-ink-light/30', bg: 'hover:bg-ink-light/5', text: 'text-ink-light' },
    'Acceptance': { border: 'border-sage/40', bg: 'hover:bg-sage/5', text: 'text-sage' },
    'Cherished': { border: 'border-rose/30', bg: 'hover:bg-rose/5', text: 'text-rose' },
    'Grief': { border: 'border-ink/25', bg: 'hover:bg-ink/5', text: 'text-ink/60' },
    'Fear': { border: 'border-ink/20', bg: 'hover:bg-ink/5', text: 'text-ink/60' },
    'Trauma': { border: 'border-ink/20', bg: 'hover:bg-ink/5', text: 'text-ink/60' },
    'Connection': { border: 'border-sage/50', bg: 'hover:bg-sage/5', text: 'text-sage' },
    'Trust': { border: 'border-ink-light/30', bg: 'hover:bg-ink-light/5', text: 'text-ink-light' },
    'Fear of Love': { border: 'border-rose/40', bg: 'hover:bg-rose/5', text: 'text-rose' },
    'Bond': { border: 'border-sage/40', bg: 'hover:bg-sage/5', text: 'text-sage' },
};

const getAccent = (category: string) =>
    categoryAccents[category] ?? { border: 'border-rose/30', bg: 'hover:bg-rose/5', text: 'text-rose' };

export const Portfolio = () => {
    useEffect(() => {
        document.title = "Collected Works | Theodore";
    }, []);

    return (
        <div className="py-12 max-w-4xl mx-auto">
            <header className="mb-16 text-center">
                <MagicText text="Collected Works" as="h1" className="font-heading text-5xl md:text-6xl text-ink mb-4" />
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-px w-32 bg-rose mx-auto"
                ></motion.div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {poems.map((poem, index) => {
                    const accent = getAccent(poem.category);
                    return (
                        <motion.div
                            key={poem.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <Link to={`/portfolio/${poem.slug}`}>
                                <div className={`group bg-white/60 backdrop-blur-sm p-8 border ${accent.border} ${accent.bg} transition-all duration-500 cursor-pointer relative overflow-hidden h-full flex flex-col hover:shadow-lg hover:-translate-y-1 hover:rotate-1`}>
                                    {/* Paper Texture Overlay */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

                                    <span className={`font-handwriting ${accent.text} text-sm block mb-2 relative z-10`}>{poem.category} — {poem.date}</span>
                                    <h3 className="font-heading text-2xl text-ink mb-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10">{poem.title}</h3>
                                    <div className="font-body text-ink/70 text-sm line-clamp-3 mb-4 flex-grow relative z-10">
                                        {poem.excerpt}
                                    </div>

                                    <div className="mt-auto flex justify-end relative z-10">
                                        <span className={`font-bold text-xs uppercase tracking-widest text-ink/40 group-hover:${accent.text} transition-colors`}>Read Poem &rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
