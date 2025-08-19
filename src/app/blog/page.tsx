import React from "react";
import Link from "next/link";
import blogs from "@/data/blogs";
import { Blog } from "@/types/blog";

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-16">
      <h1 className="text-4xl font-bold text-indigo-700 mb-8">All Blogs</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog: Blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 shadow rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>
            <p className="text-gray-600 mt-2">{blog.excerpt}</p>
            <p className="text-gray-500 mt-1">
              By <span className="font-medium">{blog.author}</span> • {blog.date}
            </p>
            <p className="text-gray-700 mt-3 line-clamp-3">{blog.content}</p>
            <Link
              href={`/blog/${blog.id}`}
              className="mt-4 inline-block text-indigo-600 hover:underline font-semibold"
            >
              See More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
