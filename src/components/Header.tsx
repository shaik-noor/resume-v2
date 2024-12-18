// src/components/Header.tsx
import React from 'react';

interface HeaderProps {
    isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen }) => (
    <header
        className={`fixed top-0 h-16 bg-white shadow-md flex items-center px-6 z-10 transition-all duration-300 ${
            isSidebarOpen ? 'left-64' : 'left-16'
        } right-0`}
    >
        <h1 className="text-lg font-semibold">My Portfolio</h1>
    </header>
);

export default Header;
