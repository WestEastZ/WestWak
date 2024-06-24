import "./global.css";
import Navigation from "./_containers/nav/navigation";
import Footer from "./_containers/footer/footer";

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
