import React from 'react';

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-colors duration-300 ${className}`}>
      {children}
    </div>
  );
}