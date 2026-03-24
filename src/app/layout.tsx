import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

/** Display font — bold geometric headings */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

/** Body font — clean readable text */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TrainTrack — Train Hard. Track Everything.",
  description:
    "Workouts, nutrition, and body progress — beautifully unified in one app that works everywhere, even offline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
