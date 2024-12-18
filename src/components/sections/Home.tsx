// src/components/sections/Home.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg">
            Hi, I'm Shaik Noor, a passionate developer dedicated to building creative and functional solutions.
        </p>
    </motion.div>
);

export default Home;
