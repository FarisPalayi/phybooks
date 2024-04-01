import { Inter } from "next/font/google";
import "./styles/reset.scss";
import "./styles/global.scss";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { getBookTitles } from "./lib/utils";
import { textbooks } from "./lib/data";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

{
  /* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest"></link> */
}

export const metadata = {
  title: {
    template: "PhyBooks | %s",
    default: "PhyBooks",
  },
  description: "Download and Read Calicut university B.Sc physics textbooks",
  keywords: [
    "BSc Physics books",
    "Calicut university books",
    "Calicut university physics books",
    "Physics books",
    ...getBookTitles(textbooks),
  ],
  icons: [
    { rel: "icon", url: "/images/favicon/favicon.ico" },
    {
      rel: "icon",
      url: "/images/favicon/favicon-32x32.png",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/images/favicon/favicon-16x16.png",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      url: "../../public/images/favicon/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
  manifest: "/site.webmanifest",
  creator: "Muhammed Faris P",
  metadataBase: new URL("https://phybooks.vercel.app"),
  openGraph: {
    title: "PhyBooks",
    description: "Download and Read Calicut university B.Sc physics textbooks",
    type: "website",
    url: "https://phybooks.vercel.app",
    siteName: "PhyBooks",
    countryName: "India",
  },
  authors: [{ name: "Muhammed Faris P" }],
  twitter: {
    description: "Download and Read Calicut university B.Sc physics textbooks",
    card: "summary_large_image",
    site: "https://phybooks.vercel.app",
  },
  verification: {
    google: "n-QPbYVkDi6nv3zP8NRF0zCk8FffQp468Sf31Ak5QHw",
  },
};

export const viewport = {
  colorScheme: "dark",
  themeColor: "#000000",
  appleMObileWebAppStatusBarStyle: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
