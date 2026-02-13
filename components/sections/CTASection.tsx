import Button from "@/components/primitives/Button";
import MotionReveal from "@/components/interactions/MotionReveal";

export default function CTASection({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section-padding section-gradient-anchor inset-highlight">
      <div className="container-tight text-center">
        <MotionReveal>
          <h2 className="text-h2 text-white mb-4">{title}</h2>
        </MotionReveal>
        <MotionReveal delay={100}>
          <p className="text-body text-white/70 mb-10">{description}</p>
        </MotionReveal>
        <MotionReveal delay={200}>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href={primary.href}
              data-cta={primary.label}
              data-cta-location="cta-section"
              data-cta-destination={primary.href.replace("#", "")}
            >
              {primary.label}
            </Button>
            {secondary && (
              <Button
                href={secondary.href}
                variant="secondary"
                className="border-white/40 text-white hover:border-white"
                data-cta={secondary.label}
                data-cta-location="cta-section"
                data-cta-destination={secondary.href.replace("#", "")}
              >
                {secondary.label}
              </Button>
            )}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
