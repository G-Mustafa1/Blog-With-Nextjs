import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mt-16">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 text-white">

          {/* Left Content */}
          <div className="max-w-lg space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Welcome to <span className="text-yellow-300">Our Blog</span> ✨
            </h1>
            <p className="text-lg md:text-xl">
              Discover stories, share knowledge, and connect with amazing people
              around the world. 🚀
            </p>
            <div className="flex gap-4">
              <Link
                href="/blog"
                className="px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
              >
                Explore Blogs
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 rounded-lg border border-white font-semibold hover:bg-white hover:text-indigo-600 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <Image
            src="/blog.jpg"
            alt="Hero Image"
            height={500}
            width={500}
            className="mt-10 md:mt-0 w-full md:w-1/2 rounded-2xl shadow-2xl"
          />
        </section>

        {/* Features Section */}
        <section className="bg-white text-gray-800 py-16 px-8 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-600">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6 bg-gray-100 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">✍️ Write</h3>
              <p>
                Share your ideas and stories with the world through our simple and
                powerful editor.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">📖 Read</h3>
              <p>
                Explore blogs from amazing writers and discover new perspectives
                every day.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">🌍 Connect</h3>
              <p>
                Join a community of passionate people who inspire and support each
                other.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
