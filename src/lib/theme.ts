import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#ea7317",
    colorLink: "#ea7317",
    colorText: "#0b1730",
    fontFamily: "var(--font-body), Segoe UI, sans-serif",
    borderRadius: 999,
  },
  components: {
    Button: {
      controlHeight: 44,
      fontWeight: 600,
    },
    Input: {
      controlHeight: 44,
    },
  },
};
