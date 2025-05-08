import type { Metadata } from "next";
import "./globals.css";

import { metadataInfo } from "@/lib/data";
import { fontFamily } from "./theme/typography";

const institutionName: string = metadataInfo[0].institution;

const faviconURL: string = `/favicon/${institutionName}/favicon.ico`;

export const metadata: Metadata = {
  title: metadataInfo[0].title,
  description: metadataInfo[0].description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={faviconURL} />
      </head>
      <body className={fontFamily.className}>{children}</body>
    </html>
  );
}
