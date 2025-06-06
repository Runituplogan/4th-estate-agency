import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "./request/ReactQueryProvider";
import { HomePageProvider } from "./context/homePageContext";
import { ServicePageProvider } from "./context/servicePageContext";
import { AboutPageProvider } from "./context/aboutPageContext";
import { ContactPageProvider } from "./context/contactPageContext";
import { SeoPageProvider } from "./context/seoPageContext";
import { PPCPageProvider } from "./context/ppcPageContext";
import { PressPageProvider } from "./context/pressPageContext";
import { SocialsPageProvider } from "./context/socialPageContext";
import { WebDevelopmentPageProvider } from "./context/webDevelopmentPage";
import { BrandingPageProvider } from "./context/brandingPageContext";
import { ToastContainer } from "react-toastify";
import { FooterPageProvider } from "./context/footerPageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | 4E Agency",
    default: "4E Agency",
  },
  description: "An Agency That Gets Your Brand What it Deserves",
  keywords: ["4E Agency", "Webste", "Social Media", "SEO", "Press", "Branding"],
  themeColor: "#ffffff",
  twitter: {
    title: "4E Agency",
    description: "An Agency That Gets Your Brand What it Deserves",
    site: "@4E_Agency",
    creator: "@4E_Agency",
    images: {
      url: "./favicons/favicon-32x32.png",
      alt: "4E Agency",
    },
  },
  openGraph: {
    title: "4E Agency",
    description: "An Agency That Gets Your Brand What it Deserves",
    url: "https://www.4thestateagency.com",
    siteName: "Schoolinka",
    images: [
      {
        url: "./favicons/favicon-32x32.png",
        alt: "4EAgency",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://www.4thestateagency.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope} antialiased`}
      >
        <ReactQueryProvider>
          <HomePageProvider>
            <ServicePageProvider>
              <AboutPageProvider>
                <ContactPageProvider>
                  <SeoPageProvider>
                    <PPCPageProvider>
                      <PressPageProvider>
                        <SocialsPageProvider>
                          <WebDevelopmentPageProvider>
                            <BrandingPageProvider>
                              <FooterPageProvider>
                                {children}
                              </FooterPageProvider>
                              <ToastContainer
                                autoClose={2000}
                                hideProgressBar
                                theme="colored"
                              />
                            </BrandingPageProvider>
                          </WebDevelopmentPageProvider>
                        </SocialsPageProvider>
                      </PressPageProvider>
                    </PPCPageProvider>
                  </SeoPageProvider>
                </ContactPageProvider>
              </AboutPageProvider>
            </ServicePageProvider>
          </HomePageProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
