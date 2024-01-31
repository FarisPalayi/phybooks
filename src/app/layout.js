import { Inter } from "next/font/google";
import "./styles/reset.scss";
import "./styles/global.scss";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
