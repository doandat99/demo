import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/nav/Navbar";
// import Footer from "@/components/footer/footer";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          {/* <Navbar /> */}
          <ChakraProvider>{children}</ChakraProvider>
          {/* {children} */}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
