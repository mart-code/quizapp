import type { Metadata } from "next";
import LayoutProvider from "@/providers/LayoutProvider";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${raleway.className}  min-h-screen
        antialiased`}>
          <LayoutProvider>
          {children}
          </LayoutProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
