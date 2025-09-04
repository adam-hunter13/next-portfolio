"use client"
import { useState } from "react"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(false)

    const formData = {
      name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value,
      email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value,
      message: (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      })

      if (res.ok) {
        setSuccess(true)
        e.currentTarget.reset()
      } else {
        setError(true)
      }
    } catch (err) {
      console.error("Network error:", err)
      setError(true)
    } finally {
      setLoading(false)
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
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {success && <p className="text-green-600">Message sent!</p>}
      {error && <p className="text-red-600">Something went wrong. Please try again.</p>}
    </div>
  )
}
