import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-indigo-700 text-white mt-12">
            <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
                {/* Branding */}
                <div>
                    <h2 className="text-2xl font-bold">Mustafa Blogging</h2>
                    <p className="text-sm mt-3 text-gray-200">
                        A modern blogging platform to share ideas, tutorials, and stories.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:underline">
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashbord" className="hover:underline">
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Follow Me</h3>
                    <ul className="flex space-x-5">
                        <li>
                            <Link
                                href="https://github.com/G-Mustafa1"
                                target="_blank"
                                className="hover:opacity-80"
                            >
                                <Github className="w-6 h-6" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.linkedin.com/in/g-mustafa1"
                                target="_blank"
                                className="hover:opacity-80"
                            >
                                <Linkedin className="w-6 h-6" />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                className="hover:opacity-80"
                            >
                                <Twitter className="w-6 h-6" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom */}
            <div className="bg-indigo-900 text-center py-4 text-sm">
                © {new Date().getFullYear()} Ghulam Mustafa. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
