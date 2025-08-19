import React from "react";
import Link from "next/link";
import blogs from "@/data/blogs";
import { Blog } from "@/types/blog";
import BlogCard from "@/app/components/BlogCard";

type BlogDetailPageProps = {
  params: {
    id: string;
  };
};

// ✅ Pre-generate all blog pages for deployment
export async function generateStaticParams() {
  console.log("🛠 generateStaticParams running..."); // Debug
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  console.log("📌 BlogDetailPage params:", params);

  const blog = blogs.find((b: Blog) => b.id === params.id);

  console.log("🔍 Found blog:", blog);

  if (!blog) {
    console.warn("⚠️ Blog not found with id:", params.id);

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
  console.log("📝 Related blogs:", related);

  return <BlogCard blog={blog} related={related} />;
}
