import { Inter } from "next/font/google";
import "./styles/reset.scss";
import "./styles/global.scss";

const inter = Inter({ subsets: ["latin"] });
 
export const metadata = {
  title: "PhyBooks",
  description: "Calicut university B.Sc physics textbooks",
};

export const viewport = {
  themeColor: "#000000",
  appleMObileWebAppStatusBarStyle: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
