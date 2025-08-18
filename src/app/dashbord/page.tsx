import React from 'react'
const Dashboard = () => {
    return (
        <section className="container mx-auto py-12 text-center mt-20 h-[67vh]">
            <h1 className="text-4xl font-bold mb-6">Dashboard 📊</h1>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-purple-100 rounded-lg shadow">Total Blogs: 10</div>
                <div className="p-6 bg-pink-100 rounded-lg shadow">Drafts: 3</div>
                <div className="p-6 bg-indigo-100 rounded-lg shadow">Followers: 120</div>
            </div>
        </section>
    )
}

export default Dashboard
