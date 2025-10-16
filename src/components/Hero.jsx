import { useState } from "react";

export default function Hero({ onOpenContact }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("kaunghtetzaw.inbox@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <svg
          className="absolute -top-32 -left-24 w-[42rem] opacity-50"
          viewBox="0 0 600 600"
          fill="none"
        >
          <path
            d="M480 130c40 60-20 110-70 170s-90 130-170 140-180-40-190-120 60-190 150-220 240-30 280 30Z"
            fill="#EEF2FF"
          />
        </svg>
        <svg
          className="absolute -bottom-44 -right-32 w-[46rem] opacity-50"
          viewBox="0 0 600 600"
          fill="none"
        >
          <path
            d="M520 340c20 80-40 120-120 150s-170 40-220-20-60-190 10-250 210-110 270-60 40 100 60 180Z"
            fill="#F1F5F9"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 md:pt-28 md:pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        {/* Left: Text */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
            Front-end Developer
          </p>

          {/* Bigger, responsive headline */}
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Hey, I’m Kaung Htet Zaw{" "}
            <span className="text-neutral-500">(Kaung)</span>
          </h1>

          {/* Larger body on big screens */}
          <p className="mt-5 text-base md:text-lg lg:text-xl text-neutral-600 max-w-prose leading-relaxed">
            I build clean, responsive UIs using React and Tailwind CSS,
            optimized for everyday devices and networks. I enjoy working with
            illustrations, QR flows, and simple interactions that feel
            effortless. I’m also learning backend development to grow as a
            full-stack developer.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 text-sm hover:bg-neutral-800 transition-colors"
            >
              View Projects
            </a>
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2 rounded-xl border border-black px-5 py-3 text-sm hover:bg-black hover:text-white transition-colors"
            >
              Say Hello
              <img
                src="/icons/message.svg"
                alt=""
                className="w-4 h-4 object-contain transition group-hover:invert"
              />
            </button>
          </div>

          {/* Email copy with tooltip */}
          <div
            onClick={handleCopy}
            className="mt-8 inline-flex items-center gap-2 cursor-pointer group relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="w-5 h-5 text-neutral-700 group-hover:text-black transition-colors"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.82 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <span className="text-base md:text-lg font-medium text-neutral-800 group-hover:underline select-none">
              kaunghtetzaw.inbox@gmail.com
            </span>

            <span className="absolute -top-8 left-0 text-xs bg-black text-white rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {copied ? "Copied!" : "Click to copy"}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-4 text-sm md:text-base text-neutral-500">
            <span>• Open for freelance</span>
            <span>• React • Tailwind • Design-driven</span>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="relative w-full h-full flex items-center justify-end">
          <img
            src="/home-office.svg"
            alt="Monochrome illustration of a developer at a desk"
            className="w-full max-w-xl md:max-w-2xl h-auto object-contain select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
