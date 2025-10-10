import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "ECORUN - Beneficios para Socios",
  description: "Plataforma de beneficios y financiamiento para socios ECORUN",
  generator: "v0.app",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ECORUN",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#5B5FED",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased bg-muted`}>
        <div className="max-w-[430px] mx-auto bg-background min-h-screen shadow-2xl">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
