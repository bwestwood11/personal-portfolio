import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Brett Westwood",
  description: "My Full Stack Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
