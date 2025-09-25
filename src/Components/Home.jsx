import { useContext } from 'react';
import { ThemeContext } from '../Theme';
import AdPlaceholder from './AdPlaceholders';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { Calculator, Home, User, Car, Percent } from 'lucide-react';

import loan from '../assets/loan.png'
import home from '../assets/home.png'
import car from '../assets/car.png'
import gst from '../assets/gst.png'

export default function HomePage() {
    const { theme } = useContext(ThemeContext);

    const paths = [
        { label: "Home", href: "/" },
    ];

    return (
        <div className={`${theme === 'light' ? 'bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900' : 'bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100'} min-h-screen flex flex-col items-center px-2 sm:px-4`}>
            <div className="w-full max-w-lg sm:max-w-md rounded-xl mt-8 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center space-y-8">

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

                {/* {/* <AdPlaceholder /> */} */

                <div className="space-y-8 text-center sm:text-left">
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

                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                            Understanding the Bank Loan EMI Calculator
                        </h2>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                            Our calculators provide straightforward, instant evaluations of your monthly loan repayments based on key inputs such as principal amount, interest rate, and tenure. Applicable for personal, home, car, and GST-related loans, these tools facilitate precise budgeting and effective financial management.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                            Benefits of Utilizing Our EMI Calculators
                        </h2>
                        <ul className="list-disc list-inside text-base leading-relaxed text-gray-700 dark:text-gray-200 px-6 sm:px-8">
                            <li>Real-Time Calculation: Receive immediate and accurate EMI estimates suited to your specific loan parameters.</li>
                            <li>Enhanced Financial Planning: Assess affordability and cash flow with precise monthly repayment figures.</li>
                            <li>Scenario Comparison: Experiment with loan terms and rates to select the optimal borrowing solution.</li>
                            <li>User-Centric Design: Enjoy a streamlined experience across devices ensuring ease of use for all users.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                            Essential Considerations Prior to Loan Commitment
                        </h2>
                        <ul className="list-disc list-inside text-base leading-relaxed text-gray-700 dark:text-gray-200 px-6 sm:px-8">
                            <li>Compare Fixed and Floating Interest Rates to identify the most stable and cost-effective option.</li>
                            <li>Evaluate Processing and Other Ancillary Fees impacting the total loan cost.</li>
                            <li>Clarify Prepayment or Foreclosure Charges for optimal repayment strategies.</li>
                            <li>Calculate Total Interest Outflow over the lifecycle of the loan.</li>
                            <li>Assure Monthly Repayment Affordability aligned with your budget and cash flow.</li>
                        </ul>
                    </section>
                </div>

                {/* Popular EMI Calculators with updated categories and icons */}
                <div className="w-full mt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        Popular EMI Calculators
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* personal loan */}
                        <div href="/categories/personalLoan" className="p-5 rounded-xl shadow bg-purple-50 dark:bg-gray-800 hover:shadow-lg transition flex flex-col items-center">
                            <img src={loan} alt="Personal Loan" className="w-12 h-12 mb-3" />
                            <h3 className="font-bold text-purple-700 mt-2 dark:text-purple-300 mb-1">Personal Loan</h3>
                            <p className="text-lg mt-2 text-gray-700 dark:text-gray-200">
                                Precisely calculate monthly instalments for personal loans, assisting you in budgeting and timely repayments.
                            </p>
                        </div>

                        {/* home loan */}
                        <div href="/categories/homeLoan" className="p-5 rounded-xl shadow bg-purple-50 dark:bg-gray-800 hover:shadow-lg transition flex flex-col items-center ">
                            <img src={home} alt="Personal Loan" className="w-12 h-12 mb-3" />
                            <h3 className="font-bold text-purple-700 mt-2 dark:text-purple-300 mb-1">Home Loan</h3>
                            <p className="text-lg mt-2 text-gray-700 dark:text-gray-200">
                                Plan your home financing effectively by accurately projecting your monthly EMIs.
                            </p>
                        </div>

                        {/* gst */}
                        <div href="/categories/gstCalculator" className="p-5 rounded-xl shadow bg-purple-50 dark:bg-gray-800 hover:shadow-lg transition flex flex-col items-center">
                            <img src={gst} alt="Personal Loan" className="w-12 h-12 mb-3" />
                            <h3 className="font-bold text-purple-700 mt-2 dark:text-purple-300 mb-1">GST Calculator</h3>
                            <p className="text-lg mt-2 text-gray-700 dark:text-gray-200">
                                Quickly determine GST amounts and total pricing to comply with tax regulations and manage costs.
                            </p>
                        </div>

                        {/* car loan */}
                        <div href="/categories/carLoan" className="p-5 rounded-xl shadow bg-purple-50 dark:bg-gray-800 hover:shadow-lg transition flex flex-col items-center">
                            <img src={car} alt="Personal Loan" className="w-12 h-12 mb-3" />
                            <h3 className="font-bold text-purple-700 mt-2 dark:text-purple-300 mb-1">Car Loan</h3>
                            <p className="text-lg mt-2 text-gray-700 dark:text-gray-200">
                                Evaluate vehicle loan EMIs to make informed decisions when purchasing your next car.
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
