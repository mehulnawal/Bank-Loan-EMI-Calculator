import { useState } from 'react';
import dates from '../assets/dates.webp';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { Calculator } from 'lucide-react';
import AdPlaceholder from "./AdPlaceholders";

export default function TwoDateCalculator() {
    const paths = [
        { label: 'Home', href: '/' },
        { label: 'Every Calculator', href: '/everyday' },
        { label: 'Two Dates Calculator', href: '/twoDatesCalculator' },
    ];

    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [diff, setDiff] = useState(null);

    const calculateDifference = () => {
        if (!date1 || !date2) {
            setDiff('Please select both dates');
            return;
        }
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        if (isNaN(d1) || isNaN(d2)) {
            setDiff('Invalid date(s)');
            return;
        }

        let start = d1 < d2 ? d1 : d2;
        let end = d1 > d2 ? d1 : d2;

        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        let days = end.getDate() - start.getDate();

        if (days < 0) {
            months--;
            days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        setDiff(`${years} years, ${months} months, and ${days} days`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 px-4 sm:px-6 py-10 flex flex-col items-center">
            <div className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 space-y-6">

                <a
                    href="/"
                    className="mx-auto w-full flex items-center gap-3 group transition-all"
                >
                    <span className="relative flex items-center">
                        <span className="rounded-full bg-purple-600 dark:bg-black/40 p-2 shadow-lg group-hover:scale-110 transition-transform">
                            <Calculator className="w-8 h-8 text-white dark:text-yellow-400 drop-shadow" />
                        </span>
                    </span>
                    <span className="ml-2">
                        <span className="block uppercase font-semibold text-gray-900 dark:text-gray-200 text-sm tracking-widest opacity-90 group-hover:tracking-[.20em] transition-all">
                            Bank Loan
                        </span>
                        <span className="block font-black text-gray-900 dark:text-gray-100 text-xl sm:text-2xl tracking-wider drop-shadow">
                            EMI Calculators
                        </span>
                    </span>
                </a>

                <AdPlaceholder />


                <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-300 text-center">
                    Two Date Calculator
                </h1>

                <Breadcrumb paths={paths} />

                <img src={dates} alt="Two Date Calculator" className="h-25 mx-auto" />

                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mt-6">
                    After selecting all the details and entering all details, the calculator will calculate the difference between the two dates.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Two-date calculators offer numerous benefits across various contexts, providing convenience, accuracy, and efficiency in managing time-related calculations.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    One of the primary advantages is their ability to quickly and accurately determine the duration between two dates.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Moreover, they can handle different scenarios, including accounting for leap years, adjusting for weekends or holidays, and even considering different calendar systems, ensuring precise results in diverse situations.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Additionally, two-date calculators are invaluable tools for planning and decision-making. Businesses use them to set deadlines, schedule tasks, and forecast project timelines with confidence. Individuals rely on them to organize personal events, manage finances, and track important milestones.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    By providing clear and concise results, these calculators enable users to make informed decisions and allocate their time and resources effectively.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Furthermore, the accessibility of online two-date calculators means they are available anytime, anywhere, without the need for specialized software or expertise.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">How To Use:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Enter the Date:</li>
                    <li>Calculate:</li>
                </ul>

                <div className="flex flex-col space-y-4 mt-4">
                    <input
                        type="date"
                        className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={date1}
                        onChange={e => setDate1(e.target.value)}
                        aria-label="First date"
                    />
                    <input
                        type="date"
                        className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={date2}
                        onChange={e => setDate2(e.target.value)}
                        aria-label="Second date"
                    />
                    <button
                        onClick={calculateDifference}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
                    >
                        Calculate Difference
                    </button>
                </div>

                {diff && (
                    <p className="mt-4 text-center text-lg font-semibold text-purple-700 dark:text-purple-300">
                        Difference: {diff}
                    </p>
                )}

                <Footer />
            </div>
        </div>
    );
}
