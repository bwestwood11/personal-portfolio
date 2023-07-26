import Navbar from "./components/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Brett Westwood",
  description: "My Full Stack Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
