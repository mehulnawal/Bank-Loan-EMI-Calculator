import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../Theme';

export default function AdPlaceholder() {
    const { theme } = useContext(ThemeContext);
    const adRef = useRef(null);

    useEffect(() => {
        // Delay to ensure the ad container is in the DOM
        const timeout = setTimeout(() => {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                console.log('Ad pushed to adsbygoogle');
            } catch (e) {
                console.error('Adsense error', e);
            }
        }, 500); // 0.5s delay

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="container mx-auto px-4 py-2">
            {/* Google Test Ad */}
            <ins
                ref={adRef}
                className={`adsbygoogle block rounded border border-dashed select-none 
          ${theme === 'light' ? 'bg-gray-100 border-gray-400 text-gray-500' : 'bg-gray-800 border-gray-600 text-gray-400'}`}
                style={{ display: 'block', width: '100%', height: '90px' }}
                data-ad-client="ca-pub-3940256099942544" // ✅ Test publisher ID
                data-ad-slot="6300978111"               // ✅ Test slot ID for banner
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>

            {/* Fallback if ads don't load */}
            <div
                className={`w-full h-20 border border-dashed rounded flex justify-center items-center select-none mt-2
          ${theme === 'light' ? 'bg-gray-100 border-gray-400 text-gray-500' : 'bg-gray-800 border-gray-600 text-gray-400'}`}
            >
                Advertisement (Demo Preview)
            </div>
        </div>
    );
}
