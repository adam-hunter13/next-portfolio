"use client"
import { useState } from "react"

export default function ContactPage() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

    if (!endpoint) {
      console.error("Formspree endpoint is not defined in environment variables.")
      setError(true)
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (res.ok) {
        setSuccess(true)
        setError(false)
        form.reset()
      } else {
        setError(true)
      }
    } catch (err) {
      console.error(err)
      setError(true)
    }
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-700 dark:text-gray-200">
      <h2 className="text-3xl font-bold text-black dark:text-white">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your name"
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Write your message..."
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-2 rounded transition"
        >
          Send Message
        </button>
      </form>

      {success && (
        <p className="text-green-600 dark:text-green-400">Message sent! Thanks for reaching out.</p>
      )}
      {error && (
        <p className="text-red-600 dark:text-red-400">Oops! Something went wrong. Please try again.</p>
      )}
    </section>
  )
}
