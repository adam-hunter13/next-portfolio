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
      setError(true)
    }
  }

  return (
    <div className="max-w-2xl space-y-6">
      <h2 className="text-3xl font-bold">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your name"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Write your message..."
          className="w-full border px-3 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Send Message
        </button>
      </form>

      {success && (
        <p className="text-green-600">Message sent! Thanks for reaching out.</p>
      )}
      {error && (
        <p className="text-red-600">Oops! Something went wrong. Please try again.</p>
      )}
    </div>
  )
}
