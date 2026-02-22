import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Mail } from 'lucide-react';

// Wattpad SVG icon (lucide doesn't have one)
const WattpadIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h4l2 9 2-9h4l-4 14h-4L4 4zm10 0h4l2 9 2-9h4l-4 14h-4l-4-14z" />
    </svg>
);

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { to: '/portfolio', label: 'Work' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <div className="min-h-screen relative flex flex-col cursor-none">
            {/* Navigation */}
            <nav className="w-full py-8 md:py-12 px-6 flex justify-between items-center z-10 max-w-7xl mx-auto">
                <Link to="/" className="font-heading text-2xl tracking-widest text-ink hover:text-ink-light transition-colors cursor-pointer block">
                    THEODORE
                </Link>

                {/* Desktop nav */}
                <ul className="hidden md:flex space-x-8 font-body text-sm tracking-widest uppercase text-ink/80">
                    {navLinks.map(link => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className={cn("hover:text-rose transition-colors cursor-pointer border-b pb-1", isActive(link.to) ? "border-rose text-rose" : "border-transparent hover:border-rose")}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger button */}
                <button
                    className="md:hidden cursor-pointer text-ink hover:text-rose transition-colors z-50 relative"
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Full-Screen Overlay Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="fixed inset-0 bg-parchment z-40 flex flex-col items-center justify-center md:hidden"
                        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}
                    >
                        <ul className="flex flex-col items-center space-y-10">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.to}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        to={link.to}
                                        onClick={() => setMenuOpen(false)}
                                        className={cn(
                                            "font-handwriting text-5xl text-ink hover:text-rose transition-colors",
                                            isActive(link.to) ? "text-rose" : ""
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-12 font-handwriting text-ink/30 text-lg"
                        >
                            Where ink bleeds into soul.
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className={cn("flex-grow relative z-10 w-full max-w-7xl mx-auto px-6", className)}>
                {children}
            </main>

            {/* Footer */}
            <footer className="py-10 text-center text-ink/50">
                <p className="font-handwriting text-lg mb-5">Written with intention. &copy; {new Date().getFullYear()}</p>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-6">
                    <a
                        href="https://www.instagram.com/theodorechase000?igsh=ZmRtbWEzNHRqb2li"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-ink/40 hover:text-ink transition-colors duration-300 hover:-translate-y-0.5 transform"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.wattpad.com/user/DJEMPOWER"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Wattpad"
                        className="text-ink/40 hover:text-ink transition-colors duration-300 hover:-translate-y-0.5 transform"
                    >
                        <WattpadIcon />
                    </a>
                    <a
                        href="mailto:widgetwalker999@gmail.com"
                        aria-label="Email"
                        className="text-ink/40 hover:text-ink transition-colors duration-300 hover:-translate-y-0.5 transform"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </footer>
        </div>
    );
};
