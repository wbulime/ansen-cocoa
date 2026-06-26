import type { Metadata, Viewport } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://ansencocoa.com'),
  title: 'Ansen Cocoa | Pure Cocoa. Purposefully Processed.',
  description:
    "Ansen Cocoa, Uganda's premium cocoa processor. We transform the finest cocoa beans into natural cocoa powder, dark cocoa powder, cocoa butter, and cocoa nibs.",
  authors: [{ name: 'Ansen Cocoa (Kite Industries Limited)' }],
  alternates: { canonical: 'https://ansencocoa.com/' },
  robots: 'index, follow, max-image-preview:large',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: 'https://ansencocoa.com/',
    siteName: 'Ansen Cocoa',
    title: 'Ansen Cocoa | Pure Cocoa. Purposefully Processed.',
    description:
      "Uganda's premium cocoa processor. Natural and dark cocoa powder, cocoa butter, and cocoa nibs crafted with integrity in Uganda.",
    images: [
      {
        url: 'https://ansencocoa.com/assets/images/logo.png',
        alt: 'Ansen Smitten Cocoa by Kite Industries Limited',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ansen Cocoa | Pure Cocoa. Purposefully Processed.',
    description:
      "Uganda's premium cocoa processor. Natural and dark cocoa powder, cocoa butter, and cocoa nibs.",
    images: ['https://ansencocoa.com/assets/images/logo.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4A2C0A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://ansencocoa.com/#organization',
                  name: 'Ansen Cocoa',
                  alternateName: 'Ansen Smitten Cocoa',
                  url: 'https://ansencocoa.com/',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://ansencocoa.com/assets/images/logo.png',
                  },
                  email: 'kiteindustrieslimited@gmail.com',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'P.O Box 801802',
                    addressLocality: 'Ntinda, Kampala',
                    addressCountry: 'UG',
                  },
                  parentOrganization: {
                    '@type': 'Organization',
                    name: 'Kite Industries Limited',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://ansencocoa.com/#website',
                  url: 'https://ansencocoa.com/',
                  name: 'Ansen Cocoa',
                  description:
                    'Premium Ugandan cocoa products: powder, butter, and nibs.',
                  publisher: { '@id': 'https://ansencocoa.com/#organization' },
                },
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
