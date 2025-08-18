"use client";

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg fixed w-full top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo */}
                        <div className="text-white font-bold text-2xl">
                            <Link href="/">MyBlog</Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-8 text-white">
                            <Link href="/" className="hover:text-yellow-300 transition duration-300">
                                Home
                            </Link>
                            <Link href="/about" className="hover:text-yellow-300 transition duration-300">
                                About
                            </Link>
                            <Link href="/blog" className="hover:text-yellow-300 transition duration-300">
                                Blogs
                            </Link>
                            <Link href="/contact" className="hover:text-yellow-300 transition duration-300">
                                Contact
                            </Link>
                            <Link href="/dashbord" className="hover:text-yellow-300 transition duration-300">
                                Dashboard
                            </Link>
                        </div>

                        {/* Mobile Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white text-2xl focus:outline-none"
                            >
                                {isOpen ? "✖" : "☰"}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-purple-700 px-4 py-3 space-y-2">
                        <Link href="/" className="block text-white hover:bg-pink-500 px-3 py-2 rounded" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/about" className="block text-white hover:bg-pink-500 px-3 py-2 rounded" onClick={() => setIsOpen(false)}>About</Link>
                        <Link href="/blog" className="block text-white hover:bg-pink-500 px-3 py-2 rounded" onClick={() => setIsOpen(false)}>Blogs</Link>
                        <Link href="/contact" className="block text-white hover:bg-pink-500 px-3 py-2 rounded" onClick={() => setIsOpen(false)}>Contact</Link>
                        <Link href="/dashbord" className="block text-white hover:bg-pink-500 px-3 py-2 rounded" onClick={() => setIsOpen(false)}>Dashboard</Link>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar
