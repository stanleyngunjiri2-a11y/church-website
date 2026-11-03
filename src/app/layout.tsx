import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),

  title: {
    default: "A New Beginning | Discover Life in Christ",
    template: "%s | A New Beginning",
  },

  description:
    "Discover God's love, learn about salvation and begin a new journey with Jesus Christ. You are welcome here.",

  applicationName: "A New Beginning",

  keywords: [
    "accept Jesus Christ",
    "born again",
    "Christian faith",
    "salvation",
    "prayer requests",
    "God's love",
    "Christian outreach",
  ],

  openGraph: {
    title: "A New Beginning | Discover Life in Christ",
    description:
      "Your story isn't over. Discover God's love and begin a new journey with Jesus Christ.",
    type: "website",
    locale: "en_KE",
    siteName: "A New Beginning",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF9F6",
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
