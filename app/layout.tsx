import "../styles/globals.css";
import Header from "./Header";
import Providers from "./Providers";

export const metadata = {
    title: "IVAKA NEWS",
    description: "Next.js/GraphQL news app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Providers>
                <body className="bg-gray-100 dark:bg-zinc-900 transition-all">
                    <Header />
                    <div className="max-w-6xl mx-auto">{children}</div>
                </body>
            </Providers>
        </html>
    );
}
