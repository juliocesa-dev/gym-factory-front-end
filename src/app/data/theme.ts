// ─── THEME TOKENS ───────────────────────────────────────────────────────────
// Edit here to rebrand the entire site instantly.

export const theme = {
  brand:        "#E8FF00",
  brandDark:    "#C4D800",
  bg:           "#0A0A0A",
  surface:      "#141414",
  surfaceHover: "#1C1C1C",
  border:       "#252525",
  textPrimary:  "#F5F5F0",
  textSecondary:"#888880",
  textMuted:    "#555550",
} as const;

export type Theme = typeof theme;
