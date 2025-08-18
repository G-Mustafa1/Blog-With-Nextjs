import React from "react";
import blogs from "@/app/data/blogs";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default function BlogDetailPage({ params }: Props) {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
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

  return (
    <div className="max-w-6xl mx-auto p-6 grid lg:grid-cols-4 gap-8 mt-16">
      {/* Blog Content */}
      <article className="lg:col-span-3 bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-indigo-700">{blog.title}</h1>
        <p className="text-gray-500 mt-2">
          By <span className="font-semibold">{blog.author}</span> • {blog.date}
        </p>

        <div className="mt-6 text-lg text-gray-700 leading-relaxed space-y-4">
          <p>{blog.content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada.
          </p>
          <p>
            Curabitur ut eros non sapien tincidunt tristique. Integer vitae
            magna non risus aliquet interdum.
          </p>
        </div>

        <div className="mt-10 border-t pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Written by{" "}
            <span className="font-semibold">Ghulam Mustafa</span>
          </p>
        </div>
      </article>

      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="bg-gray-50 shadow-md rounded-xl p-6">
          <h2 className="text-xl font-bold text-indigo-600 mb-4">
            Related Blogs
          </h2>
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
