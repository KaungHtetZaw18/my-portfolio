export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 text-[15px] text-neutral-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-neutral-900 text-base md:text-lg">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold">Kaung Htet Zaw</span>
            </p>
            <a
              href="https://popsy.co/illustrations"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-neutral-800 text-xs block mt-1"
            >
              Illustrations from popsy.co
            </a>
          </div>

          {/* Right */}
          <nav className="flex items-center gap-4 md:gap-5">
            <a
              className="hover:underline underline-offset-4"
              href="https://github.com/KaungHtetZaw18"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className="text-neutral-300">·</span>
            <a
              className="hover:underline underline-offset-4"
              href="https://kaungspace.blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
            <a
              className="hover:underline underline-offset-4"
              href="https://www.linkedin.com/in/kaung-h-zaw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <span className="text-neutral-300">·</span>
            <a
              className="hover:underline underline-offset-4"
              href="mailto:kaunghtetzaw.inbox@gmail.com"
            >
              Email
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
