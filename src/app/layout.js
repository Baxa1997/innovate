import "./globals.scss";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

export const metadata = {
  title: "Innovative Fleet Management",
  description: "ELD Compliance, GPS Tracking, Dispatch Board and AI Dash Camera",
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://zeromaxeld.com/",
    site_name: "ZeromaxEld Fleet Management",
    title: "Innovative Fleet Management",
   // https://www.dropbox.com/scl/fi/2bp0l6nefm26d0gza5tw3/banner_admin_panel.png?rlkey=u06g55qowdrcbzn84qgjpqtr9&dl=0
    images: ["https://dl.dropboxusercontent.com/scl/fi/2bp0l6nefm26d0gza5tw3/banner_admin_panel.png?rlkey=u06g55qowdrcbzn84qgjpqtr9&dl=0"],
    description: "ELD Compliance, GPS Tracking, Dispatch Board and AI Dash Camera",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="html layout">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
