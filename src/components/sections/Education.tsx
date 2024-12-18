// src/components/sections/Education.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h2 className="text-3xl font-bold mb-4">My Educational Background</h2>
        <ul className="list-disc pl-6 space-y-2">
            <li>
                <strong>Bachelor Degree </strong> - SKU
            </li>
            <li>
                <strong>High School </strong> - Vasistha School, 2010
            </li>
        </ul>
    </motion.div>
);

export default Education;
