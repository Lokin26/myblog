import React from 'react';
import './globals.css';
import Navigation from '@/components/Navigation';  // We'll create this component

export const metadata = {
  title: 'Balamurugan - AI & Automation Architect',
  description: 'Professional portfolio of Balamurugan, Enterprise AI & Automation Architect',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', url: '/favicon-96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/web-app-manifest-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', url: '/web-app-manifest-512x512.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' }
  ],
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Balamurugan - AI & Automation Architect',
    statusBarStyle: 'default',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body suppressHydrationWarning>
        <Navigation /> {/* Add the navigation component */}
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-50 py-8 text-center text-gray-600">
          <div className="container mx-auto">
            © {new Date().getFullYear()} @ Balamurugan Mohan. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}