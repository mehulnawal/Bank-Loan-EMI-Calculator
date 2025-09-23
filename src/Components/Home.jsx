import { useContext } from 'react';
import AdPlaceholder from './AdPlaceholders';
import { ThemeContext } from '../Theme';

export default function HomePage() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'light' ? 'bg-gray-50 text-gray-900' : 'bg-gray-900 text-gray-100'} min-h-screen`}>
            <AdPlaceholder />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Welcome to Bank Loan EMI Calculator</h1>
                <p className="max-w-xl">
                    Use our easy calculators for Personal Loan, Home Loan, Car Loan, and GST calculation. Navigate through the menu to get started.
                </p>
            </main>
        </div>
    );
}
