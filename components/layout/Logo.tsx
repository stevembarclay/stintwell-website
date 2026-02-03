type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

export default function Logo({ className, tone = "dark" }: LogoProps) {
  const fills =
    tone === "light"
      ? { wordmark: "#FAFAF8", accent: "#C9A84C" }
      : { wordmark: "#111111", accent: "#A8882F" };
  return (
    <div className={`flex items-center gap-3 ${className || ""}`.trim()}>
      <svg
        className="h-7 w-auto"
        viewBox="0 0 100 25"
        fill="none"
        role="img"
        aria-label="Stintwell"
      >
        <g transform="scale(0.22) translate(0, 5)">
          <rect x="20" y="20" width="40" height="15" fill={fills.accent} />
          <rect x="20" y="20" width="15" height="40" fill={fills.accent} />
          <rect x="40" y="65" width="40" height="15" fill={fills.accent} />
          <rect x="65" y="40" width="15" height="40" fill={fills.accent} />
        </g>
        <text
          x="26"
          y="17.5"
          fontFamily="Inter, sans-serif"
          fontWeight="800"
          fontSize="11"
          fill={fills.wordmark}
          letterSpacing="-0.5"
        >
          stintwell
        </text>
      </svg>
    </div>
  );
}
