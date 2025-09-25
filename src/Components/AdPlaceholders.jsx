import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../Theme';

export default function AdPlaceholder() {
    const { theme } = useContext(ThemeContext);
    const adRef = useRef(null);

    useEffect(() => {
        // Push the ad once the element exists in the DOM
        if (adRef.current) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                console.log('Ad pushed to adsbygoogle');
            } catch (e) {
                console.error('Adsense error', e);
            }
        }
    }, []);

    return (
        <div className="container mx-auto px-4 py-2">
            {/* Google AdSense */}
            <ins
                ref={adRef}
                className={`adsbygoogle block rounded select-none 
          ${theme === 'light' ? 'bg-gray-100 border border-gray-400' : 'bg-gray-800 border border-gray-600'}`}
                style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '728px', // optional max width for desktop
                    height: '90px',
                    margin: '0 auto',   // center ad
                }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXX" // ✅ replace with your publisher ID
                data-ad-slot="YYYYYYYYYY"               // ✅ replace with your ad slot ID
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>

            {/* Fallback box for development or when ad fails to load */}
            {/* <div
                className={`w-full h-20 border border-dashed rounded flex justify-center items-center select-none mt-2 ${theme === 'light' ? 'bg-gray-100 border-gray-400 text-gray-500' : 'bg-gray-800 border-gray-600 text-gray-400'}`}
            >
                Advertisement (Demo Preview)
            </div> */}
        </div>
    );
}
