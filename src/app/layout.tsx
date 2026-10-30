import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/MyPortFolio" : "");
const asset = (path: string) => `${basePath}/${path.replace(/^\/+/, "")}`;

export const metadata: Metadata = {
  title: "Prajwal L Chawda | Cybersecurity Researcher & AI Engineer",
  description:
    "The work, cybersecurity projects, AI research, technical experiments, and engineering journey of Prajwal L Chawda.",
  openGraph: {
    title: "Prajwal L Chawda | Cybersecurity Researcher & AI Engineer",
    description: "Cybersecurity, AI, and engineering work by Prajwal L Chawda.",
    type: "website",
  },
  icons: {
    icon: asset("favicon.jpg"),
    shortcut: asset("favicon.jpg"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
