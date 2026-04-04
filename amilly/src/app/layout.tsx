import type { Metadata } from "next";
import { Jura, Poppins, Imprima, Junge, Aboreto } from "next/font/google";
import "./globals.css";

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const imprima = Imprima({
  variable: "--font-imprima",
  subsets: ["latin"],
  weight: ["400"],
});

const junge = Junge({
  variable: "--font-junge",
  subsets: ["latin"],
  weight: ["400"],
});

const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "AMMILY | Style isn't worn. It's owned.",
  description: "Official AMMILY fashion collection. Live louder. Dress bold.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jura.variable} ${poppins.variable} ${imprima.variable} ${junge.variable} ${aboreto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins ">{children}</body>
    </html>
  );
}
