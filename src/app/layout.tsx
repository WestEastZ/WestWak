import "./global.css";
import Navigation from "./_components/layout/nav/navigation";
import Footer from "./_components/layout/footer/footer";
import { Metadata } from "next";
import { openGraphDefault } from "./util/createMetaData";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://wakvideo.shop",
  ),
  title: {
    template: "%s | WAKVIDEO",
    default: "WAKVIDEO",
  },
  description: "왁타버스 콘텐츠를 쉽고 빠르게 볼 수 있는 왁비디오입니다.",
  openGraph: {
    ...openGraphDefault,
    title: "Wakvideo",
    description: "왁타버스 콘텐츠를 쉽고 빠르게 볼 수 있는 왁비디오입니다.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <div id="modal-portal"></div>
        <Navigation />
        <main className="flex flex-grow flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
