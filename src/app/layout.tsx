import { Roboto } from "next/font/google";
import { Metadata } from "next";
import AppLayout from "@/components/layouts/app-layout";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--roboto-font",
  preload: true
});


export const metadata: Metadata = {
  title: "Awesome Content Editor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <AppLayout>
        {children}
      </AppLayout>
    </html>
  );
}
