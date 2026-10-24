import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://t3kit.com"),
  title: "T3Kit Ecosystem | Learn, Play, Build & Explore Web3",
  description: "Discover the T3Kit Ecosystem — a gateway to Web3 learning, gaming, tools, and opportunities. Built from Africa for the next generation of the decentralized internet.",
  applicationName: "T3Kit Ecosystem",
  keywords: ["T3Kit", "Web3", "Web3 education", "Web3 gaming", "blockchain", "Africa", "decentralized internet", "crypto ecosystem"],
  openGraph: {
    title: "T3Kit Ecosystem | Learn, Play, Build & Explore Web3",
    description: "Your gateway to Web3 learning, gaming, tools, and opportunities. Built from Africa for the next generation of the decentralized internet.",
    type: "website",
    siteName: "T3Kit Ecosystem",
    images: [{ url: "https://i.postimg.cc/tgY0wCXN/Screenshot-20261022-084518.jpg", width: 1200, height: 630, alt: "T3Kit Ecosystem preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "T3Kit Ecosystem | Learn, Play, Build & Explore Web3",
    description: "Explore Web3 learning, gaming, tools, and opportunities with T3Kit.",
    images: ["https://i.postimg.cc/tgY0wCXN/Screenshot-20261022-084518.jpg"],
  },
  icons: { icon: { url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxyZWN0IHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjEwMDAiIHJ4PSIyMjAiIGZpbGw9IiMwMTFBMjMiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAgMTk1KSBzY2FsZSguNzgpIj48cGF0aCBkPSJNMjA0LjAgODM4LjAgTDE5OS4wIDgzNy40IEwxOTguNSA4MzYuMCBMMTk5LjAgODMzLjEgTDIwNC42IDgyMC4wIEwyMjAuOCA3NzYuMCBMMjQ1LjggNzA1LjAgTDI4NC4yIDYwMi4wIEwyODcuMiA1OTIuMCBMMjg3LjEgNTg3LjAgTDI4NS4yIDU4My4wIEwyODEuOCA1NzkuMCBMMjc4LjAgNTc2LjcgTDI3NC4wIDU3Ni4yIEwyNS4wIDU3Ni4wIEwyMi4wIDU3NS44IEwyMC43IDU3NS4wIEwyMC45IDU3MS4wIEw5NC43IDM3My4wIEw5OC4wIDM3MS41IEwxMTQuMCAzNzEuMiBMNDc4LjAgMzcyLjEgTDQ4OC42IDM3My4wIEw0OTkuMCAzNzQuOSBMNTA2LjAgMzc3LjAgTDUxNy4wIDM4MS40IEw1MzMuMCAzOTEuMyBMNTQwLjAgMzk3LjAgTDU1MC4wIDQwOC4yIEw1NTguMCA0MjAuMCBMNTYzLjEgNDMxLjAgTDU2Ni4wIDQ0MC44IEw1NjguMSA0NTIuMCBMNTY4LjUgNDY3LjAgTDU2Ny4yIDQ4My4wIEw1NjQuMSA0OTYuMCBMNTYwLjAgNTA4LjIgTDQzNy40IDgzNi4wIEw0MzUuMCA4MzcuNSBMNDI4LjAgODM3LjhaIE00MDEuOCA3OTQuMCBMNDA2LjEgNzkzLjAgTDQwOS4yIDc4Ny4wIEw1MjEuOCA0ODQuMCBMNTI0LjMgNDczLjAgTDUyNC40IDQ1Ni4wIEw1MjEuOSA0NDYuMCBMNTE3LjIgNDM3LjAgTDUwOS4zIDQyOC4wIEw0OTkuMCA0MjEuNCBMNDg4LjAgNDE3LjQgTDQ3Ny4wIDQxNi4xIEwxMzEuMCA0MTUuNSBMMTI3LjAgNDE2LjUgTDEyNS4wIDQxOC42IEwxMjIuNyA0MjQuMCBMOTAuMyA1MTAuMCBMODMuOSA1MjguMCBMODMuNyA1MzAuMCBMODUuMCA1MzEuOCBMMTMzLjAgNTMyLjMgTDE3OC4wIDUzMi4yIEwxODMuMCA1MzEuNCBMMzM4LjAgNTMxLjkgTDM0Mi4wIDUzMi42IEwzNDYuMCA1MzQuOSBMMzQ4LjkgNTM4LjAgTDM1MS4yIDU0Mi4wIEwzNTEuNSA1NDcuMCBMMzUxLjAgNTUwLjkgTDI5MC4yIDcxNy4wIEwyNzcuNCA3NTEuMCBMMjczLjggNzU4LjAgTDI2My41IDc4Ny4wIEwyNjIuNSA3OTEuMCBMMjYzLjAgNzkyLjYgTDI2NS4wIDc5My44IEwyNjkuMCA3OTQuMFoiIGZpbGw9IiMwMEM2RkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5IC0yMCkiLz48cGF0aCBkPSJNNTIwLjAgNzEwLjEgTDUxOS4yIDcxMC4wIEw1MjAuMCA3MDYuNSBMNTI2LjAgNjg5LjggTDU3Ni4wIDU1OC4wIEw2MTAuMCA0NzEuNyBMNjE4LjYgNDUzLjAgTDYyNS4wIDQ0My4wIEw2MzEuMCA0MzUuNCBMNjQxLjAgNDI0LjUgTDY1NS43IDQxMi4wIEw2NzEuMyA0MDIuMCBMNjg5LjAgMzkzLjggTDcwMi4wIDM4OS43IEw3MTIuMCAzODcuNyBMNzkzLjAgMzc4LjcgTDc5Ni4xIDM3OC4wIEw3OTYuNyAzNzcuMCBMNzk1LjAgMzc1LjkgTDc4Ny4wIDM3NC40IEw3MzEuMCAzNjguOSBMNzE0LjAgMzY1LjMgTDY5OS4wIDM1OS4xIEw2OTIuNyAzNTUuMCBMNjgyLjAgMzQ2LjEgTDY3Mi4wIDMzNC41IEw2NjYuMCAzMjQuNyBMNjYwLjAgMzEwLjUgTDY1Ny40IDI5OS4wIEw2NTYuMSAyODYuMCBMNjU3LjggMjY1LjAgTDY2OC45IDIwMi4wIEw2NjguOSAyMDAuMCBMNjY4LjAgMTk4LjUgTDY2Ny4wIDE5OS4wIEw2NjUuMCAyMDIuMSBMNjM3LjUgMjY3LjAgTDYzMy4wIDI3NS4wIEw2MjMuMCAyODkuNCBMNjExLjggMzAyLjAgTDU5Mi44IDMxOC4wIEw1NzYuOSAzMjguMCBMNTYxLjcgMzM1LjAgTDU0My4wIDM0MC4xIEw1MjkuMCAzNDEuNCBMMzI1LjAgMzQxLjUgTDI3MC4wIDM0Mi40IEwyNjYuMSAzNDIuMCBMMjY1LjUgMzQxLjAgTDI2Ny4wIDM0MC4wIEwzODguMCAzMDMuOCBMNTE5LjAgMjY1LjYgTDUzMy4wIDI1OS4yIEw1NDUuMCAyNTEuNCBMNTY0LjAgMjM1LjkgTDU4My4wIDIxNS4wIEw2MDcuNyAxODEuMCBMNzE3LjAgMjUuNCBMNzIxLjAgMjAuOCBMNzIyLjAgMjEuOSBMNzIyLjMgMjQuMCBMNzI0LjMgODYuMCBMNzI5LjcgMjA2LjAgTDczMi4zIDI0NS4wIEw3MzQuNiAyNTYuMCBMNzM3LjMgMjY0LjAgTDc0My40IDI3Ni4wIEw3NDcuNSAyODIuMCBMNzU5LjUgMjk0LjAgTDc2Ni4wIDI5OC4yIEw3NzUuMCAzMDIuNSBMOTM1LjAgMzU5LjQgTDk2NC4wIDM2OC45IEw5NzUuMyAzNzMuMCBMOTc4LjAgMzc1LjAgTDk3NC4wIDM3Ny4yIEw4OTMuMCA0MDQuNiBMNzQ1LjAgNDU2LjUgTDcyNy4wIDQ2NC40IEw3MTYuMCA0NzAuOSBMNzA0LjIgNDc5LjAgTDY5NC4wIDQ4Ny40IEw2ODYuMCA0OTUuMSBMNjc3LjQgNTA0LjAgTDY3MS4wIDUxMi4wIEw1ODUuMyA2MjQuMCBMNTM5LjAgNjg2LjJaIiBmaWxsPSIjMDBDNkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTkgLTIwKSIvPjwvZz48L3N2Zz4=", type: "image/svg+xml" } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#011A23" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Hanken+Grotesk:wght@300..700&family=Poppins:wght@700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
