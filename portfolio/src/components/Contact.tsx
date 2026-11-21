
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const contacts = [
  {
    label: "WhatsApp",
    value: "Chat with me directly",
    href: "https://wa.me/252618742257",
    icon: MessageCircle,
  },
  {
  label: "Email",
  value: "Send me an email",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=deeqogoodax@gmail.com",
  icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Let's connect professionally",
    href: "https://www.linkedin.com/in/deeqa-ahmed-mohamed-87326031b",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "Explore my projects and code",
    href: "https://github.com/Deeqa-goodax",
    icon: Github,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xaeoddrq", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _replyto: form.email,
          _subject: form.subject,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(
          result?.errors?.map((item: { message: string }) => item.message).join(", ") ||
          "Please check your Formspree form settings and try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to connect. Check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-white/[.05] bg-slate-900/45 py-24"
    >
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-kicker">Let's connect</p>

          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Let's Build Something{" "}
            <span className="gradient-text">
              Meaningful Together.
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Have a project, opportunity, or idea to discuss?
            Feel free to contact me through WhatsApp, email,
            or the message form below.
          </p>
        </motion.div>

        {/* Contact links */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            const isEmail = contact.label === "Email";

            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group rounded-2xl border border-white/[.08] bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <Icon className="text-cyan-300" size={22} />

                <p className="mt-5 font-bold text-white">
                  {contact.label}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {contact.value}
                </p>

                <ArrowUpRight
                  className="mt-5 text-slate-600 transition group-hover:text-cyan-200"
                  size={17}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Message form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-3xl rounded-3xl border border-white/[.08] bg-slate-950/70 p-6 sm:p-9"
        >
          <div className="mb-7">
            <h3 className="text-2xl font-bold text-white">
              Send Me a Message
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Complete the form and your message will be sent to my inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                maxLength={150}
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
                placeholder="What is your message about?"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={6}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Write your message here..."
                className="w-full resize-y rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/50"
              />
            </div>

            {status === "success" && (
              <div
                role="status"
                className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-300"
              >
                <CheckCircle size={19} />
                Your message has been submitted successfully!
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300"
              >
                <AlertCircle size={19} />
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={19} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
          <MapPin size={16} />
          Mogadishu, Somalia
        </div>
      </div>
    </section>
  );
}
