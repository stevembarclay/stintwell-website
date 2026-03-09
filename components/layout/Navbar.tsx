"use client";

import Link from "next/link";
import Logo from "@/components/layout/Logo";
import Button from "@/components/primitives/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 focus-ring rounded-lg">
          <Logo tone="light" />
        </Link>
        <Button
          href="/sbos"
          data-cta="Explore SBOS"
          data-cta-location="navbar"
          data-cta-destination="sbos"
        >
          Explore SBOS
        </Button>
      </div>
    </header>
  );
}
