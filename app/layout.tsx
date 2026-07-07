import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SK Foods | Corporate Catering & Food Solutions",

  description:
    "SK Foods provides Corporate Catering, Pantry Management, Corporate Cafeteria, Fresh Juices, Healthy Snacks, Bakery Products and Event Catering across Bengaluru, Hyderabad and Chennai.",

  keywords: [
    "SK Foods",
    "Corporate Catering",
    "Corporate Cafeteria",
    "Pantry Management",
    "Fresh Juices",
    "Healthy Snacks",
    "Event Catering",
    "Corporate Food Solutions",
    "Bengaluru Catering",
    "Hyderabad Catering",
    "Chennai Catering",
  ],

  authors: [{ name: "SK Foods" }],
  creator: "SK Foods",
  publisher: "SK Foods",

  metadataBase: new URL("https://sk-foods-v.vercel.app"),

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "SK Foods | Corporate Catering & Food Solutions",
    description:
      "Premium Corporate Catering, Pantry Management, Tuck Shop and Event Catering Services.",
    url: "https://sk-foods-v.vercel.app",
    siteName: "SK Foods",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "SK Foods",
      },
    ],
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