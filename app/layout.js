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
        <Toaster position="top-center" toastOptions={{ duration: 3000, style: {
          background: '#333',
          color: '#fff',
        } }} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
