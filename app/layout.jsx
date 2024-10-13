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
            <meta name="google-adsense-account" content="ca-pub-9071856855843903"/>
            <link rel="icon" href="/favicon.svg?v=1.0" sizes="any"/>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9071856855843903" crossOrigin="anonymous"></script>
            </head>
            <body className="antialiased text-white bg-blue-900">
            <Nav></Nav>      
            {children}
            <Footer></Footer>
            </body>
        </html>
    );
}
