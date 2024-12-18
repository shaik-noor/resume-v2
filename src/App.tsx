// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';

const App: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <Router>
            <div className="flex h-screen">
                {/* Sidebar */}
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    <Header isSidebarOpen={isSidebarOpen} />
                    <Content isSidebarOpen={isSidebarOpen} />
                </div>
            </div>
        </Router>
    );
};

export default App;
