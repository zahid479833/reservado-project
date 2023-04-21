import './globals.css'
import Header from "./components/header";
import Footer from "./components/footer";
export const metadata = {
  title: "Rental Management System",
  description: "For renting a property",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {/*  <Header /> */}
        {children}
        {/*   <Footer /> */}
      </body>
    </html>
  );
}
