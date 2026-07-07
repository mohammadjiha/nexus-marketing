import { Inter, Tajawal } from "next/font/google";

export const latinFont = Inter({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
});

export const arabicFont = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-arabic",
  display: "swap",
});
