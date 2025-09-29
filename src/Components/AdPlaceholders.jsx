import { useEffect, useRef } from 'react';

export default function AdPlaceholder() {
    const adRef = useRef(null);

    useEffect(() => {
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
                className="adsbygoogle block select-none"
                style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '728px',
                    height: '90px',
                    margin: '0 auto',
                }}
                data-ad-client="ca-pub-6083027118282589"
                data-ad-slot="4154300839"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />

            {/* Tailwind dark/light fallback box */}
            {/* <div
                className="
                    w-full h-20 border border-dashed rounded 
                    flex justify-center items-center select-none mt-2
                    bg-gray-100 border-gray-400 text-gray-500
                    dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400
                "
            >
                Advertisement (Demo Preview)
            </div> */}
        </div>
    );
}