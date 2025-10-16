export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Illustration */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/remote-work.svg"
            alt="Experience illustration"
            className="w-full max-w-sm lg:max-w-md"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            My{" "}
            <span className="underline decoration-2 decoration-black/80 underline-offset-4">
              Experience
            </span>
          </h2>

          <div className="space-y-8">
            {/* Capstone Project */}
            <div>
              <h3 className="font-semibold text-lg md:text-xl mb-1">
                Capstone Project – Survey Platform
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-neutral-600 mb-3">
                <span className="italic">Feb 2024 – Jun 2024 · Brisbane</span>
                <br />
                Associated by Queensland University of Technology (QUT) / The
                Guinea Group
              </p>
              <ul className="list-disc list-inside text-neutral-700 text-sm md:text-base lg:text-lg space-y-1 leading-relaxed">
                <li>
                  Developed and deployed a web-based survey platform for
                  “Leadership Under Pressure” training on AWS.
                </li>
                <li>
                  Built and improved frontend features using{" "}
                  <strong>React</strong> and <strong>Tailwind CSS</strong>,
                  ensuring responsive and accessible UI.
                </li>
                <li>
                  Resolved backend issues and collaborated with teammates to
                  deliver key functionality on schedule.
                </li>
                <li>
                  Implemented Agile methodology with weekly sprints, using
                  Trello, GitHub, and Slack for collaboration.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
