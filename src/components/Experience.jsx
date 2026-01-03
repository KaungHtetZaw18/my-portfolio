import { Reveal } from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Illustration -> Slides from LEFT */}
        <div className="flex justify-center lg:justify-start">
          <Reveal width="100%" variant="left" triggerOnce>
            <img
              src="/remote-work.svg"
              alt="Experience illustration"
              className="w-full max-w-sm lg:max-w-md"
            />
          </Reveal>
        </div>

        {/* Right: Content -> Slides from RIGHT (staggered) */}
        <div>
          <Reveal delay={200} variant="right" triggerOnce>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              My{" "}
              <span className="underline decoration-2 decoration-black/80 underline-offset-4">
                Experience
              </span>
            </h2>
          </Reveal>

          <div className="space-y-8">
            {/* Capstone Project - Slides from RIGHT */}
            <Reveal delay={400} width="100%" variant="right" triggerOnce>
              <div>
                <h3 className="font-semibold text-lg md:text-xl mb-1">
                  Capstone Project – Survey Platform
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-neutral-600 mb-3">
                  The Guinea Group & QUT | Brisbane, Australia
                  <br />
                  <span className="italic">Feb 2024 – Jun 2024</span>
                </p>
                <ul className="list-disc list-inside text-neutral-700 text-sm md:text-base lg:text-lg space-y-1 leading-relaxed">
                  <li>
                    <strong>Engineered</strong> a responsive survey platform on{" "}
                    <strong>AWS</strong>, delivering scalable access for
                    'Leadership Under Pressure' training.
                  </li>
                  <li>
                    <strong>Built</strong> reusable UI components with{" "}
                    <strong>React.js</strong> and <strong>Tailwind CSS</strong>,
                    establishing a design system that accelerated development.
                  </li>
                  <li>
                    <strong>Debugged</strong> complex API integrations using{" "}
                    <strong>Postman</strong>, resolving backend issues and
                    reducing data errors by 20%.
                  </li>
                  <li>
                    <strong>Optimized</strong> Agile workflows via{" "}
                    <strong>Trello</strong> and <strong>Slack</strong>, ensuring
                    clean version control and timely delivery with{" "}
                    <strong>GitHub</strong>.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
