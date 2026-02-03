import { cx } from "@/lib/classnames";

export default function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cx("section-padding", className)}>
      {children}
    </section>
  );
}
