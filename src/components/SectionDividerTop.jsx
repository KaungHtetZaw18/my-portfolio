export default function SectionDivider({ subtle = false }) {
  return (
    <div aria-hidden className="relative h-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <svg
          className="w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0h1440v60C1080 120 360 0 0 60V0Z"
            fill={subtle ? "#F8FAFC" : "#EEF2FF"}
          />
        </svg>
      </div>
    </div>
  );
}
