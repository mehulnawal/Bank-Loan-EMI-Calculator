import { useContext } from 'react';
import { ThemeContext } from '../Theme';

export default function AdPlaceholder() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="container mx-auto px-4 py-2">
            <div
                className={`w-full h-16 border border-dashed rounded flex justify-center items-center select-none 
          ${theme === 'light' ? 'bg-gray-100 border-gray-400 text-gray-500' : 'bg-gray-800 border-gray-600 text-gray-400'}`}
                key={Math.random()} // to force React re-render for ad refresh on reload
            >
                Advertisement
            </div>
        </div>
    );
}
