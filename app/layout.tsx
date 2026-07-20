import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aasif Developers — Construction & Development | Vision, Creativity, Craftsmanship",
  description:
    "Aasif Developers is a Pakistan-based construction company delivering villas, high-rise towers and infrastructure since 2016 for clients including Bahria Town, New Metro City and China Electric Power.",
  keywords: [
    "Aasif Developers",
    "construction company Pakistan",
    "villa construction",
    "Bahria Town contractor",
    "civil works",
    "infrastructure construction",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
