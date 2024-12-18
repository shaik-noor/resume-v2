// src/components/Sidebar.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronsRight } from 'lucide-react';

const sections = [
    { name: 'Home', id: 'home' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
];

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>
            <motion.nav
                initial={{ width: isOpen ? '16rem' : '4rem' }}
                animate={{ width: isOpen ? '16rem' : '4rem' }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 h-full bg-gray-900 text-white shadow-lg overflow-hidden flex flex-col"
            >
                <div className="p-6 border-b border-gray-700 flex items-center justify-between">
                    {isOpen && <h2 className="text-2xl font-bold">My Portfolio</h2>}
                </div>
                <ul className={`p-4 space-y-4 ${isOpen ? '' : 'hidden'}`}>
                    {sections.map(({ name, id }) => (
                        <li key={id}>
                            <button
                                className={`block w-full text-left py-2 px-4 rounded-md ${
                                    location.hash === `#${id}` ? 'bg-gray-700' : 'hover:bg-gray-700'
                                }`}
                                onClick={() => {
                                    navigate(`#${id}`);
                                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {name}
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={toggleSidebar}
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg focus:outline-none"
                >
                    {isOpen ? <ChevronLeft /> : <ChevronsRight />}
                </button>
            </motion.nav>
        </div>
    );
};

export default Sidebar;
