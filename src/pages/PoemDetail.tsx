import { useParams, Link, useNavigate } from 'react-router-dom';
import { poems } from '../data/poems';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { MagicText } from '../components/ui/MagicText';

export const PoemDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const poem = poems.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!poem) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-ink">
                <h2 className="font-heading text-3xl mb-4">Poem Not Found</h2>
                <button onClick={() => navigate('/portfolio')} className="text-rose hover:underline font-handwriting text-xl">
                    Return to Collection
                </button>
            </div>
        );
    }

    // Parse content by splitting typical block tags
    // This is a naive parser to allow animating blocks individually
    const contentBlocks = poem.content
        .split(/(<p.*?>.*?<\/p>|<br\/>)/g)
        .filter(block => block.trim() !== "");

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-3xl mx-auto py-12 md:py-20"
        >
            <Link to="/portfolio" className="inline-flex items-center text-ink/60 hover:text-rose transition-colors mb-12 group font-body text-sm tracking-widest uppercase">
                <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                Back to Collection
            </Link>

            <article className="prose prose-lg prose-p:font-body prose-headings:font-heading prose-p:text-ink/80 prose-headings:text-ink max-w-none">
                <header className="mb-12 text-center">
                    <MagicText text={poem.date} className="font-handwriting text-rose text-lg block mb-2" delay={0.1} />
                    <MagicText text={poem.title} as="h1" className="text-5xl md:text-6xl mb-6" delay={0.2} />
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1 bg-ink/10 mx-auto rounded-full"
                    ></motion.div>
                </header>

                <div className="font-body text-xl leading-loose md:px-12 space-y-4">
                    {contentBlocks.map((block, index) => {
                        // If it's a break, just render it
                        if (block.includes("<br")) return <br key={index} />;

                        // Strip tags for char animation? Or use HTML block animation?
                        // User wants "invisible force writing it". Char animation on paragraphs is expensive/glitchy if they have internal tags.
                        // I'll use block fade+blur for HTML, which looks like "appearing from mist".
                        return (
                            <MagicText
                                key={index}
                                text={block}
                                isHTML={true}
                                delay={0.1}
                                className="block"
                            />
                        );
                    })}
                </div>
            </article>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-20 pt-12 border-t border-ink/10 text-center"
            >
                <div className="font-handwriting text-2xl text-ink/40 rotate-1">
                    ~ d.j.
                </div>
            </motion.div>
        </motion.div>
    );
};
