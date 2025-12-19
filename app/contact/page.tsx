"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import { User, Mail, MessageSquare, Send, CheckCircle } from "lucide-react";

const contacts = [
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={40} aria-hidden="true" />,
    href: `https://wa.me/2348160120876?text=${encodeURIComponent(
      "Hi, I'd like to get in touch regarding your services."
    )}`,
    description: "Chat directly with us on WhatsApp.",
    color: "bg-green-500 hover:bg-green-600",
    ariaLabel: "Contact us on WhatsApp",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={40} aria-hidden="true" />,
    href: `mailto:Starhillslogistics@gmail.com?subject=${encodeURIComponent(
      "Inquiry from Starhills Logistics Website"
    )}&body=${encodeURIComponent(
      "Hi, I'd like to get in touch regarding your services."
    )}`,
    description: "Send us an email directly.",
    color: "bg-blue-600 hover:bg-blue-700",
    ariaLabel: "Send us an email at Starhillslogistics@gmail.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={40} aria-hidden="true" />,
    href: "https://instagram.com/starhillslogistics",
    description: "Follow and DM us on Instagram.",
    color: "bg-pink-500 hover:bg-pink-600",
    ariaLabel: "Follow us on Instagram",
  },
];

export default function ContactLinksPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    try {
      await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      setIsSubmitted(true);
      form.reset();

      const announcement = document.getElementById("form-announcement");
      if (announcement) {
        announcement.textContent =
          "Your message has been sent successfully. We will respond within 24 hours.";
      }

      setTimeout(() => {
        setIsSubmitted(false);
        if (announcement) {
          announcement.textContent = "";
        }
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      const announcement = document.getElementById("form-announcement");
      if (announcement) {
        announcement.textContent =
          "There was an error sending your message. Please try again or contact us directly.";
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-20 px-6 bg-[#f4f7fa] text-neutral"
      aria-labelledby="contact-heading"
    >
      <div
        id="form-announcement"
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold mb-3 text-[#0055A4]"
          >
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Choose your preferred way to contact us — WhatsApp, Email,
            Instagram, or fill out the form below.
          </p>
        </motion.div>

        <nav aria-label="Social media contact options">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contacts.map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.ariaLabel}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`flex flex-col items-center justify-center p-8 rounded-xl shadow-md text-white ${contact.color} cursor-pointer focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {contact.icon}
                <h3 className="mt-4 text-xl font-semibold">{contact.name}</h3>
                <p className="mt-2 text-center text-white/90">
                  {contact.description}
                </p>
              </motion.a>
            ))}
          </div>
        </nav>

        <div
          className="flex items-center gap-4 mb-12"
          role="separator"
          aria-label="Or use the contact form below"
        >
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 font-semibold">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto"
        >
          <h2
            id="form-heading"
            className="text-2xl font-bold text-[#0055A4] mb-6 text-center"
          >
            Send Us a Message
          </h2>

          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
              role="alert"
              aria-live="polite"
            >
              <CheckCircle
                className="w-16 h-16 text-green-500 mx-auto mb-4"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-600">
                Thank you for contacting us. We&apos;ll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form
              action="https://formsubmit.co/starhillslogistics@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-labelledby="form-heading"
              noValidate
            >
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission from Starhills Logistics"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-gray-700 font-semibold mb-2"
                >
                  <User className="w-5 h-5 text-[#0055a4]" aria-hidden="true" />
                  Name
                  <span className="text-red-500" aria-label="required">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  aria-required="true"
                  aria-describedby="name-hint"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0055a4] focus:outline-none focus:ring-2 focus:ring-[#0055a4] focus:ring-offset-2 transition-colors"
                />
                <span id="name-hint" className="sr-only">
                  Enter your full name
                </span>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-gray-700 font-semibold mb-2"
                >
                  <Mail className="w-5 h-5 text-[#0055a4]" aria-hidden="true" />
                  Email
                  <span className="text-red-500" aria-label="required">
                    *
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  aria-describedby="email-hint"
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0055a4] focus:outline-none focus:ring-2 focus:ring-[#0055a4] focus:ring-offset-2 transition-colors"
                />
                <span id="email-hint" className="sr-only">
                  Enter your email address so we can respond to you
                </span>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-gray-700 font-semibold mb-2"
                >
                  <MessageSquare
                    className="w-5 h-5 text-[#0055a4]"
                    aria-hidden="true"
                  />
                  Message
                  <span className="text-red-500" aria-label="required">
                    *
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  aria-describedby="message-hint"
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0055a4] focus:outline-none focus:ring-2 focus:ring-[#0055a4] focus:ring-offset-2 transition-colors resize-none"
                />
                <span id="message-hint" className="sr-only">
                  Enter your message or inquiry. Minimum 10 characters.
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                aria-label={
                  isSubmitting ? "Sending message, please wait" : "Send message"
                }
                className="w-full px-6 py-4 bg-[#0055a4] hover:bg-[#003d7a] text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-[#0055a4] focus:ring-offset-2 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                      aria-hidden="true"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" aria-hidden="true" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        <p className="text-center text-gray-600 mt-8" role="note">
          We typically respond within 24 hours during business days.
        </p>
      </div>
    </section>
  );
}
