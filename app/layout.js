// import Header from "@/components/Header"
import "./globals.css";
import Providers from "./providers";
import { Inter } from "next/font/google";
import HeaderTape from "@/components/header/HeaderTape";
import Header from "@/components/header/Header";
import Footer from "@/components/header/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Прод-пром товари",
  description: "Продуктові і промислові товари",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      {/* suppressHydrationWarning={true}//https://www.slingacademy.com/article/next-js-warning-extra-attributes-from-the-server/ */}
      <body
        suppressHydrationWarning={true}
        className={`inter.className bg-bodyBg dark:bg-bodyBgD`}
      >
        <Providers>
          <HeaderTape />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
