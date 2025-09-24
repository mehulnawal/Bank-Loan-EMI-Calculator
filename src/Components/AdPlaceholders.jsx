import { useContext, useEffect } from 'react';
import { ThemeContext } from '../Theme';

export default function AdPlaceholder() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        console.log("Adsbygoogle before push:", window.adsbygoogle);
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            console.log("Ad pushed to adsbygoogle");
        } catch (e) {
            console.error('Adsense error', e);
        }
    }, []);


    return (
        <div className="container mx-auto px-4 py-2">

            {/* Google Test Ad */}
            <ins
                className={`adsbygoogle block text-center rounded border border-dashed select-none 
          ${theme === 'light' ? 'bg-gray-100 border-gray-400 text-gray-500' : 'bg-gray-800 border-gray-600 text-gray-400'}`}
                style={{ display: 'block', height: 90 }}
                data-ad-client="ca-pub-3940256099942544"  // ✅ Test publisher ID
                data-ad-slot="6300978111"                  // ✅ Test slot ID for banner
                data-ad-format="auto"
                data-full-width-responsive="true"
            />

            {/* Fallback if ads don't load */}
            <div
                className={`w-full h-16 border border-dashed rounded flex justify-center items-center select-none 
          ${theme === 'light' ? 'bg-gray-100 border-gray-400 text-gray-500' : 'bg-gray-800 border-gray-600 text-gray-400'}`}
                key={Math.random()}
            >
                Advertisement (Demo Preview)
            </div>
        </div>
    );
}