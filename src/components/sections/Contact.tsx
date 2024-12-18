// src/components/sections/Skills.tsx
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React & Redux',
    'Node.js & Express',
    'TailwindCSS',
    'Framer Motion',
    'SQL & NoSQL Databases',
];

const Skills: React.FC = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
    >
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <ul className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
                <motion.li
                    key={index}
                    className="bg-gray-100 rounded-md p-4 shadow"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {skill}
                </motion.li>
            ))}
        </ul>
    </motion.div>
);

export default Skills;
