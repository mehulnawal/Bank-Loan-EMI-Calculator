import { useContext } from 'react';
import { ThemeContext } from '../Theme';
import AdPlaceholder from './AdPlaceholders';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';

import loan from '../assets/loan.png';
import home from '../assets/home.png';
import car from '../assets/car.png';
import gst from '../assets/gst.png';
import { Calculator } from 'lucide-react';

export default function Categories() {
    const { theme } = useContext(ThemeContext);

    const paths = [
        { label: 'Home', href: '/' },
        { label: 'Categories', href: '/categories' },
    ];

    return (
        <div
            className={`${theme === 'light'
                ? 'bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900'
                : 'bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100'
                } min-h-screen flex flex-col items-center`}
        >
            <div className="w-full max-w-lg sm:max-w-md rounded-xl mt-8 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-6 py-8 flex flex-col items-center space-y-8">

                {/* logo */}
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


                {/* Heading */}
                <div className="w-full text-center bg-purple-100 dark:bg-purple-900 border rounded-xl py-5 mb-6 px-3">
                    <h1 className="text-3xl font-bold text-purple-900 dark:text-purple-300">
                        Comprehensive Banking Loan Calculator Suite
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                        Leverage our suite of free, precisely engineered calculators designed to help you navigate complex financial considerations with ease. From loan EMIs to tax calculations, our tools empower you to plan strategically and confidently.
                    </p>
                </div>

                <Breadcrumb paths={paths} />

                {/* {/* <AdPlaceholder /> */}

                {/* Intro */}
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 max-w-2xl">
                    Seamlessly manage your financial decisions using our versatile calculators tailored for various banking needs, including loan repayments, interest computations, and savings plans.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 max-w-2xl">
                    Whether assessing monthly installments for a new loan or calculating GST on purchases, our intuitive calculators provide accurate, real-time results designed to simplify your financial planning process.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 max-w-2xl">
                    Empower your budgeting and investment strategies with tools that offer precision and ease of use, supporting your goal to achieve financial clarity and success.
                </p>

                {/* Calculator Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-6">

                    {/* Personal Loan */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow flex flex-col items-center text-center transition hover:shadow-xl hover:scale-[1.02]">
                        <img src={loan} alt="Personal Loan" className="w-16 h-16 mb-4 drop-shadow" />
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                            Personal Loan Calculator
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            Accurately compute your personal loan EMIs and total payable amount to optimize your repayment strategy and budget effectively.
                        </p>
                        <a href="/personalLoan" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                            Try Now →
                        </a>
                    </div>

                    {/* Home Loan */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow flex flex-col items-center text-center transition hover:shadow-xl hover:scale-[1.02]">
                        <img src={home} alt="Home Loan" className="w-16 h-16 mb-4 drop-shadow" />
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                            Home Loan Calculator
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            Evaluate different home loan options, repayment tenures, and interest rates to plan for your ideal mortgage with confidence.
                        </p>
                        <a href="/homeLoan" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                            Try Now →
                        </a>
                    </div>

                    {/* Car Loan */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow flex flex-col items-center text-center transition hover:shadow-xl hover:scale-[1.02]">
                        <img src={car} alt="Car Loan" className="w-16 h-16 mb-4 drop-shadow" />
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                            Car Loan Calculator
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            Compute your car loan EMIs precisely and assess total repayment to make informed choices for your vehicle financing.
                        </p>
                        <a href="/carLoan" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                            Try Now →
                        </a>
                    </div>

                    {/* GST */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow flex flex-col items-center text-center transition hover:shadow-xl hover:scale-[1.02]">
                        <img src={gst} alt="GST Calculator" className="w-16 h-16 mb-4 drop-shadow" />
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                            GST Calculator
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            Simplify your GST-related calculations for goods and services, ensuring tax compliance while managing your finances efficiently.
                        </p>
                        <a href="/gstCalculator" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                            Try Now →
                        </a>
                    </div>

                </div>


                {/* <AdPlaceholder /> */}

                {/* Features of the Banking Calculator */}
                <div className="w-full space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        🔹 Features of the Banking Calculator
                    </h2>
                    <ul className="list-disc text-left text-base leading-relaxed text-gray-700 dark:text-gray-200 pl-6 space-y-2">
                        <li><strong>Loan EMI Calculator:</strong> Find out your monthly payments based on the loan amount, interest rate, and tenure.</li>
                        <li><strong>Fixed Deposit Calculator:</strong> Estimate your fixed deposit returns over time, including compound interest.</li>
                        <li><strong>Savings Goal Tracker:</strong> Determine how much you need to save monthly to reach your target amount.</li>
                        <li><strong>Interest Rate Comparison:</strong> Compare different banks' interest rates to find the best deal.</li>
                        <li><strong>Mortgage/Auto Loan Estimator:</strong> Know your monthly cost before committing to a major purchase.</li>
                    </ul>
                </div>

                {/* About Smart Calculator */}
                <div className="w-full space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        About Smart Calculator
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 max-w-2xl">
                        At Calculator, we are dedicated to making complex calculations simple and accessible for everyone. We aim to streamline complex computations, making them accessible and user-friendly for anyone seeking quick and precise results. Your input helps us make our tools better for you.
                    </p>
                </div>

                <Footer />
            </div>
        </div>
    );
}