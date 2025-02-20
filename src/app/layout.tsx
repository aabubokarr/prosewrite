import './globals.css';
import { Metadata } from 'next';
import Script from 'next/script';
import { PHProvider } from './providers';

export const metadata: Metadata = {
  title: 'Mockup: Landing Page 1',
  description: 'ProseWrite - AI-Powered Writing Assistant',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <PHProvider>
        <body className="relative min-h-screen overflow-x-hidden bg-zinc-950">
          <div className="relative overflow-hidden pt-14">{children}</div>
        </body>
      </PHProvider>
      <Script id="vbt-analytics" strategy="afterInteractive">
        {`
          var _vbset = _vbset || [];
          _vbset.push(['_account', 'VBT-68248-14253']);
          _vbset.push(['_domain', 'https://prosewrite.com']);

          (function() {
            var vbt = document.createElement('script'); vbt.type = 'text/javascript'; vbt.async = true;
            vbt.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.vbt.io/tracker?_account='+_vbset[0][1]+'&_domain='+_vbset[1][1];var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vbt, s);
          })();
        `}
      </Script>
    </html>
  );
}
