import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smartlearningonline.com"),

  title: "Certificación de inglés rápida en Colombia | B1, B2, C1",

  description:
    "Obtén tu certificación de inglés rápida y 100% online en Colombia. Ideal para grado, trabajo o crecimiento profesional.",

  keywords: [
    "certificación de inglés Colombia",
    "certificado de inglés rápido",
    "certificación B1 Colombia",
    "certificación B2 Colombia",
    "certificación inglés requisito de grado",
    "certificación inglés online Colombia",
  ],

  authors: [{ name: "Smart Learning" }],
  creator: "Smart Learning",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.smartlearningonline.com",
  },

  icons: {
    icon: "/Logo_img.png",
    apple: "/Logo_img.png",
  },

  openGraph: {
    title: "Certificación de inglés rápida | Smart Learning",
    description:
      "Certifícate en inglés rápido en Colombia. 100% online y válido para universidades.",
    url: "https://www.smartlearningonline.com",
    siteName: "Smart Learning",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.smartlearningonline.com/Logo_img.png",
        width: 1200,
        height: 630,
        alt: "Certificación de inglés en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Certificación de inglés rápida en Colombia",
    description:
      "Obtén tu certificado de inglés rápido y válido. 100% online.",
    images: ["https://www.smartlearningonline.com/Logo_img.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                name: "Smart Learning",
                url: "https://www.smartlearningonline.com",
                logo: "https://www.smartlearningonline.com/Logo_img.png",
                description:
                  "Certificación de inglés rápida y válida en Colombia con acompañamiento.",
                areaServed: "CO",
                sameAs: [
                  "https://www.instagram.com/smartlearningacademia",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: "Certificación de inglés en Colombia",
                description:
                  "Certificación de inglés rápida para requisito de grado y crecimiento profesional.",
                provider: {
                  "@type": "Organization",
                  name: "Smart Learning",
                },
                areaServed: {
                  "@type": "Country",
                  name: "Colombia",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "¿La certificación es válida para universidades?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sí, cumple requisitos académicos en Colombia.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Cuánto tarda el proceso?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Es rápido y depende de tu nivel actual.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Es online?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sí, 100% online con acompañamiento.",
                    },
                  },
                ],
              },
            ]),
          }}
        />

        {children}
      </body>
    </html>
  );
}