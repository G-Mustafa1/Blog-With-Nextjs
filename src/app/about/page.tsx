import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6 mt-16">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-4xl w-full">
        
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">
          About Us
        </h1>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Image */}
          <Image
            src="/blog.jpg"
            alt="About"
            height={500}
            width={500}
            className="rounded-2xl shadow-lg"
          />

          {/* Right Side - Text */}
          <div className="space-y-4 text-gray-700">
            <h2 className="text-2xl font-bold text-indigo-600">
              Welcome to Our Blogging World 🌍
            </h2>
            <p>
              We believe that <span className="font-semibold">every voice matters</span>. 
              Our mission is to create a platform where people can share 
              stories, knowledge, and ideas with the world. ✨
            </p>
            <p>
              Whether you are a seasoned writer or just starting your journey, 
              our platform provides the tools and community to help you 
              express yourself freely. 🖊️
            </p>
            <p>
              Join us in shaping the future of online content — 
              <span className="text-indigo-500 font-semibold"> write, read, and inspire. 🚀</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
