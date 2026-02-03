import type { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import Section from "@/components/primitives/Section";

export const metadata: Metadata = {
  title: "Terms of Service | Stintwell",
  description: "Terms of service for Stintwell.",
};

export default function TermsPage() {
  const html = readFileSync(
    join(process.cwd(), "content/legal/terms.html"),
    "utf8"
  );

  return (
    <Section className="bg-bg">
      <div className="container-tight">
        <article
          className="prose prose-neutral max-w-none prose-headings:text-text prose-p:text-text-muted prose-a:text-accent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Section>
  );
}
