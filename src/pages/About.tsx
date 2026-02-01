import { motion } from 'framer-motion';
import { StaggeredText } from '../components/ui/StaggeredText';

export const About = () => {
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
                    {/* Placeholder for Author Image */}
                    {/* Author Image */}
                    <div className="w-full h-full border border-ink/20 overflow-hidden bg-ink/5">
                        <img
                            src="/author.png"
                            alt="Poet Portrait"
                            className="w-full h-full object-cover filter sepia-[20%] contrast-110 grayscale-[30%]"
                        />
                    </div>
                    {/* Tape/Corner effect */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-rose/50"></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-rose/50"></div>
                </div>
            </motion.div>

            <div className="w-full md:w-1/2 space-y-6">
                <StaggeredText text="About the Poet" className="font-heading text-4xl md:text-5xl text-ink" />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-body text-lg leading-relaxed text-ink/80 space-y-6"
                >
                    <p>
                        I have always believed that words have texture some are rough like stone, others smooth like river water.
                        My journey began in the quiet corners of libraries, tracing lines of old verses and wondering if I could add my own whisper to the conversation.
                    </p>
                    <p>
                        This portfolio is a collection of fragments: moments caught in amber, feelings pinned to the page like butterflies.
                        Whether I am writing about the chaos of the city or the silence of the forests, my goal is always the same: to make you feel something true.
                    </p>
                    <p className="font-handwriting text-2xl text-rose pt-4">
                        "We write to taste life twice, in the moment and in retrospect." — Anaïs Nin
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
