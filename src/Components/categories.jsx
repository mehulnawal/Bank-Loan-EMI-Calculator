import { useContext } from 'react';
import { ThemeContext } from '../Theme';
import AdPlaceholder from './AdPlaceholders';
import Footer from './Footer';

import loan from '../assets/loan.png';
import home from '../assets/home.png';
import car from '../assets/car.png';
import gst from '../assets/gst.png';
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
                    <h1 className="text-3xl font-bold text-purple-900 dark:text-purple-300">
                        Comprehensive Banking Loan Calculator Suite
                    </h1>
                    <p className="mt-2 max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                        Leverage our suite of free, precisely engineered calculators designed to help you navigate complex financial considerations with ease. From loan EMIs to tax calculations, our tools empower you to plan strategically and confidently.
                    </p>
                </div>

                <Breadcrumb paths={paths} />

                <AdPlaceholder />

                {/* Intro */}
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200  max-w-2xl">
                    Seamlessly manage your financial decisions using our versatile calculators tailored for various banking needs, including loan repayments, interest computations, and savings plans.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200  max-w-2xl">
                    Whether assessing monthly installments for a new loan or calculating GST on purchases, our intuitive calculators provide accurate, real-time results designed to simplify your financial planning process.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200  max-w-2xl">
                    Empower your budgeting and investment strategies with tools that offer precision and ease of use, supporting your goal to achieve financial clarity and success.
                </p>

                <AdPlaceholder />

                {/* Features */}
                <div className="w-full space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Key Features of Our Calculators
                    </h2>
                    <ul className="list-disc text-left text-base leading-relaxed text-gray-700 dark:text-gray-200 pl-6 space-y-2">
                        <li><strong>Loan EMI Calculator:</strong> Calculate monthly repayment amounts customized to your loan’s principal, interest rate, and tenure with precision.</li>
                        <li><strong>Fixed Deposit Calculator:</strong> Project your investment growth over time, factoring in compound interest earnings.</li>
                        <li><strong>Savings Goal Planner:</strong> Determine the monthly savings required to reach your financial objectives efficiently.</li>
                        <li><strong>Interest Rate Comparator:</strong> Quickly compare and analyze different bank interest rates to maximize your returns.</li>
                        <li><strong>Mortgage and Auto Loan Estimator:</strong> Evaluate your monthly financial obligations prior to committing to significant purchases.</li>
                    </ul>
                </div>

                <AdPlaceholder />

                {/* Calculator Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-6">

                    {/* Personal Loan */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow flex flex-col items-center text-center transition hover:shadow-lg">
                        <img src={loan} alt="Personal Loan" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                            Personal Loan Calculator
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                            Accurately compute your personal loan EMIs and total payable amount to optimize your repayment strategy and budget effectively.
                        </p>
                        <a href="/personalLoan" className="text-purple-600 font-semibold hover:underline">
                            Try Now →
                        </a>
                    </div>

                    {/* Home Loan */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow flex flex-col items-center text-center transition hover:shadow-lg">
                        <img src={home} alt="Home Loan" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                            Home Loan Calculator
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                            Evaluate different home loan options, repayment tenures, and interest rates to plan for your ideal mortgage with confidence.
                        </p>
                        <a href="/homeLoan" className="text-purple-600 font-semibold hover:underline">
                            Try Now →
                        </a>
                    </div>

                    {/* Car Loan */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow flex flex-col items-center text-center transition hover:shadow-lg">
                        <img src={car} alt="Car Loan" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                            Car Loan Calculator
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                            Compute your car loan EMIs precisely and assess total repayment to make informed choices for your vehicle financing.
                        </p>
                        <a href="/carLoan" className="text-purple-600 font-semibold hover:underline">
                            Try Now →
                        </a>
                    </div>

                    {/* GST */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow flex flex-col items-center text-center transition hover:shadow-lg">
                        <img src={gst} alt="GST Calculator" className="w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                            GST Calculator
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                            Simplify your GST-related calculations for goods and services, ensuring tax compliance while managing your finances efficiently.
                        </p>
                        <a href="/gstCalculator" className="text-purple-600 font-semibold hover:underline">
                            Try Now →
                        </a>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}

