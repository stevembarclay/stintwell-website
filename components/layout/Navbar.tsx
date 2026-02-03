"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/layout/Logo";
import Button from "@/components/primitives/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 focus-ring rounded-lg">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-text-muted md:flex">
          <Link
            href="/sbos"
            className="hover:text-text transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="hover:text-text transition-colors duration-200"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted transition-colors duration-200 hover:border-black/30 focus-ring md:hidden"
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
        <div className="border-t border-black/5 bg-bg/95 backdrop-blur md:hidden">
          <div className="container-wide flex flex-col gap-4 py-4 text-sm font-medium text-text-muted">
            <Link
              href="/sbos"
              className="hover:text-text transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="hover:text-text transition-colors duration-200"
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
