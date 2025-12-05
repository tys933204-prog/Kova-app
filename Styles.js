// Styles.js
// Global style settings for the Kova App

export const Colors = {
  bg: "#000",           // main background
  card: "#111",         // card background
  text: "#fff",         // normal text
  muted: "#aaa",        // secondary text
  kovaGreen: "#0f0",    // signature neon green
  danger: "#ff4444",    // errors / alerts
  highlight: "#1aff1a"  // glowing green for AI Mode
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const Radius = {
  sm: 6,
  md: 12,
  lg: 20,
};

export const TextStyles = {
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.text
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.muted
  },
  label: {
    fontSize: 14,
    color: Colors.text
  }
};

// AI Mode visual effects placeholder
export const AIStyles = {
  glow: {
    shadowColor: Colors.kovaGreen,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    borderColor: Colors.kovaGreen,
    borderWidth: 1,
  }
};
