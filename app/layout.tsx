import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SK Foods | Corporate Catering & Food Solutions",
  description:
    "SK Foods provides Corporate Catering, Pantry Management, Corporate Cafeteria, Tuck Shop Services, Fresh Juices, Healthy Snacks, Bakery Products and Event Catering across Bengaluru, Hyderabad & Chennai.",

  keywords: [
    "Corporate Catering",
    "Corporate Cafeteria",
    "Pantry Management",
    "Event Catering",
    "Fresh Juices",
    "Healthy Snacks",
    "Bakery",
    "Tuck Shop",
    "SK Foods",
    "Corporate Food Solutions",
    "Bengaluru Catering",
    "Hyderabad Catering",
    "Chennai Catering",
  ],

  authors: [{ name: "SK Foods" }],

  creator: "SK Foods",

  publisher: "SK Foods",

  metadataBase: new URL("https://skfoods.in"),

  openGraph: {
    title: "SK Foods | Corporate Catering & Food Solutions",
    description:
      "Premium Corporate Catering, Pantry Management, Tuck Shop and Event Catering Services.",
    siteName: "SK Foods",
    locale: "en_IN",
    type: "website",
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