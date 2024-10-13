import '../styles/globals.css';
import { Footer } from 'components/footer';
import { Nav } from 'components/nav';

export const metadata = {
    title: "InfoMundo"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
            <link rel="icon" href="/favicon.svg?v=1.0" sizes="any"/>
            </head>
            <body className="antialiased text-white bg-blue-900">
            <Nav></Nav>      
            {children}
            <Footer></Footer>
            </body>
        </html>
    );
}
