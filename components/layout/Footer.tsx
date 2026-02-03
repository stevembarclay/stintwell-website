import Link from "next/link";
import Logo from "@/components/layout/Logo";

export default function Footer() {
  return (
    <footer className="anchor-section border-t border-white/10">
      <div className="container-wide flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <Logo tone="light" />
        <div className="flex flex-col items-center gap-2 text-sm text-white/70">
          <p>&copy; 2026 Stintwell. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
        <p className="text-xs text-white/60">Structure, shipped.</p>
      </div>
    </footer>
  );
}
