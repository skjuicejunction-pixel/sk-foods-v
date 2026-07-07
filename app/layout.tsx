import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sk-foods-v.vercel.app"),

  title: {
    default: "SK Foods | Corporate Catering & Food Solutions",
    template: "%s | SK Foods",
  },

  description:
    "SK Foods provides Corporate Catering, Pantry Management, Corporate Cafeteria, Tuck Shop Services, Fresh Juices, Healthy Snacks, Bakery Products and Event Catering across Bengaluru, Hyderabad and Chennai.",

  keywords: [
    "SK Foods",
    "Corporate Catering",
    "Corporate Cafeteria",
    "Corporate Food Solutions",
    "Pantry Management",
    "Office Catering",
    "Event Catering",
    "Fresh Juices",
    "Healthy Snacks",
    "Bakery Products",
    "Tuck Shop Services",
    "Corporate Catering Bangalore",
    "Corporate Catering Bengaluru",
    "Corporate Catering Hyderabad",
    "Corporate Catering Chennai",
  ],

  authors: [
    {
      name: "SK Foods",
    },
  ],

  creator: "SK Foods",
  publisher: "SK Foods",

  applicationName: "SK Foods",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "SK Foods | Corporate Catering & Food Solutions",

    description:
      "Premium Corporate Catering, Pantry Management, Corporate Cafeteria, Fresh Juices, Healthy Snacks and Event Catering.",

    url: "https://sk-foods-v.vercel.app",

    siteName: "SK Foods",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "SK Foods Corporate Catering",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "SK Foods | Corporate Catering & Food Solutions",

    description:
      "Premium Corporate Catering, Pantry Management & Food Solutions.",

    images: ["/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}