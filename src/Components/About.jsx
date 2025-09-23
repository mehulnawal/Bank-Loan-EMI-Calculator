import { useContext } from 'react';
import { ThemeContext } from '../Theme';
import AdPlaceholder from './AdPlaceholders';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';

export default function AboutPage() {
    const { theme } = useContext(ThemeContext);

    const paths = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" }
    ];

    return (
        <div className={`${theme === 'light' ? 'bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900' : 'bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100'} min-h-screen flex flex-col items-center`}>

            <div className="max-w-md w-full rounded-xl mt-8 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-6 flex flex-col items-center space-y-8">

                {/* Header Section */}
                <div className="w-full text-center">
                    <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">What We Are?</h1>
                </div>

                <Breadcrumb paths={paths} />

                <AdPlaceholder />

                {/* Mission Section */}
                <div className="w-full text-center bg-purple-100 dark:bg-purple-900 border rounded-xl py-5">
                    <p className="text-base leading-relaxed text-purple-800 dark:text-purple-300 px-4">
                        At EMI Calculator, we are dedicated to making complex loan calculations simple and accessible for everyone.
                        Our mission is to provide user-friendly financial tools that empower you to make informed decisions about your loans and investments.
                    </p>
                </div>

                <div className="w-full">
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 text-center px-2">
                        At EMI Calculator Web, our mission is to provide users with easy-to-use, accurate, and efficient tools to perform loan and financial calculations.
                        We aim to streamline complex computations, making them accessible and user-friendly for anyone seeking quick and precise results.
                    </p>
                </div>

                {/* What We Offer Section */}
                <div className="w-full">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">What We Offer:</h2>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 text-center mb-6">
                        Welcome to our website, your one-stop destination for comprehensive loan calculators designed to simplify your financial planning.
                        We are dedicated to providing intuitive and efficient tools to assist you in managing and understanding crucial aspects of your financial life.
                    </p>
                </div>

                {/* Calculator Types */}
                <div className="w-full space-y-6">
                    {/* Personal Loan Calculator */}
                    <div className="w-full text-left bg-purple-100 dark:bg-purple-900 border rounded-xl py-4 px-5">
                        <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">Personal Loan Calculator:</h3>
                        <p className="text-sm text-purple-700 dark:text-purple-200">
                            Calculate your personal loan EMIs effortlessly. Whether it's for medical expenses, home renovation, or any personal need,
                            our calculator helps you plan your monthly budget and choose the best loan terms.
                        </p>
                    </div>

                    {/* Home Loan Calculator */}
                    <div className="w-full text-left bg-pink-100 dark:bg-pink-900 border rounded-xl py-4 px-5">
                        <h3 className="text-lg font-semibold text-pink-800 dark:text-pink-300 mb-2">Home Loan Calculator:</h3>
                        <p className="text-sm text-pink-700 dark:text-pink-200">
                            Planning to buy your dream home? Our home loan calculator helps you determine affordable EMIs,
                            compare different loan tenures, and understand the total interest payable for your mortgage.
                        </p>
                    </div>

                    {/* Car Loan Calculator */}
                    <div className="w-full text-left bg-blue-100 dark:bg-blue-900 border rounded-xl py-4 px-5">
                        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Car Loan Calculator:</h3>
                        <p className="text-sm text-blue-700 dark:text-blue-200">
                            Ready to drive your new car? Our car loan calculator assists you in computing EMIs for auto loans,
                            helping you choose the right loan amount and tenure that fits your budget.
                        </p>
                    </div>

                    {/* GST Calculator */}
                    <div className="w-full text-left bg-green-100 dark:bg-green-900 border rounded-xl py-4 px-5">
                        <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">GST Calculator:</h3>
                        <p className="text-sm text-green-700 dark:text-green-200">
                            Simplify your GST calculations with our comprehensive GST calculator.
                            Calculate GST amounts, determine inclusive and exclusive prices, and manage your tax computations efficiently.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="w-full text-center bg-purple-100 dark:bg-purple-900 border rounded-xl py-5">
                    <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-3">Why Choose Us?</h3>
                    <div className="text-sm text-purple-700 dark:text-purple-200 space-y-2 px-4">
                        <p><strong>Accuracy and Reliability:</strong> Our calculators provide precise results, so you can trust the numbers you receive.</p>
                        <p><strong>User-Friendly Interface:</strong> We design our tools with you in mind. They are simple to use, ensuring quick access to information.</p>
                        <p><strong>Privacy:</strong> We take your privacy seriously. Rest assured that any data you enter is kept confidential and secure.</p>
                        <p><strong>Free and Accessible:</strong> We believe access to valuable financial tools should be free, and we're committed to keeping it that way.</p>
                    </div>
                </div>

                {/* Get in Touch Section */}
                <div className="w-full">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white text-center">Get in Touch</h3>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 text-center mb-4">
                        We value your feedback and are always looking to improve our tools. If you have any questions, suggestions,
                        or just want to say hello, don't hesitate to contact us. Your input helps us make our tools better for you.
                    </p>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 text-center">
                        Thank you for choosing EMI Calculator. We're here to simplify your financial life and provide the tools you need
                        to make informed decisions. Start using our calculators today, and take control of your financial journey.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="w-full text-center">
                    <a
                        href="/categories"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg shadow transition inline-block"
                    >
                        Start Calculating Now
                    </a>
                </div>

                <Footer />

            </div>
        </div>
    );
}