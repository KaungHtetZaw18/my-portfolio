import { useState, useEffect, useRef } from "react";

export default function Nav({ onOpenContact }) {
  const [open, setOpen] = useState(false); // mobile hamburger
  const [menuOpen, setMenuOpen] = useState(false); // desktop More dropdown
  const menuRef = useRef(null);

  // Close More dropdown when clicking outside or pressing Esc
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    function handleKey(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <img
            src="/man-avatar.svg"
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 select-none"
          />
          <span className="text-[17px] md:text-xl font-semibold tracking-tight">
            Kaung-Space
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-[15px]">
          <a href="#about" className="hover:underline underline-offset-4">
            About
          </a>
          <a href="#skills" className="hover:underline underline-offset-4">
            Skills
          </a>

          {/* More dropdown (click to toggle) */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-haspopup="menu"
              className="inline-flex items-center gap-1 hover:underline underline-offset-4"
            >
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`w-4 h-4 transition-transform ${
                  menuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="m6 9 6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {menuOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full translate-y-1 rounded-lg border bg-white shadow-sm text-[14px] min-w-[160px] overflow-hidden"
              >
                <a
                  href="#experience"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-neutral-50"
                >
                  Experience
                </a>
                <a
                  href="#education"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-neutral-50"
                >
                  Education
                </a>
                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-neutral-50"
                >
                  Projects
                </a>
              </div>
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 rounded-xl border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
            >
              <img
                src="/icons/message.svg"
                alt=""
                className="w-4 h-4 object-contain"
              />
              Say Hello
            </button>

            <span className="w-px h-5 bg-neutral-300" />

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 hover:bg-neutral-800 transition-colors"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16"
                />
              </svg>
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center size-9 rounded-lg border"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Panel (no More menu here — everything shown) */}
      {open && (
        <div className="md:hidden border-t">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2 text-[15px]">
            <a onClick={() => setOpen(false)} className="py-2" href="#about">
              About
            </a>
            <a onClick={() => setOpen(false)} className="py-2" href="#skills">
              Skills
            </a>
            <a
              onClick={() => setOpen(false)}
              className="py-2"
              href="#experience"
            >
              Experience
            </a>
            <a
              onClick={() => setOpen(false)}
              className="py-2"
              href="#education"
            >
              Education
            </a>
            <a onClick={() => setOpen(false)} className="py-2" href="#projects">
              Projects
            </a>

            <div className="my-1 h-px bg-neutral-200" />

            <button
              onClick={() => {
                setOpen(false);
                onOpenContact?.();
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
            >
              <img src="/icons/message.svg" alt="Message" className="w-4 h-4" />
              Say Hello
            </button>

            <a
              onClick={() => setOpen(false)}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-4 py-2 hover:bg-neutral-800 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
