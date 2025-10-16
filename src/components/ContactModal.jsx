import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactModal({ open, onClose }) {
  const dialogRef = useRef(null);
  const formRef = useRef(null);

  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // "sent" | "error" | null

  // ----- EDITABLE -----
  const email = "kaunghtetzaw.inbox@gmail.com";
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/KaungHtetZaw18",
      icon: "/social/github.svg",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kaung-h-zaw/",
      icon: "/social/linkedin.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/kaunghtetzaw_18/",
      icon: "/social/instagram.svg",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/kaung.htet.zaw.180202",
      icon: "/social/facebook.svg",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/66639473379",
      icon: "/social/whatsapp.svg",
    },
    {
      name: "LINE",
      href: "https://line.me/ti/p/4gHcvR5Mo4#~",
      icon: "/social/line.svg",
    },
  ];
  // --------------------

  // ESC to close
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Autofocus first field
  useEffect(() => {
    if (open && dialogRef.current) {
      const el = dialogRef.current.querySelector("input, textarea, button");
      el?.focus();
    }
  }, [open]);

  if (!open) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setStatus(null);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSending(false);
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setSending(false);
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      onMouseDown={(e) => e.target === e.currentTarget && onClose?.()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Dialog (centered, with vertical margin & internal scroll) */}
      <div
        ref={dialogRef}
        className={[
          "relative z-[81] w-full max-w-lg sm:max-w-2xl md:max-w-5xl",
          "rounded-2xl bg-white text-black shadow-2xl border",
          // give space above/below + allow internal scroll
          "max-h-[calc(100vh-2rem)] overflow-y-auto",
          // safe-area padding for iOS
          "pb-[max(env(safe-area-inset-bottom),1rem)]",
        ].join(" ")}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="sticky top-3 float-right mr-3 grid place-items-center w-9 h-9 rounded-md text-neutral-500 hover:bg-neutral-100 hover:text-black transition"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="clear-both grid md:grid-cols-2">
          {/* Left: Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="p-5 sm:p-6 lg:p-8 flex flex-col gap-4"
          >
            <h3 id="contact-title" className="text-xl font-semibold">
              Say Hello
            </h3>

            <label className="text-sm font-medium">
              Your name
              <input
                name="name"
                required
                className="mt-1 w-full rounded-xl border px-3 py-3 text-base sm:py-2.5 sm:text-sm outline-none focus:ring-2 focus:ring-neutral-300"
              />
            </label>

            <label className="text-sm font-medium">
              Email
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border px-3 py-3 text-base sm:py-2.5 sm:text-sm outline-none focus:ring-2 focus:ring-neutral-300"
              />
            </label>

            <label className="text-sm font-medium">
              Website (optional)
              <input
                name="website"
                placeholder="https://…"
                className="mt-1 w-full rounded-xl border px-3 py-3 text-base sm:py-2.5 sm:text-sm outline-none focus:ring-2 focus:ring-neutral-300"
              />
            </label>

            <label className="text-sm font-medium">
              How can I help?
              <textarea
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-xl border px-3 py-3 text-base sm:py-2.5 sm:text-sm outline-none focus:ring-2 focus:ring-neutral-300"
              />
            </label>

            {/* Status banner */}
            {status === "sent" && (
              <div className="text-sm rounded-lg bg-green-50 text-green-700 border border-green-200 px-3 py-2">
                Thanks! Your message was sent.
              </div>
            )}
            {status === "error" && (
              <div className="text-sm rounded-lg bg-red-50 text-red-700 border border-red-200 px-3 py-2">
                Sorry—something went wrong. Please try again.
              </div>
            )}

            {/* Buttons */}
            <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-black text-white px-5 py-3 rounded-xl text-base font-medium hover:bg-neutral-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending…" : "Send"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full border border-black px-5 py-3 rounded-xl text-base font-medium hover:bg-black hover:text-white transition"
              >
                Close
              </button>
            </div>

            {/* MOBILE info (visible on mobile, hidden on md+) */}
            <div className="mt-6 md:hidden">
              <h4 className="text-lg font-semibold">Get in touch</h4>
              <p className="mt-2 text-[15px] text-neutral-600">
                Collaborations, quick chats, or feedback — I’m happy to hear
                from you.
              </p>

              {/* Email (copyable) */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(email);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1400);
                }}
                className="mt-4 inline-flex items-center gap-2 text-[15px] font-medium hover:underline"
                title="Click to copy"
                aria-live="polite"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8l8 7 8-7v10H4Z" />
                </svg>
                {email}
                <span className="sr-only">
                  {copied ? "Email copied to clipboard" : ""}
                </span>
              </button>

              {/* Social grid */}
              <ul className="mt-5 grid grid-cols-3 gap-3">
                {socials.map((s) => (
                  <li key={s.name} className="flex justify-center">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      title={s.name}
                      className="group flex flex-col items-center"
                    >
                      <div className="grid place-items-center size-14 rounded-xl bg-white ring-1 ring-neutral-200 group-hover:ring-neutral-300 group-hover:scale-[1.05] transition">
                        <img
                          src={s.icon}
                          alt={s.name}
                          width="36"
                          height="36"
                          className="w-8 h-8 object-contain opacity-90 group-hover:opacity-100"
                        />
                      </div>
                      <span className="mt-1.5 text-[10px] text-neutral-600">
                        {s.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </form>

          {/* DESKTOP info (right column) */}
          <div className="hidden md:block p-6 lg:p-8 border-t md:border-t-0 md:border-l">
            <h3 className="text-2xl font-semibold">Get in touch</h3>
            <p className="mt-3 text-sm text-neutral-600 max-w-sm">
              Collaborations, quick chats, or feedback — I’m happy to hear from
              you.
            </p>

            <div className="mt-6 relative inline-flex items-center group cursor-pointer select-none">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8l8 7 8-7v10H4Z" />
              </svg>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(email);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1400);
                }}
                className="text-base font-medium hover:underline"
                title="Click to copy"
                aria-live="polite"
              >
                {email}
              </button>
              <span className="absolute -top-8 left-0 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                {copied ? "Copied!" : "Click to copy"}
              </span>
            </div>

            <ul className="mt-8 grid grid-cols-3 gap-4">
              {socials.map((s) => (
                <li key={s.name} className="flex justify-center">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className="group flex flex-col items-center"
                  >
                    <div className="grid place-items-center size-16 rounded-xl bg-white ring-1 ring-neutral-200 group-hover:ring-neutral-300 group-hover:scale-[1.05] transition">
                      <img
                        src={s.icon}
                        alt={s.name}
                        width="40"
                        height="40"
                        className="w-9 h-9 object-contain opacity-90 group-hover:opacity-100"
                      />
                    </div>
                    <span className="mt-1.5 text-[11px] text-neutral-600">
                      {s.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
