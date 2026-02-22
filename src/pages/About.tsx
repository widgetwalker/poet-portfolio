import { motion } from 'framer-motion';
import { StaggeredText } from '../components/ui/StaggeredText';
import { useEffect } from 'react';

export const About = () => {
    useEffect(() => {
        document.title = "About | Theodore";
    }, []);

    return (
        <div className="py-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
            >
                <div className="relative aspect-[3/4] bg-ink/5 p-4 rounded-sm">
                    {/* Author Image */}
                    <div className="w-full h-full border border-ink/20 overflow-hidden bg-ink/5">
                        <img
                            src="/author.png"
                            alt="Poet Portrait"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Handwritten label beneath the photo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="absolute -bottom-8 left-0 right-0 text-center"
                    >
                        <span className="font-handwriting text-xl text-ink/50 rotate-1 inline-block">
                            — Theodore, 2024
                        </span>
                    </motion.div>

                    {/* Tape/Corner effect */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-rose/50"></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-rose/50"></div>
                </div>
            </motion.div>

            <div className="w-full md:w-1/2 space-y-6 mt-8 md:mt-0">
                <StaggeredText text="About the Poet" className="font-heading text-4xl md:text-5xl text-ink" />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-body text-lg leading-relaxed text-ink/80 space-y-6"
                >
                    <p>
                        I write because silence has never been enough. Born in chaos, raised in contradiction — poetry became the one language that didn't lie to me. Every poem here is a scar turned into a sentence, a feeling that refused to stay buried.
                    </p>
                    <p>
                        I don't write about sunsets. I write about the moment after — when the light dies and you're left alone with your thoughts. Whether it's heartbreak, friendship, fear, or the strange comfort of feeling lost, my goal is always the same: to make you feel seen.
                    </p>
                    <p className="font-handwriting text-2xl text-rose pt-4">
                        "We write to taste life twice, in the moment and in retrospect." — Anaïs Nin
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
