
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deko Ahmed Mohamed | Data Science & Machine Learning",
  description:
    "Deko Ahmed Mohamed is a Computer Applications professional based in Mogadishu, Somalia, with a Bachelor's degree from Jamhuriya University of Science and Technology. Explore projects in Data Science, Machine Learning, NLP, Full-Stack and Mobile App Development.",

  keywords: [
    "Deko Ahmed Mohamed",
    "Data Science",
    "Machine Learning",
    "Natural Language Processing",
    "Somali NLP",
    "Full-Stack Developer",
    "Mobile App Developer",
    "React",
    "Next.js",
    "Flutter",
    "Python",
    "Mogadishu",
    "Somalia",
  ],

  openGraph: {
    title: "Deko Ahmed Mohamed | Data Science & Machine Learning",
    description:
      "Explore my projects and work in Data Science, Machine Learning, Somali NLP, Full-Stack and Mobile Application Development.",
    type: "website",
    locale: "en_US",
    siteName: "Deko Ahmed Mohamed Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Deko Ahmed Mohamed | Portfolio",
    description:
      "Data Science, Machine Learning, NLP, Full-Stack and Mobile App Development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
