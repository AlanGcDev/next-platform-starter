"use client"; // Ejecutar solo en el cliente

import Script from 'next/script';

export function Ads() {
    return (
        <div className="ads-container">
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9071856855843903"
                crossorigin="anonymous"
            />
            <ins 
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9071856855843903"
                data-ad-slot="5421231187"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
            <Script id="ad-init" strategy="afterInteractive">
                {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </Script>
        </div>
    );
}
