import { Link } from 'react-router-dom';
import { StaggeredText } from '../components/ui/StaggeredText';
import { motion } from 'framer-motion';

export const Home = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative overflow-hidden">

            {/* Ambient Background Glow (Optional, since we removed video) */}
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
        </section>
    );
};
