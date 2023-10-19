import "./globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "./navbar/Navbar";
import Script from "next/script";
import Footer from "./footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Narmadeshwar shivling",
  description:
    "Buy Original Narmadeshwar shivling at the lowest cost. Call or Whatsapp at 9691794836. Shop now and get 40% off!.",
  keywords: "Narmada shivling, Naramada river stone",
};

type Metadata = {
  title: string,
  description: string,
  keywords: string
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta charSet="utf8" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1V0ZHFSCE9"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1V0ZHFSCE9');
        `}
        </Script>
      </Head>

      <body className={inter.className} style={{ maxWidth: "100vw" }}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
