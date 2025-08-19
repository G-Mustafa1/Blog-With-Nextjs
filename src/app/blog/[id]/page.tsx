import React from "react";
import blogs from "@/data/blogs";
import { Blog, BlogPageParams } from "@/types/blog";
import BlogCard from "@/app/components/BlogCard";
import Link from "next/link";

export default function BlogDetailPage({ params }: BlogPageParams) {
  const blog = blogs.find((b: Blog) => b.id === params.id);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center mt-16">
        <h2 className="text-2xl font-bold text-red-600">Blog Not Found</h2>
        <Link
          href="/blog"
          className="mt-4 inline-block text-indigo-600 hover:underline"
        >
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return <BlogCard blog={blog} related={related} />;
}
