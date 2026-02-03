import Button from "@/components/primitives/Button";

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
    <section className="anchor-section section-padding">
      <div className="container-tight text-center">
        <h2 className="text-h2 mb-4">{title}</h2>
        <p className="text-body text-white/70 mb-10">{description}</p>
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
      </div>
    </section>
  );
}
