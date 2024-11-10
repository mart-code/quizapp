import type { Metadata } from "next";
import localFont from "next/font/local";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Quiz questions for interview practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}  antialiased`}>{children}</body>
    </html>
  );
}
