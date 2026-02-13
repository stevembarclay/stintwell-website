import { cx } from "@/lib/classnames";

type IconProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "thin" | "regular" | "medium" | "bold";
  className?: string;
};

const sizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
};

const weights = {
  thin: 1,
  regular: 1.5,
  medium: 2,
  bold: 2.5,
};

export default function Icon({
  children,
  size = "md",
  weight = "regular",
  className,
}: IconProps) {
  return (
    <svg
      className={cx(sizes[size], className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={weights[weight]}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
