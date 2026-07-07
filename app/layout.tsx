import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SK Foods | Corporate Catering & Food Solutions",

  description:
    "SK Foods provides Corporate Catering, Pantry Management, Corporate Cafeteria, Fresh Juices, Healthy Snacks, Bakery Products and Event Catering across Bengaluru, Hyderabad and Chennai.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}