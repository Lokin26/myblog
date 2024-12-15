import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Balamurugan - AI & Automation Architect',
  description: 'Professional portfolio of Balamurugan, Enterprise AI & Automation Architect',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}