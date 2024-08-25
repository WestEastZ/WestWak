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
      <body>
        <div id="modal-portal"></div>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
