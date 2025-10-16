export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            My{" "}
            <span className="underline decoration-2 decoration-black/80 underline-offset-4">
              Education & More
            </span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 mb-10 leading-relaxed max-w-prose">
            A snapshot of my academic background, certifications, and language
            proficiency — shaping the foundation of my journey as a developer.
          </p>

          <div className="space-y-10">
            {/* Education */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Education
              </h3>
              <div className="space-y-4 text-neutral-800 text-base leading-relaxed">
                <div>
                  <p className="font-semibold">
                    Bachelor's Degree, Information Technology
                  </p>
                  <p>Queensland University of Technology (QUT), Brisbane</p>
                  <p className="text-sm text-neutral-500">07/2023 – 12/2024</p>
                </div>
                <div>
                  <p className="font-semibold">
                    Higher National Diploma, Computing
                  </p>
                  <p>GUSTO College, Yangon, Myanmar</p>
                  <p className="text-sm text-neutral-500">11/2019 – 02/2023</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Certifications
              </h3>
              <div className="space-y-2 text-base text-neutral-800">
                <div className="relative group">
                  <a
                    href="https://coursera.org/verify/professional-cert/NQPRLMXDWBTB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:underline"
                  >
                    Meta Front-End Developer Professional Certificate — Coursera
                    (Oct 2024)
                  </a>
                  <span className="absolute -top-8 left-0 w-max rounded-md bg-black text-white text-xs px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to verify
                  </span>
                </div>

                <p>
                  QC37 English for Academic Purposes (EAP 2 Extended) — QUT
                  College (Jun 2023)
                </p>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Languages
              </h3>
              <ul className="space-y-1 text-base text-neutral-800">
                <li>Burmese — Native</li>
                <li>English — Advanced (C1)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/student-graduation.svg"
            alt="Education Illustration"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}
