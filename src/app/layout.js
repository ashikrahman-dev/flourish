import { Mulish, Noto_Serif } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const mulish = Mulish({
    subsets: ["latin"],
    variable: "--font-mulish",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
});

export const noto_serif = Noto_Serif({
    subsets: ["latin"],
    variable: "--font-noto-serif",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
});

export const metadata = {
    title: "Flourish",
    description: "Flourish Nextjs web App",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${noto_serif.variable} ${mulish.variable} scroll-smooth`}
        >
            <body className="font-noto_serif" suppressHydrationWarning={true}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
