import { useContext } from 'react';
import { ThemeContext } from '../Theme';
import AdPlaceholder from './AdPlaceholders';
import Footer from './Footer';

import loan from '../assets/loan.png'
import home from '../assets/home.png'
import car from '../assets/car.png'
import gst from '../assets/gst.png'
import Breadcrumb from './Breadcrumb';

export default function Categories() {
    const { theme } = useContext(ThemeContext);

    const paths = [
        { label: "Home", href: "/" },
        { label: "Categories", href: "/categories" },
    ];

    return (
        <div
            className={`${theme === 'light'
                ? 'bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900'
                : 'bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100'
                } min-h-screen flex flex-col items-center`}
        >
            <div className="max-w-3xl w-full rounded-xl mt-8 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-6 py-8 flex flex-col items-center space-y-8">

                {/* Heading */}
                <div className="w-full text-center bg-purple-100 dark:bg-purple-900 border rounded-xl py-5 mb-6">
                    <div className="text-2xl font-bold text-purple-800 dark:text-purple-300">
                        Banking Loan Calculator
                    </div>
                </div>

                <Breadcrumb paths={paths} />

                <AdPlaceholder />

                {/* Intro */}
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 text-center max-w-2xl">
                    Supercharge your financial decision-making journey with our array of free calculators,
                    tailored for loans, EMIs, and banking necessities.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 text-center max-w-2xl">
                    Our powerful banking calculator helps you make informed financial decisions—whether you're
                    saving for a goal, applying for a loan, or planning investments.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 text-center max-w-2xl">
                    Easily estimate repayments, interest earnings, and savings growth in just a few clicks.
                </p>

                <AdPlaceholder />

                {/* Features */}
                <div className="w-full space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        🔹 Features of the Banking Calculator
                    </h2>
                    <ul className="list-disc text-left text-base leading-relaxed text-gray-700 dark:text-gray-200 pl-6 space-y-2">
                        <li><b>Loan EMI Calculator</b> – Find out your monthly payments based on loan amount, interest rate, and tenure.</li>
                        <li><b>Fixed Deposit Calculator</b> – Estimate your fixed deposit returns over time, including compound interest.</li>
                        <li><b>Savings Goal Tracker</b> – Determine how much you need to save monthly to reach your target amount.</li>
                        <li><b>Interest Rate Comparison</b> – Compare different banks' interest rates to find the best deal.</li>
                        <li><b>Mortgage/Auto Loan Estimator</b> – Know your monthly cost before committing to a major purchase.</li>
                    </ul>
                </div>

                <AdPlaceholder />

                {/* Calculator Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-6">

                    {/* Personal Loan */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow flex flex-col items-center text-center">
                        <img src={loan} alt="Personal Loan" className="w-12 h-12 mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Personal Loan Calculator</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            Calculate EMI and total repayment for your personal loan easily.
                        </p>
                        <a href="/personalLoan" className="text-purple-600 font-medium hover:underline">
                            Try Now →
                        </a>
                    </div>

                    {/* Home Loan */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow flex flex-col items-center text-center">
                        <img src={home} alt="Home Loan" className="w-12 h-12 mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Home Loan Calculator</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            Estimate EMIs, interest, and total cost for your home loan.
                        </p>
                        <a href="/homeLoan" className="text-purple-600 font-medium hover:underline">
                            Try Now →
                        </a>
                    </div>

                    {/* Car Loan */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow flex flex-col items-center text-center">
                        <img src={car} alt="Car Loan" className="w-12 h-12 mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Car Loan Calculator</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            Quickly calculate EMIs and total repayment for your car loan.
                        </p>
                        <a href="/carLoan" className="text-purple-600 font-medium hover:underline">
                            Try Now →
                        </a>
                    </div>

                    {/* GST */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow flex flex-col items-center text-center">
                        <img src={gst} alt="GST Calculator" className="w-12 h-12 mb-3" />
                        <h3 className="text-xl font-semibold mb-2">GST Calculator</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            Calculate GST, net prices, and tax amounts for products or services.
                        </p>
                        <a href="/gstCalculator" className="text-purple-600 font-medium hover:underline">
                            Try Now →
                        </a>
                    </div>
                </div>


                <Footer />
            </div>
        </div>
    );
}