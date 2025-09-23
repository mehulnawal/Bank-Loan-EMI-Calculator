import { useContext } from 'react';
import { ThemeContext } from '../Theme';
import AdPlaceholder from './AdPlaceholders';
import Footer from './Footer';

export default function HomePage() {
    const { theme } = useContext(ThemeContext);
    return <>
        <div className={`${theme === 'light' ? 'bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900' : 'bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100'} min-h-screen flex flex-col items-center`}>

            <div className="max-w-md w-full rounded-xl mt-8 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-6 flex flex-col items-center space-y-8">
                <div className="w-full text-center bg-purple-100 dark:bg-purple-900 border rounded-xl py-5 mb-6">
                    <div className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-3">Explore All Bank and Loan EMI Calculators</div>
                    <a
                        href="#calculators"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-lg shadow transition"
                    >
                        Explore Now
                    </a>
                </div>

                <AdPlaceholder />

                <div id='calculators'>
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">Best Financial Decisions</h2>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 text-center">
                        Improve how you make financial choices by using our top-notch EMI calculators. They cover things like Personal Loans, Car Loans, and figuring out EMIs of Loans.
                    </p>
                </div>
                <div className="w-full text-center bg-purple-100 dark:bg-purple-900 border rounded-xl py-5 mt-6">
                    <div className="text-base font-medium text-purple-800 dark:text-purple-300 mb-3">Pick a loan category to calculate your EMI</div>
                    <div className="flex justify-center gap-4 mt-2">
                        <a
                            href="/carLoan"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow transition font-medium"
                        >
                            Bank Loan Calculator
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        </div>

    </>;
}