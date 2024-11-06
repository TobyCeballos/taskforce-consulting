import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Task Force | Consultora Financiera',
  description:
    'Impulsa tu futuro financiero con Task Force: asesoría experta en planificación fiscal, optimización de inversiones y soluciones financieras a medida. ¡Logra tus metas con los mejores en el sector!',
  keywords: 'asesoría financiera, planificación fiscal, optimización de inversiones, consultoría financiera, soluciones financieras, finanzas personales, asesoría en inversiones',
  author: 'Task Force Consultora Financiera',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" prefix="og: http://ogp.me/ns#">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/assets/circle-logo.png" />

        {/* SEO Meta Tags */}
        <title>Task Force | Consultora Financiera</title>
        <meta name="description" content="Impulsa tu futuro financiero con Task Force: asesoría experta en planificación fiscal, optimización de inversiones y soluciones financieras a medida. ¡Logra tus metas con los mejores en el sector!" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="asesoría financiera, planificación fiscal, optimización de inversiones, consultoría financiera, soluciones financieras, finanzas personales, asesoría en inversiones" />
        <meta name="author" content="Task Force Consultora Financiera" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Task Force | Consultora Financiera" />
        <meta property="og:description" content="Impulsa tu futuro financiero con Task Force: asesoría experta en planificación fiscal, optimización de inversiones y soluciones financieras a medida." />
        <meta property="og:image" content="/assets/circle-logo.png" />
        <meta property="og:url" content="https://www.tusitio.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Task Force | Consultora Financiera" />
        <meta name="twitter:description" content="Impulsa tu futuro financiero con Task Force: asesoría experta en planificación fiscal, optimización de inversiones y soluciones financieras a medida." />
        <meta name="twitter:image" content="/assets/circle-logo.png" />

        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Language and Regional Targeting */}
        <link rel="alternate" hrefLang="es" href="https://www.tusitio.com" />
        <link rel="alternate" hrefLang="es-AR" href="https://www.tusitio.com" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.tusitio.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
