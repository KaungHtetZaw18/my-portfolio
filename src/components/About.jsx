export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: SVG Illustration */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/engineer.svg"
            alt="About illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Right: Text content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            About <span className="text-neutral-400">Me</span>
          </h2>

          {/* Larger paragraph sizes on md/lg */}
          <p className="text-base md:text-lg lg:text-xl text-neutral-700 mb-6 leading-relaxed max-w-prose">
            I’m a full-stack developer passionate about building
            <strong> practical, minimalist web apps </strong>
            that work seamlessly across devices — even low-power ones. I focus
            on <strong>clean interfaces</strong>, robust front-end experiences,
            and <strong>efficient back-end systems</strong> that perform
            reliably under real-world constraints.
          </p>

          {/* Section blocks scale together */}
          <div className="space-y-5 text-sm md:text-base lg:text-lg text-neutral-700">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-1">What I Do</h3>
              <p>
                I design and build responsive front-ends, develop scalable APIs,
                and deploy apps using modern web technologies. I enjoy working
                where UX meets backend logic.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-900 mb-1">Currently</h3>
              <p>
                Pursuing a Bachelor's in IT while working on{" "}
                <strong>Sendo</strong>, a lightweight e-book sender/receiver app
                for low-JS devices. Expanding my skills in{" "}
                <strong>React</strong> and <strong>Tailwind</strong> through
                real-world projects, and{" "}
                <strong>continuously learning backend development</strong> to
                strengthen my full-stack foundation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-900 mb-1">
                Collaboration
              </h3>
              <p>
                I enjoy solving practical problems and collaborating on
                thoughtful, clean digital experiences that focus on user needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
