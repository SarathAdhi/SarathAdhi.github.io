import "./globals.css";
import { cn } from "@lib/utils";
import Navbar from "@components/Navbar";
import { cookies } from "next/dist/client/components/headers";
import Toast from "@components/Toast";
import type { Metadata } from "next/index";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import TopAlert from "@components/TopAlert";

export const metadata: Metadata = {
  title: "Sarath Adhithya",
  description:
    "Hi, I'm Sarath, a Full-stack developer specializing in creating stunning and high-performance websites using cutting-edge technologies.",
  authors: [
    {
      name: "Sarath Adhithya",
      url: "https://www.linkedin.com/in/sarath-adhithya/",
    },
  ],
  keywords:
    "Nextjs 13, UI/UX Portfolio, Portfolio, Sarath Adhithya, Sarath Adhithya Portfolio",
  applicationName: "Sarath Portfolio",
  category: "Portfolio",
  creator: "Sarath Adhithya",
  themeColor: "#111",
};

const myFont = localFont({
  src: "../../public/fonts/Hubot-Sans.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get("theme-webpage");

  return (
    <html lang="en" className={cn(theme?.value || "dark", myFont.className)}>
      <body className={cn("p-0 flex flex-col min-h-screen")}>
        <TopAlert />

        <Navbar theme={theme?.value} />

        {children}

        <Toast />
        <Analytics />
      </body>
    </html>
  );
}
