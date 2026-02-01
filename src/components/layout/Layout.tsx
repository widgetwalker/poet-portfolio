import React from 'react';
import { cn } from '../../lib/utils';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="min-h-screen relative flex flex-col cursor-none"> {/* Add cursor-none to hide default cursor */}
            {/* InkCursor is in App.tsx now, or we can put it here if we want persistence */}
            {/* Since we removed InkTransition from here, we rely on App.tsx wrapping */}

            {/* Navigation - Feels like a book header */}
            <nav className="w-full py-8 md:py-12 px-6 flex justify-between items-center z-10 max-w-7xl mx-auto">
                <Link to="/" className="font-heading text-2xl tracking-widest text-ink hover:text-ink-light transition-colors cursor-pointer block">
                    THEODORE
                </Link>
                <ul className="flex space-x-8 font-body text-sm tracking-widest uppercase text-ink/80">
                    <li>
                        <Link
                            to="/portfolio"
                            className={cn("hover:text-rose transition-colors cursor-pointer border-b pb-1", isActive('/portfolio') ? "border-rose text-rose" : "border-transparent hover:border-rose")}
                        >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={cn("hover:text-rose transition-colors cursor-pointer border-b pb-1", isActive('/about') ? "border-rose text-rose" : "border-transparent hover:border-rose")}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={cn("hover:text-rose transition-colors cursor-pointer border-b pb-1", isActive('/contact') ? "border-rose text-rose" : "border-transparent hover:border-rose")}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            <main className={cn("flex-grow relative z-10 w-full max-w-7xl mx-auto px-6", className)}>
                {children}
            </main>

            <footer className="py-12 text-center text-ink/50 font-handwriting text-lg rotated-1">
                Written with intention. &copy; {new Date().getFullYear()}
            </footer>
        </div>
    );
};
