import { motion } from 'framer-motion';
import { MagicText } from '../components/ui/MagicText';
import { Link } from 'react-router-dom';
import { poems } from '../data/poems';

export const Portfolio = () => {
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
                {poems.map((poem, index) => (
                    <motion.div
                        key={poem.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }} // Staggered card reveal
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <Link to={`/portfolio/${poem.slug}`}>
                            <div className="group bg-white/60 backdrop-blur-sm p-8 border border-ink/5 hover:border-ink/20 transition-all duration-500 cursor-pointer relative overflow-hidden h-full flex flex-col hover:shadow-lg hover:-translate-y-1 hover:rotate-1">
                                {/* Paper Texture Overlay for Card */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

                                {/* Hover Ink Effect */}
                                <div className="absolute inset-0 bg-rose/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <span className="font-handwriting text-rose text-sm block mb-2 relative z-10">{poem.category} — {poem.date}</span>
                                <h3 className="font-heading text-2xl text-ink mb-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10">{poem.title}</h3>
                                <div className="font-body text-ink/70 text-sm line-clamp-3 mb-4 flex-grow relative z-10">
                                    {poem.excerpt}
                                </div>

                                <div className="mt-auto flex justify-end relative z-10">
                                    <span className="font-bold text-xs uppercase tracking-widest text-ink/40 group-hover:text-ink transition-colors">Read Poem &rarr;</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
