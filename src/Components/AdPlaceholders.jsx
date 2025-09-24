import { useContext, useEffect } from 'react';
import { ThemeContext } from '../Theme';

export default function AdPlaceholder() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('Adsense error', e);
        }
    }, []);

    return (
        <div className="container mx-auto px-4 py-2">

            <ins
                className={`adsbygoogle block text-center rounded border border-dashed select-none 
          ${theme === 'light' ? 'bg-gray-100 border-gray-400 text-gray-500' : 'bg-gray-800 border-gray-600 text-gray-400'}`}
                style={{ display: 'block', height: 90 }}
                data-ad-client="ca-pub-3940256099942544"  /* Your Google AdSense publisher ID here */
                data-ad-slot="1234567890"                 /* Your Ad Slot ID here */
                data-ad-format="auto"
                data-full-width-responsive="true"
            />

            <div
                className={`w-full h-16 border border-dashed rounded flex justify-center items-center select-none 
          ${theme === 'light' ? 'bg-gray-100 border-gray-400 text-gray-500' : 'bg-gray-800 border-gray-600 text-gray-400'}`}
                key={Math.random()}
            >
                Advertisement
            </div>
        </div>
    );
}
