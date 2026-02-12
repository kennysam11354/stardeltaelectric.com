import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://stardeltaelectric.com"),
  title: {
    default: "Commercial Electrical Contractor NJ NY | Star Delta Electric",
    template: "%s | Star Delta Electric",
  },
  description:
    "Professional commercial electrical contractor serving New Jersey and New York. Retail, warehouse, and commercial electrical installation and maintenance.",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({ children }) {
  const headerStore = await headers();
  const lang = headerStore.get("x-lang") === "ko" ? "ko" : "en";

  return (
    <html lang={lang}>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
