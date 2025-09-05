"use client"
import { useState } from "react"

export default function ContactPage() {
  const [success, setSuccess] = useState(false)

  return (
    <div className="max-w-2xl space-y-6">
      <h2 className="text-3xl font-bold">Contact Me</h2>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={() => setSuccess(true)}
        className="space-y-4"
      >
        {/* Hidden input for Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field for spam protection */}
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

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
    </div>
  )
}
