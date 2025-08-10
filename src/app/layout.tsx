import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/layout.css"
import { NavBar } from "@/layout";
export const metadata: Metadata = {
  title: "Digimon RPG Evo guide",
  description: "Digimon RPG evolution line helper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html >
  );
}
