import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export const metadata: Metadata = {
  title: "Yükselİn Akademi | Gülçin Demir - Matematik Özel Ders",
  description: "İlkokul, ortaokul ve lise matematik özel ders. Dokuz Eylül Üniversitesi İlköğretim Matematik Öğretmenliği mezunu Gülçin Demir ile matematikte yükselişe geçin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
