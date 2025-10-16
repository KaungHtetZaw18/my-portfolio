const skills = [
  { name: "Git / GitHub", icon: "/icons/github.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "CSS3 & Tailwind", icon: "/icons/tailwind.svg" },
  { name: "Agile Methodologies", icon: "/icons/agile.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Node.js + Express", icon: "/icons/node.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg", learning: true },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            My{" "}
            <span className="underline decoration-2 decoration-black/80 underline-offset-4">
              Skills
            </span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((s) => (
            <SkillTile key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillTile({ name, icon }) {
  return (
    <div
      className="group relative aspect-[5/4] rounded-xl border flex items-center justify-center overflow-hidden bg-white hover:bg-black hover:text-white transition-colors"
      role="img"
      aria-label={name}
      title={name}
    >
      {icon ? (
        <img
          src={icon}
          alt=""
          className="h-20 w-20 md:h-24 md:w-24 object-contain transition-transform duration-200 group-hover:invert"
        />
      ) : (
        <span className="text-sm font-medium">{name}</span>
      )}

      <span className="absolute bottom-2 left-2 right-2 text-center text-xs md:text-sm text-black/70 group-hover:text-white/90">
        {name}
      </span>
    </div>
  );
}
