import Link from "next/link";
import MotionReveal from "@/components/interactions/MotionReveal";

export default function FeaturedProduct() {
  return (
    <MotionReveal variant="scaleIn">
      <div className="premium-card p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-label text-text-muted mb-3">Featured Product</p>
            <h3 className="text-h2 mb-3">SBOS</h3>
            <p className="text-body text-text-muted max-w-xl">
              The Stintwell Business Operating System. Document your operations, surface structural gaps, and build a
              business that runs without heroics.
            </p>
          </div>
          <Link
            href="/sbos"
            className="inline-flex items-center rounded-full border border-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent transition-all duration-300 ease-smooth hover:shadow-gold hover:border-accent-hover focus-ring"
            data-cta="Explore SBOS"
            data-cta-location="homepage-featured"
            data-cta-destination="sbos"
          >
            Explore SBOS
          </Link>
        </div>
      </div>
    </MotionReveal>
  );
}
