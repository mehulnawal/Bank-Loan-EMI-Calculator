import { useContext } from 'react';
import { ThemeContext } from '../Theme';
import AdPlaceholder from './AdPlaceholders';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';

export default function HomePage() {
    const { theme } = useContext(ThemeContext);

    const paths = [
        { label: "Home", href: "/" },
    ];

    return (
        <div className={`${theme === 'light' ? 'bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900' : 'bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100'} min-h-screen flex flex-col items-center px-2 sm:px-4`}>
            <div className="w-full max-w-lg sm:max-w-md rounded-xl mt-8 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center space-y-8">

                <div className="text-2xl sm:text-3xl font-bold text-purple-800 dark:text-purple-300 text-center">
                    Bank Loan EMI Calculator
                </div>

                <Breadcrumb paths={paths} />

                <AdPlaceholder />

                <div className="w-full text-center bg-purple-100 dark:bg-purple-900 border rounded-xl py-4 sm:py-5 px-3 sm:px-5 mb-6">
                    <div className="text-md sm:text-lg font-semibold text-purple-800 dark:text-purple-300 mb-3">
                        Explore All Bank and Loan EMI Calculators
                    </div>
                    <a
                        href="/categories"
                        className="block sm:inline-block w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 sm:px-6 py-2 rounded-lg shadow transition text-center"
                    >
                        Pick a loan category to calculate your EMI
                    </a>
                </div>

                <div className="space-y-6 text-center sm:text-left">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">What We Are?</h2>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-200">
                            At Calculator, we are dedicated to making complex calculations simple and accessible for everyone.
                            Our mission is to provide user-friendly tools that empower you to make informed decisions about your finances and personal milestones.
                            We aim to streamline complex computations, making them easy, accurate, and efficient for all users.
                            We also value your feedback—it helps us improve and serve you better.
                        </p>
                    </div>

                    <AdPlaceholder />

                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">What is a Bank Loan EMI Calculator?</h2>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-200">
                            A Bank Loan EMI Calculator is a simple and effective tool that helps you calculate your Equated Monthly Installment (EMI)
                            based on the loan amount, interest rate, and tenure. Whether it's a home loan, personal loan, car loan, or education loan,
                            this tool gives you a clear estimate of your monthly repayment.
                        </p>
                    </div>

                    <AdPlaceholder />

                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">Why Use an EMI Calculator?</h2>
                        <ul className="list-disc text-left text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-200 px-4 sm:px-6">
                            <li>Quick and Easy – Instantly compute your EMI in seconds.</li>
                            <li>Accurate – Get precise calculations based on your input.</li>
                            <li>Plan Better – Manage your finances smartly by knowing your monthly repayment.</li>
                            <li>Compare Loans – Try different combinations to find the best option.</li>
                        </ul>
                    </div>

                    <AdPlaceholder />

                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">📝 Things to Consider Before Taking a Loan</h2>
                        <ul className="list-disc text-left text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-200 px-4 sm:px-6">
                            <li>Interest rates (fixed vs floating).</li>
                            <li>Processing fees.</li>
                            <li>Prepayment/foreclosure charges.</li>
                            <li>Total interest payable.</li>
                            <li>Monthly cash flow and affordability.</li>
                        </ul>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
