import Script from 'next/script';

export function Ads() {
  return (
    <div className="ads-container">
      {/* Script global para inicializar Google AdSense */}
      <Script
        id="adsense-init"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9071856855843903"
        crossOrigin="anonymous"
        onLoad={() => {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }}
      />

      {/* Bloque 1 */}
      <div className="ads-1">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9071856855843903"
          data-ad-slot="5421231187"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      {/* Bloque 2 */}
      <div className="ads-2">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9071856855843903"
          data-ad-slot="5421231187"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      {/* Bloque 3 */}
      <div className="ads-3">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9071856855843903"
          data-ad-slot="5421231187"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      {/* Bloque 4 */}
      <div className="ads-4">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9071856855843903"
          data-ad-slot="5421231187"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      {/* Bloque 5 */}
      <div className="ads-5">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9071856855843903"
          data-ad-slot="5421231187"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      {/* Bloque 6 */}
      <div className="ads-6">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9071856855843903"
          data-ad-slot="5421231187"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      {/* Bloque 7 */}
      <div className="ads-7">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9071856855843903"
          data-ad-slot="5421231187"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      {/* Bloque 8 */}
      <div className="ads-8">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9071856855843903"
          data-ad-slot="5421231187"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      {/* Bloque 9 */}
      <div className="ads-9">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9071856855843903"
          data-ad-slot="5421231187"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}
