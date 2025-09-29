import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function AdPlaceholder() {
    const adRef = useRef(null);
    const location = useLocation(); // Track route changes

    useEffect(() => {
        if (adRef.current) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                console.log('Ad pushed to adsbygoogle for route', location.pathname);
            } catch (e) {
                console.error('Adsense push error:', e);
            }
        }
    }, [location]); // refresh whenever route changes

    return (
        <div className="container mx-auto px-4 py-2">
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
        </div>
    );
}