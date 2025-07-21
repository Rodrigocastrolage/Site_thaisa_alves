import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Dra. Thaisa Alves | Psicóloga Online - Terapia para Mulheres",
  description:
    "Psicóloga especializada em atendimento online. Ajudo mulheres a superar ansiedade, melhorar autoestima e encontrar equilíbrio emocional. CRP: 02/26867",
  keywords: "psicóloga online, terapia online, ansiedade, autoestima, mulheres, psicologia, bem-estar mental",
  authors: [{ name: "Dra. Thaisa Alves" }],
  openGraph: {
    title: "Dra. Thaisa Alves | Psicóloga Online",
    description: "Terapia online especializada para mulheres. Supere ansiedade e encontre seu equilíbrio emocional.",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17383698586" strategy="afterInteractive" />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17383698586');
            `,
          }}
        />

        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
