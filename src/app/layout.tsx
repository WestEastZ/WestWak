import "./global.css";
import Navigation from "./containers/nav/navigation";
import Footer from "./containers/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div id="modal-portal"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
