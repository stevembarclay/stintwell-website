import Link from "next/link";
import ScrollReveal from "@/components/interactions/ScrollReveal";

export default function FeaturedProduct() {
  return (
    <ScrollReveal>
      <div className="card card-hover p-10 bg-bg-alt">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-label text-text-muted mb-3">Featured Product</p>
            <h3 className="text-h2 mb-3">SBOS</h3>
            <p className="text-body text-text-muted max-w-xl">
              The Service Business Operating System. Diagnose structural risk, install proven systems, and build a
              business that runs without heroics.
            </p>
          </div>
          <Link
            href="/sbos"
            className="inline-flex items-center rounded-full border border-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
            data-cta="Explore SBOS"
            data-cta-location="homepage-featured"
            data-cta-destination="sbos"
          >
            Explore SBOS
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
}
