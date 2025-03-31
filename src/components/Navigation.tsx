'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdGamepad } from 'react-icons/md';

const Navigation = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/johnabed', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/johnabed', label: 'LinkedIn' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/20 backdrop-blur-[8px] transition-all duration-500 ease-out z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="rounded-full overflow-hidden w-8 h-8 md:w-10 md:h-10 shadow-lg">
              <Image
                src="/profile.png"
                alt="John Abed"
                width={40}
                height={40}
                className="object-cover"
                priority
              />
            </div>
            <Link href="/" className="text-xl font-bold text-gray-900">
              John Abed
            </Link>
          </motion.div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 