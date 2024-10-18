import "./global.css";
import Navigation from "./_components/layout/nav/navigation";
import Footer from "./_components/layout/footer/footer";

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
