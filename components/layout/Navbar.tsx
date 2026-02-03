"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/layout/Logo";
import Button from "@/components/primitives/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-bg/90 backdrop-blur">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-text-muted md:flex">
          <Link href="/sbos" className="hover:text-text transition-colors">
            Products
          </Link>
          <Link href="/about" className="hover:text-text transition-colors">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted md:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
          <Button
            href="/sbos"
            data-cta="Explore SBOS"
            data-cta-location="navbar"
            data-cta-destination="sbos"
          >
            Explore SBOS
          </Button>
        </div>
      </div>
      {open && (
        <div className="border-t border-black/10 bg-bg md:hidden">
          <div className="container-wide flex flex-col gap-4 py-4 text-sm font-medium text-text-muted">
            <Link
              href="/sbos"
              className="hover:text-text transition-colors"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="hover:text-text transition-colors"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
