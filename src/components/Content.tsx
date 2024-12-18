// src/components/Content.tsx
import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import Home from './sections/Home';
import Education from './sections/Education';
import Skills from './sections/Skills';

const sections = [
    { id: 'home', Component: Home },
    { id: 'education', Component: Education },
    { id: 'skills', Component: Skills },
];

interface ContentProps {
    isSidebarOpen: boolean;
}

const Content: React.FC<ContentProps> = ({ isSidebarOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const sectionRefs = useRef<Array<HTMLDivElement | null>>([]); // Correct type for useRef

    useEffect(() => {
        // Scroll to the section defined in the hash on load or URL change
        const hash = location.hash.replace('#', '');
        if (hash) {
            const targetSection = document.getElementById(hash);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.hash]); // Trigger when the hash changes

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (visibleSection?.target.id) {
                    navigate(`#${visibleSection.target.id}`, { replace: true });
                }
            },
            { threshold: 0.6 }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section); // Ensure section is not null
        });

        return () => observer.disconnect();
    }, [navigate]);

    return (
        <div
            className={`overflow-y-scroll snap-y snap-mandatory transition-all duration-300 ${
                isSidebarOpen ? 'ml-64' : 'ml-16'
            }`}
        >
            {sections.map(({ id, Component }, index) => (
                <motion.section
                    key={id}
                    id={id}
                    ref={(el) => {
                        if (el instanceof HTMLDivElement) sectionRefs.current[index] = el; // Type-safe check
                    }}
                    className="h-screen flex items-center justify-center snap-start"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                >
                    <Component />
                </motion.section>
            ))}
        </div>
    );
};

export default Content;
