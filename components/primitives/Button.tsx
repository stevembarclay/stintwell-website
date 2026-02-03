import Link from "next/link";
import { cx } from "@/lib/classnames";

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] focus-ring";

const variants = {
  primary: "premium-button",
  secondary:
    "border border-black/10 text-text hover:border-black/30 hover:shadow-soft transition-all duration-300 ease-smooth active:scale-[0.98]",
  ghost: "text-text-muted hover:text-text transition-colors duration-200",
};

type ButtonBaseProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

type ButtonLinkProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonLinkProps | ButtonButtonProps;

export default function Button(props: ButtonProps) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = cx(base, variants[variant], className);

  if ("href" in props) {
    const { href, ...anchorProps } = rest as ButtonLinkProps;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonButtonProps)}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
