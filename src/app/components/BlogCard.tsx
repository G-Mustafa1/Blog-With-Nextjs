import React from "react";
import Link from "next/link";
import { Blog } from "@/types/blog";

type Props = { blog: Blog; related: Blog[] };

export default function BlogCard({ blog, related }: Props) {
  return (
    <div className="max-w-6xl mx-auto p-6 grid lg:grid-cols-4 gap-8 mt-16">
      <article className="lg:col-span-3 bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-indigo-700">{blog.title}</h1>
        <p className="text-gray-800 mt-2">{blog.excerpt}</p>
        <p className="text-gray-500 mt-2">
          By <span className="font-semibold">{blog.author}</span> • {blog.date}
        </p>
        <div className="mt-6 text-lg text-gray-700 leading-relaxed space-y-4">
          <p>{blog.content}</p>
        </div>
        <div className="mt-10 border-t pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Written by{" "}
            <span className="font-semibold">Ghulam Mustafa</span>
          </p>
        </div>
      </article>

      <aside className="lg:col-span-1">
        <div className="bg-gray-50 shadow-md rounded-xl p-6">
          <h2 className="text-xl font-bold text-indigo-600 mb-4">Related Blogs</h2>
          <ul className="space-y-3">
            {related.map((r) => (
              <li key={r.id}>
                <Link
                  href={`/blog/${r.id}`}
                  className="block p-3 bg-white rounded-lg shadow hover:shadow-md transition"
                >
                  <h3 className="text-lg font-medium text-gray-800">{r.title}</h3>
                  <p className="text-sm text-gray-500">{r.date}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
