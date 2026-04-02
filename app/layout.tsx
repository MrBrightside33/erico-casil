import "./globals.css";
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"

export const metadata = {
  title: "My Portfolio",
  description: "IT Student Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
