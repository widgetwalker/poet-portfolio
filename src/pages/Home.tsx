import { Link } from 'react-router-dom';
import { StaggeredText } from '../components/ui/StaggeredText';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Pick a few evocative excerpts from the poems for rotation
const featuredExcerpts = [
    { text: "I'll forever be grateful to the universe for bringing you to me, and at the same time I'll never forgive it for taking you away.", title: "Unannounced" },
    { text: "there are some people that are just meant to be a sunrise for you, a light to pull you out of the darkness.", title: "Seasonal People" },
    { text: "I seem happy right? You see no new cuts on my wrists — A smile on my lips.", title: "The Truth Within" },
    { text: "people scare me because you can never tell what they're thinking or feeling.", title: "People Scare Me" },
    { text: "I fix everyone I love, but in the end I have no strength left to heal myself.", title: "Sober Thoughts" },
];

export const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        document.title = "The Painted Journal | Theodore";
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % featuredExcerpts.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-radial from-transparent to-parchment/60 pointer-events-none"></div>

            <div className="mb-12 relative z-10">
                <StaggeredText
                    text="The Painted Journal"
                    className="font-heading text-6xl md:text-8xl text-ink mb-6"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="font-handwriting text-2xl md:text-3xl text-rose rotated-[-2deg]"
                >
                    Where ink bleeds into soul.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                className="relative z-10"
            >
                <Link
                    to="/portfolio"
                    className="group relative inline-block px-12 py-4 font-body tracking-widest text-sm uppercase text-ink border border-ink/20 hover:text-parchment transition-colors duration-500"
                >
                    <span className="relative z-10">Open the Book</span>
                    <div className="absolute inset-0 bg-ink scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out -z-0"></div>
                </Link>
            </motion.div>

            {/* Rotating Featured Poem Excerpt */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1.5 }}
                className="relative z-10 mt-20 max-w-xl px-6"
            >
                <div className="h-px w-12 bg-rose/50 mx-auto mb-6"></div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 1.2 }}
                    >
                        <p className="font-handwriting text-lg md:text-xl text-ink/50 italic leading-relaxed">
                            "{featuredExcerpts[currentIndex].text}"
                        </p>
                        <span className="font-body text-xs tracking-widest uppercase text-rose/60 mt-3 block">
                            — {featuredExcerpts[currentIndex].title}
                        </span>
                    </motion.div>
                </AnimatePresence>
                <div className="h-px w-12 bg-rose/50 mx-auto mt-6"></div>
            </motion.div>
        </section>
    );
};
