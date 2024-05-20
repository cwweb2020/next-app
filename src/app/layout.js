import { Inter } from "next/font/google";
import "../styles/base.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MyContextProvider } from "@/context";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi app",
  description: "la mejor app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyContextProvider>
          <Header />
          {children}
          <Footer />
        </MyContextProvider>
      </body>
    </html>
  );
}
