import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs';
import { StaggeredText } from '../components/ui/StaggeredText';
import { Send } from 'lucide-react';

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const line = e.target.nextElementSibling as HTMLElement;
        if (line) {
            anime({
                targets: line,
                scaleX: [0, 1],
                opacity: [0.5, 1],
                easing: 'easeInOutExpo',
                duration: 600
            });
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const line = e.target.nextElementSibling as HTMLElement;
        if (line && e.target.value === "") {
            anime({
                targets: line,
                scaleX: 0,
                opacity: 0,
                easing: 'easeOutExpo',
                duration: 600
            });
        }
    };

    return (
        <div className="py-12 max-w-2xl mx-auto">
            <header className="mb-16 text-center">
                <StaggeredText text="Leave a Note" className="font-heading text-5xl md:text-6xl text-ink mb-4" />
                <p className="font-handwriting text-xl text-ink/60 rotate-1">
                    "Letters are the only way we can speak without interruption."
                </p>
            </header>

            <motion.form
                ref={formRef}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12 bg-white/40 p-8 md:p-12 rounded-sm border border-ink/5 shadow-sm relative overflow-hidden"
            >
                {/* Paper texture overlay specific to form */}
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <img src="https://www.transparenttextures.com/patterns/stamp.png" alt="" className="w-24 h-24 rotate-12" />
                </div>

                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-transparent border-none p-4 text-ink font-heading text-xl placeholder:text-ink/30 focus:ring-0 outline-none"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-ink origin-left scale-x-0 transition-transform"></div>
                </div>

                <div className="relative group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-transparent border-none p-4 text-ink font-body text-lg placeholder:text-ink/30 focus:ring-0 outline-none"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-ink origin-left scale-x-0 transition-transform"></div>
                </div>

                <div className="relative group">
                    <textarea
                        rows={5}
                        placeholder="Your Message..."
                        className="w-full bg-transparent border-none p-4 text-ink font-body text-lg placeholder:text-ink/30 focus:ring-0 outline-none resize-none"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-ink origin-left scale-x-0 transition-transform"></div>
                </div>

                <div className="text-center pt-8">
                    <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-ink text-parchment font-heading tracking-widest hover:bg-ink-light transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-1">
                        <span>Send Letter</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <p className="mt-4 font-handwriting text-sm text-ink/40">
                        (Or email directly at poet@example.com)
                    </p>
                </div>
            </motion.form>
        </div>
    );
};
