import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // -----------------------------------------------------------------------
      // COLORS
      // -----------------------------------------------------------------------
      colors: {
        // Backgrounds
        bg: {
          "page-start":  "#020618",
          "page-mid":    "#0f172b",
          darkest:       "#080e21",
          darker:        "#0b1120",
          dark:          "#0f2238",
          card:          "#1e2330",
          header:        "rgba(20, 24, 36, 0.8)",
          subheader:     "rgba(20, 24, 36, 0.5)",
          overlay:       "rgba(255, 255, 255, 0.05)",
          "overlay-md":  "rgba(255, 255, 255, 0.1)",
          info:          "rgba(194, 206, 226, 0.2)",
        },

        // Brand & Accent
        brand: {
          teal:          "#38c2d4",
          "teal-soft":   "#5bc4c4",
          blue:          "#7eb1fc",
          cyan:          "#00d1ff",
        },
        accent: {
          blue:          "#2563eb",
          "blue-bg":     "rgba(37, 99, 235, 0.1)",
          "blue-dark":   "#0052cc",
        },
        info: {
          bg:            "rgba(56, 194, 212, 0.1)",
          border:        "rgba(56, 194, 212, 0.1)",
          text:          "rgba(56, 194, 212, 0.5)",
        },

        // Text
        text: {
          white:         "#ffffff",
          primary:       "#d1d5dc",
          secondary:     "#99a1af",
          muted:         "#6a7282",
          "muted-alt":   "#90a1b9",
          placeholder:   "rgba(255, 255, 255, 0.5)",
          "on-teal":     "#0f2238",
        },

        // Borders
        border: {
          subtle:        "rgba(255, 255, 255, 0.05)",
          default:       "rgba(255, 255, 255, 0.1)",
          medium:        "rgba(255, 255, 255, 0.2)",
          step:          "#e2e8f0",
          footer:        "rgba(129, 130, 131, 0.25)",
          teal:          "rgba(56, 194, 212, 0.1)",
        },

        // Semantic
        error:           "#fb2c36",
        "error-alt":     "#ff6467",
        success:         "#38c2d4",
      },

      // -----------------------------------------------------------------------
      // TYPOGRAPHY
      // -----------------------------------------------------------------------
      fontFamily: {
        sans: ["Inter", "Noto Sans Arabic", "sans-serif"],
        arabic: ["Noto Sans Arabic", "sans-serif"],
      },

      fontSize: {
        "2xs":  ["9.6px",  { lineHeight: "14.4px" }],  // logo tagline
        xs:     ["10px",   { lineHeight: "15px" }],     // wizard step labels
        sm:     ["12px",   { lineHeight: "16px" }],     // captions, nav buttons
        base:   ["14px",   { lineHeight: "20px" }],     // labels, body
        md:     ["16px",   { lineHeight: "24px" }],     // inputs, primary body
        lg:     ["18px",   { lineHeight: "28px" }],     // section headings
        xl:     ["20px",   { lineHeight: "20px" }],     // logo wordmark
        "2xl":  ["24px",   { lineHeight: "32px" }],     // card headings
        "3xl":  ["30px",   { lineHeight: "36px" }],     // page headings (H1)
      },

      fontWeight: {
        regular:   "400",
        medium:    "500",
        semibold:  "600",
        bold:      "700",
        black:     "900",
      },

      letterSpacing: {
        tight:        "0",
        logo:         "4px",      // SYNSEERA wordmark
        tagline:      "1.1px",    // logo tagline
        step:         "1px",      // wizard step labels
        button:       "1.2px",    // footer status text
        "button-wide":"1.4px",    // Save Draft / Continue
      },

      // -----------------------------------------------------------------------
      // SPACING
      // -----------------------------------------------------------------------
      spacing: {
        1:  "4px",
        2:  "8px",
        3:  "12px",
        4:  "16px",
        5:  "20px",
        6:  "24px",
        7:  "28px",
        8:  "32px",
        10: "40px",
        12: "48px",
        16: "64px",
        20: "80px",
        // Layout-specific
        "sidebar":       "256px",
        "navbar":        "80px",
        "footer":        "80px",
        "progress-bar":  "4px",
        "page-max":      "1260px",
        "panel-max":     "1019px",
      },

      // -----------------------------------------------------------------------
      // BORDER RADIUS
      // -----------------------------------------------------------------------
      borderRadius: {
        xs:    "8px",
        sm:    "10px",
        md:    "14px",
        lg:    "16px",
        full:  "9999px",
      },

      // -----------------------------------------------------------------------
      // BOX SHADOW
      // -----------------------------------------------------------------------
      boxShadow: {
        cta:        "0px 10px 15px rgba(0, 82, 204, 0.2), 0px 4px 6px rgba(0, 82, 204, 0.2)",
        "cta-teal": "0px 10px 15px -3px rgba(56, 194, 212, 0.2), 0px 4px 6px -4px rgba(56, 194, 212, 0.2)",
        "step":     "0px 10px 15px -3px rgba(91, 196, 196, 0.2), 0px 4px 6px -4px rgba(91, 196, 196, 0.2)",
        footer:     "0px -4px 12px rgba(0, 0, 0, 0.02)",
      },

      // -----------------------------------------------------------------------
      // BACKGROUND IMAGE (gradients)
      // -----------------------------------------------------------------------
      backgroundImage: {
        "page-bg":          "linear-gradient(133deg, #020618 0%, #0f172b 50%, #020618 100%)",
        "progress":         "linear-gradient(180deg, #0052cc 0%, #00d1ff 100%)",
        "icon-container":   "linear-gradient(to bottom, #0052cc, #00d1ff)",
        "progress-track":   "linear-gradient(90deg, #1e2330 0%, #1e2330 100%)",
      },

      // -----------------------------------------------------------------------
      // WIDTH / HEIGHT
      // -----------------------------------------------------------------------
      width: {
        sidebar:    "256px",
        "page-max": "1260px",
        "panel-max":"1019px",
      },

      height: {
        navbar:   "80px",
        stepbar:  "65px",
        footer:   "80px",
        input:    "50px",
        "btn-primary": "56px",
        "btn-action":  "44px",
      },
    },
  },

  plugins: [],
};

export default config;
