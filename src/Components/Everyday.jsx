import React from "react";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import age from '../assets/age.webp'
import dates from '../assets/dates.webp'
import area from '../assets/area.webp'
import randomNumber from '../assets/randomNumber.webp'
import { Calculator } from "lucide-react";
import AdPlaceholder from "./AdPlaceholders";

export default function EverydayCalculator() {
    const paths = [
        { label: "Home", href: "/" },
        { label: "Every Calculator", href: "/everyday" },
    ];

    return (
        <div className="min-h-screen to-pink-50 bg-gradient-to-b from-gray-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 px-4 sm:px-8 py-10 flex flex-col items-center">
            <div className="w-full max-w-lg sm:max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 space-y-8">
                <a
                    href="/"
                    className="mx-auto w-full flex items-center gap-3 group transition-all"
                >
                    <span className="relative flex items-center">
                        <span className="rounded-full bg-purple-600 dark:bg-white/20 p-2 shadow-lg group-hover:scale-110 transition-transform">
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
                    Everyday Calculator
                </h1>

                <Breadcrumb paths={paths} />

                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                    Explore our diverse range of calculators, from age and date calculators to random number generators and unit converters, simplifying various everyday calculations.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                    The Other Everyday Calculators section offers a collection of practical tools designed to simplify daily tasks and quick decision-making.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                    From quick math and unit conversions to personal finance and health tracking, these calculators provide fast, accurate answers for everyday situations—all in one convenient place.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                    Whether you're planning your budget, cooking a meal, calculating your age, or converting measurements, these tools save time and reduce errors.
                </p>

                {/* Age Calculator */}
                <section>
                    <div className="flex items-start space-x-3">
                        <img src={age} alt="Age Calculator" className="h-15 w-auto" />
                        <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                            Age Calculator
                        </h2>
                    </div>

                    <p className="mt-5 text-base leading-relaxed text-gray-700 dark:text-gray-200 mb-2">
                        A tool to quickly determine a person's age based on their date of birth and the current date.
                    </p>

                    <a
                        href="/ageCalculator"
                        rel="noopener noreferrer"
                        className="inline-block text-purple-600 dark:text-purple-400 hover:underline mb-6"
                    >
                        Try Now&nbsp;&raquo;
                    </a>
                </section>

                {/* Two Date Calculator */}
                <section>
                    <div className="flex items-start space-x-3">
                        <img src={dates} alt="Two Date Calculator" className="h-15 w-auto" />
                        <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                            Two Date Calculator
                        </h2>
                    </div>

                    <p className="mt-5 text-base leading-relaxed text-gray-700 dark:text-gray-200 mb-2">
                        A tool to calculate the difference between two dates quickly.
                    </p>
                    <a
                        href="/twoDatesCalculator"
                        rel="noopener noreferrer"
                        className="inline-block text-purple-600 dark:text-purple-400 hover:underline mb-6"
                    >
                        Try Now&nbsp;&raquo;
                    </a>
                </section>

                {/* Random Number Generator */}
                <section>
                    <div className="flex items-start space-x-3">
                        <img src={randomNumber} alt="Random Number Generator" className="h-15 w-auto" />
                        <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                            Random Number Generator
                        </h2>
                    </div>

                    <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-200 mb-2">
                        Generate random numbers quickly and easily.
                    </p>
                    <a
                        href="/randomNumberCalculator"
                        rel="noopener noreferrer"
                        className="inline-block text-purple-600 dark:text-purple-400 hover:underline mb-6"
                    >
                        Try Now&nbsp;&raquo;
                    </a>
                </section>

                {/* Area Conversion */}
                <section>
                    <div className="flex items-start space-x-3">
                        <img src={area} alt="Area Conversion" className="h-15 w-auto" />
                        <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                            Area Conversion
                        </h2>
                    </div>

                    <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-200 mb-2">
                        A tool to convert between different units of area measurement, such as square meters, square feet, acres, etc.
                    </p>
                    <a
                        href="/areaCalculator"
                        rel="noopener noreferrer"
                        className="inline-block text-purple-600 dark:text-purple-400 hover:underline mb-6"
                    >
                        Try Now&nbsp;&raquo;
                    </a>
                </section>

                <section className="pt-6 border-t border-gray-300 dark:border-gray-700">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                        🔹 Features of the Banking Calculator
                    </h2>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-disc pl-6">
                        <li>✅ Wide Variety of Tools: Covers multiple categories: general math, finance, time/date, health, and daily utility.</li>
                        <li>Suitable for students, professionals, homemakers, and travelers.</li>
                        <li>🔄 Real-Time Results: Instant calculations as you type inputs.</li>
                        <li>Dynamic input/output fields for accurate results.</li>
                        <li>💡 User-Friendly Interface: Simple, clean layouts for each calculator.</li>
                        <li>Responsive design for mobile and desktop use.</li>
                        <li>🎯 Common Everyday Use Cases:
                            <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                                <li>Calculate discounts while shopping.</li>
                                <li>Split restaurant bills or tips.</li>
                                <li>Plan trips with fuel cost estimations.</li>
                                <li>Determine paint required for room renovations.</li>
                            </ul>
                        </li>
                        <li>🔒 No Data Storage or Login Required: All calculations are done locally in-browser. No personal information is stored or needed.</li>
                        <li>🧠 Educational and Practical: Great for learning math and finance basics. Provides tooltips and brief explanations for clarity.</li>
                    </ul>
                </section>

                <section className="pt-8">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">About Smart Calculator</h2>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                        At Calculator, we are dedicated to making complex calculations simple and accessible for everyone. We aim to streamline complex computations, making them accessible and user-friendly for anyone seeking quick and precise results. Your input helps us make our tools better for you.
                    </p>
                </section>

                <Footer />
            </div>
        </div>
    );
}

