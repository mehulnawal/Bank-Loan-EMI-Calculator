import { useContext } from 'react';
import AdPlaceholder from './AdPlaceholders';
import { ThemeContext } from '../Theme';

export default function ContactPage() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'light' ? 'bg-gray-50 text-gray-900' : 'bg-gray-900 text-gray-100'} min-h-screen`}>
            <AdPlaceholder />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="max-w-xl mb-6">
                    For questions or feedback, please reach out using the information below.
                </p>
            </main>
        </div>
    );
}
