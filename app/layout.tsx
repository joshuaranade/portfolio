import { Providers } from "./providers"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import Header from "@/components/Header"
import Stars from "@/components/Stars"

const geist = GeistSans

export const metadata = {
  title: "Joshua Ranade",
  description:
    "Welcome to the personal portfolio of Joshua Ranade, where you can explore his journey, achievements, and creative work.",
  openGraph: {
    title: "Joshua Ranade ",
    description:
      "Discover Joshua Ranade's journey, achievements, and creative projects in his personal portfolio.",
    images: [
      {
        url: "/og.png", // Replace with the actual path to your OG image
        width: 1920,
        height: 1080,
        alt: "Joshua Ranade Portfolio",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Meta tags for SEO */}
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={`${metadata.openGraph.images[0].width}`} />
        <meta property="og:image:height" content={`${metadata.openGraph.images[0].height}`} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
      </head>
      <body className={`${geist.className} antialiased`}>
        <Providers>
          <div className="min-h-screen cosmic-bg relative overflow-hidden">
            <Stars />
            <Header />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
