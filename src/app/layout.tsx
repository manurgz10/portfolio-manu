import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manu Rodríguez — Portfolio",
  description: "Full-Stack/Frontend Developer enfocado en React/Next.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
