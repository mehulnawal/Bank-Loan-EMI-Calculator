import { useContext } from 'react';
import { ThemeContext } from '../Theme';
import AdPlaceholder from './AdPlaceholders';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { Calculator, Home, User, Car, Percent } from 'lucide-react';

import loan from '../assets/loan.png';
import home from '../assets/home.png';
import aboutUs from '../assets/about-us.webp';
import cal2 from '../assets/cal2.png';

export default function HomePage() {
    const { theme } = useContext(ThemeContext);

    const paths = [
        { label: "Home", href: "/" },
    ];

    return (
        <div className={`${theme === 'light' ? 'bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900' : 'bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100'} min-h-screen flex flex-col items-center px-2 sm:px-4`}>

            <div className="w-full max-w-lg sm:max-w-md rounded-xl mt-8 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center space-y-8">

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



                <div className="text-2xl sm:text-3xl font-bold text-purple-800 dark:text-purple-300 text-center">
                    Comprehensive Bank Loan EMI Calculator Suite
                </div>
                <Breadcrumb paths={paths} />

                <div className="w-full text-center bg-purple-100 dark:bg-purple-900 border rounded-xl py-5 px-6 mb-8 sm:flex-row items-center justify-center gap-4">
                    <div className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-4">
                        Explore Our Extensive Suite of Loan EMI Calculators for Informed Financial Planning
                    </div>
                    <a
                        href="/categories"
                        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-lg shadow transition"
                        aria-label="Explore Loan Categories"
                    >
                        Browse Loan Categories
                    </a>
                </div>

                <div className="space-y-8 text-center sm:text-left">

                    {/* best financial */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                            Best Financial Decisions
                        </h2>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 mt-4">
                            Improve how you make financial choices by using our top-notch EMI calculators. They cover things like Personal Loans, Car Loans, and figuring out EMIs of Loans.
                        </p>
                    </section>

                    <div className="w-full text-center bg-purple-100 dark:bg-purple-900 border rounded-xl py-5 px-6 mb-8 sm:flex-row items-center justify-center gap-4">
                        <div className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-4">
                            Explore All Bank and Loan EMI Calculators
                        </div>

                        <div className='flex  items-center space-x-3'>
                            <a
                                href="/categories"
                                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-lg shadow transition"
                                aria-label="Explore Loan Categories"
                            >
                                Bank Loan Calculator
                            </a>

                            <a
                                href="/everyday"
                                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-lg shadow transition"
                                aria-label="Explore Loan Categories"
                            >
                                Everyday Calculator
                            </a>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-3xl my-3 mt-10 text-gray-900 dark:text-gray-100">
                            Banking Calculator
                        </h1>
                        <p className="text-lg mt-7 text-gray-700 dark:text-gray-300">
                            Supercharge your financial decision-making journey with our array of free
                            calculators, tailored for loans, EMIs, and banking necessities
                        </p>
                    </div>


                    {/* POPULAR EMI CALCULATORS */}
                    <div className="w-full mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                            Popular EMI Calculators
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-5 rounded-xl shadow bg-purple-50 dark:bg-gray-800 hover:shadow-lg transition flex flex-col items-center">
                                <img src={loan} alt="Personal Loan" className="w-12 h-12 mb-3" />
                                <h3 className="font-bold text-purple-700 mt-2 dark:text-purple-300 mb-1">Personal Loan</h3>
                                <p className="text-lg mt-2 text-gray-700 dark:text-gray-200">
                                    Calculate Loan EMI estimate of monthly payments and total cost of a personal loan.
                                </p>
                                <a
                                    className='mt-5 rounded-xl px-4 py-2 bg-purple-700 text-white hover:bg-purple-800 dark:bg-purple-300 dark:text-gray-900 dark:hover:bg-purple-400 transition'
                                    href="/personalLoan"
                                >
                                    Try Now
                                </a>
                            </div>

                            <div className="p-5 rounded-xl shadow bg-purple-50 dark:bg-gray-800 hover:shadow-lg transition flex flex-col items-center">
                                <img src={home} alt="Home Loan" className="w-12 h-12 mb-3" />
                                <h3 className="font-bold text-purple-700 mt-2 dark:text-purple-300 mb-1">Home Loan</h3>
                                <p className="text-lg mt-2 text-gray-700 dark:text-gray-200">
                                    Calculate Loan and EMI estimate monthly payments and total cost of a home mortgage.
                                </p>

                                <a
                                    className='mt-5 rounded-xl px-4 py-2 bg-purple-700 text-white hover:bg-purple-800 dark:bg-purple-300 dark:text-gray-900 dark:hover:bg-purple-400 transition'
                                    href="/homeLoan"
                                >
                                    Try Now
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* WHAT WE ARE */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                            What We Are?
                        </h2>

                        <img src={aboutUs} alt="Personal Loan" className="mx-auto w-40 my-3" />

                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                            At Calculator, we are dedicated to making complex calculations simple and accessible for everyone. Our mission is to provide user-friendly tools that empower you to make informed decisions about your finances and personal milestones. At Calculator Web, our mission is to provide users with easy-to-use, accurate, and efficient tools to perform a multitude of calculations. We aim to streamline complex computations, making them accessible and user-friendly for anyone seeking quick and precise results. We value your feedback and are always looking to improve our tools. Your input helps us make our tools better for you.
                        </p>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 mt-4">
                            In addition to assisting individual users, we actively collaborate with financial experts to ensure our calculators always reflect the evolving landscape of finance and banking. That's why our suite is trusted for both casual budgeting and expert analysis.
                        </p>
                    </section>

                    {/* UNDERSTANDING THE BANK LOAN EMI CALCULATOR */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                            What is a Bank Loan EMI Calculator?
                        </h2>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                            A Bank Loan EMI Calculator is a simple and effective tool that helps you calculate your Equated Monthly Installment (EMI) based on the loan amount, interest rate, and loan tenure. Whether you’re planning to take a home loan, personal loan, car loan, or education loan, this tool gives you a clear estimate of your monthly repayment amount.
                        </p>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 mt-4">
                            With instant projections and straightforward fields, you can try varied scenarios, compare interest impacts, and plan repayments ahead of time.
                        </p>
                    </section>

                    {/* WHY USE AN EMI CALCULATOR */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                            Why Use an EMI Calculator?
                        </h2>

                        <img src={cal2} alt="Personal Loan" className="mx-auto w-40 my-3" />

                        <ul className="list-disc list-inside text-base leading-relaxed text-gray-700 dark:text-gray-200 px-6 sm:px-8">
                            <li>Quick and Easy – Instantly compute your EMI in seconds.</li>
                            <li>Accurate – Get precise calculations based on your input.</li>
                            <li>Plan Better – Understand how much you need to repay every month and manage your finances smartly.</li>
                            <li>Compare Loans – Try different combinations of loan amount, tenure, and interest rate to find the best option.</li>
                        </ul>
                        <ul className="list-disc list-inside text-base leading-relaxed text-gray-700 dark:text-gray-200 px-6 sm:px-8 mt-3">
                            <li>Clear Projections – Adjust values and instantly see updated results for flexible decision-making.</li>
                            <li>Improved Budgeting – Avoid surprises by knowing your repayment schedule ahead of time.</li>
                        </ul>
                    </section>

                    {/* THINGS TO CONSIDER BEFORE TAKING A LOAN */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                            Things to Consider Before Taking a Loan
                        </h2>
                        <ul className="list-disc list-inside text-base leading-relaxed text-gray-700 dark:text-gray-200 px-6 sm:px-8">
                            <li>Interest rates (fixed vs floating).</li>
                            <li>Processing fees.</li>
                            <li>Prepayment/foreclosure charges.</li>
                            <li>Total interest payable.</li>
                            <li>Monthly cash flow and affordability.</li>
                        </ul>
                        <ul className="list-disc list-inside text-base leading-relaxed text-gray-700 dark:text-gray-200 px-6 sm:px-8 mt-3">
                            <li>Understand your lender's eligibility criteria and documentation needs in advance.</li>
                            <li>Read the agreement for hidden costs or specific conditions before signing.</li>
                        </ul>
                    </section>

                    {/* ABOUT OUR SOLUTIONS */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                            About Our Solutions
                        </h2>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                            We provide advanced and user-friendly financial tools designed to simplify the calculation of Equated Monthly Installments (EMIs) across various loan types. Our platform empowers users to make sophisticated yet accessible financial decisions through precise computations tailored to individual loan requirements.
                        </p>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 mt-4">
                            Committed to delivering accuracy, efficiency, and reliability, we continuously refine our offerings based on rigorous client feedback and evolving financial landscapes.
                        </p>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    );
}