// "use client";

import React from 'react'
import Link from 'next/link'
import blogs from '../data/blogs'

const page = () => {
    return (
        <section className="max-w-5xl mx-auto p-6 mt-16">
            <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
                Latest Blogs
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
                    >
                        <h2 className="text-2xl font-semibold text-indigo-600">
                            {blog.title}
                        </h2>
                        <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                        <p className="text-sm text-gray-400 mt-2">
                            By {blog.author} • {blog.date}
                        </p>
                        <Link
                            href={`/blog/${blog.id}`}
                            className="inline-block mt-4 text-indigo-500 font-medium hover:underline"
                        >
                            Read More →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default page
