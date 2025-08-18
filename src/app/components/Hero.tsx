import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg mb-8">Explore the latest articles and insights.</p>
        <Link href="/blog" className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
          Read Blog
        </Link>
      </div>
    </div>
  )
}

export default Hero
