import Script from "next/script";
import { GA_ID } from "@/lib/analytics";

export default function AnalyticsScripts() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
      <Script id="mouseflow" strategy="afterInteractive">
        {`window._mfq = window._mfq || [];
(function() {
  var mf = document.createElement("script");
  mf.type = "text/javascript";
  mf.defer = true;
  mf.src = "//cdn.mouseflow.com/projects/3fbe6aa8-a218-4724-a901-43b7433883f0.js";
  document.getElementsByTagName("head")[0].appendChild(mf);
})();`}
      </Script>
    </>
  );
}
