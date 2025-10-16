const projects = [
  {
    title: "Sendo — e-book sender/receiver",
    desc: "Lightweight file handoff via QR pairing. Optimized for Kobo/Kindle browsers using ES5 and a minimal Node backend.",
    tags: ["HTML", "CSS", "JavaScript (ES5)", "Node.js", "Express", "QR"],
    link: "https://sendo-snowy.vercel.app",
    code: "https://github.com/KaungHtetZaw18/SENDO",
    img: "/sendo-preview.png",
    status: "live",
  },
  {
    title: "pending",
    status: "coming-soon",
  },
  {
    title: "pending",
    status: "coming-soon",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Heading */}
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            My{" "}
            <span className="underline decoration-2 decoration-black/80 underline-offset-4">
              Projects
            </span>
          </h2>
          <a
            href="https://github.com/KaungHtetZaw18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            View GitHub →
          </a>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) =>
            p.status === "coming-soon" ? (
              <div
                key={p.title}
                className="border rounded-lg p-6 flex flex-col items-center justify-center text-center bg-neutral-50 hover:bg-neutral-100 transition-colors"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-neutral-200 text-neutral-500 text-lg">
                  🚧
                </div>
                <h3 className="font-medium text-neutral-800 text-base md:text-lg">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-500 mt-1 italic">
                  Coming soon
                </p>
              </div>
            ) : (
              <article
                key={p.title}
                className="border rounded-lg overflow-hidden bg-white hover:bg-neutral-50 transition-colors flex flex-col"
              >
                {p.img && (
                  <div className="aspect-video overflow-hidden bg-neutral-100">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-base md:text-lg mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed flex-grow">
                    {p.desc}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border px-2 py-[2px] text-xs text-neutral-600 bg-neutral-50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-4 text-sm font-medium">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-800 hover:underline"
                    >
                      Live ↗
                    </a>
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-800 hover:underline"
                    >
                      Code ↗
                    </a>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
