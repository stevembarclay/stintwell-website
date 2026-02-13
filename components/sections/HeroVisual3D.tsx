"use client";

import styles from "@/app/(marketing)/hero-v3.module.css";

export default function HeroVisual3D() {
  return (
    <div className="relative">
      {/* Studio lighting */}
      <div className={styles.glowGold} />
      <div className={styles.glowWarm} />

      <div className={styles.stage}>
        <div className={styles.orbit}>
          {/* Back layer: Module card */}
          <div className={`${styles.cardBack} ${styles.floatingCard}`}>
            <p className="text-xs uppercase tracking-[0.16em] text-text-muted mb-1 font-data">Module</p>
            <p className="text-sm font-semibold text-text">Financial Controls</p>
            <div className="mt-2 h-1 w-12 rounded-full bg-accent/30" />
          </div>

          {/* Mid layer: Compliance Check card */}
          <div className={`${styles.cardMid} ${styles.floatingCard}`}>
            <p className="text-xs uppercase tracking-[0.16em] text-text-muted mb-1 font-data">Compliance</p>
            <p className="text-sm font-semibold text-text">Structural Audit</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-success" />
              <span className="text-xs text-success font-data">Verified</span>
            </div>
          </div>

          {/* Front layer: Dashboard card */}
          <div className={`${styles.cardFront} ${styles.floatingCard}`}>
            <p className="text-xs uppercase tracking-[0.16em] text-text-muted mb-1 font-data">Dashboard</p>
            <p className="text-sm font-semibold text-text">Operating Score</p>
            <p className="text-2xl font-bold text-accent mt-1 font-data">87</p>
          </div>

          {/* Floating icons */}
          <div className={`${styles.floatingIcon} ${styles.iconShield}`}>
            <span aria-hidden="true">&#128737;</span>
          </div>
          <div className={`${styles.floatingIcon} ${styles.iconGear}`}>
            <span aria-hidden="true">&#9881;</span>
          </div>
          <div className={`${styles.floatingIcon} ${styles.iconChart}`}>
            <span aria-hidden="true">&#128200;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
