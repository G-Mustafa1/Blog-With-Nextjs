"use client"

import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const Contact = () => {
    const router = useRouter()

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(form)

        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields.',
            })
            return
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Thank you!',
                text: `Your message "${form.message}" has been sent.`,
            })
            router.push("/");
        }
    }

    return (
        <section className="container mx-auto py-12 text-center mt-16">
            <h1 className="text-4xl font-bold mb-6">Contact Us 📩</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 mb-4 border rounded"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 mb-4 border rounded"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full p-3 mb-4 border rounded"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button className="bg-purple-600 text-white px-6 py-3 rounded hover:scale-105 transition">
                    Send Message
                </button>
            </form>
        </section>
    )
}

export default Contact
