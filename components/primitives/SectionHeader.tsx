import { cx } from "@/lib/classnames";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const descriptionClass =
    align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl";
  return (
    <div className={cx("space-y-4", alignClass, className)}>
      {eyebrow && (
        <p className="text-label text-text-muted">{eyebrow}</p>
      )}
      <h2 className="text-h2">{title}</h2>
      {description && (
        <p className={`text-body text-text-muted ${descriptionClass}`}>
          {description}
        </p>
      )}
    </div>
  );
}
