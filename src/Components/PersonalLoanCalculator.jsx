import { useContext, useState } from 'react';
import { ThemeContext } from '../Theme';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { Calculator, IndianRupee } from 'lucide-react';
import loan from '../assets/loan.png';

export default function PersonalLoan() {
    const { theme } = useContext(ThemeContext);
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [tenure, setTenure] = useState('');
    const [emi, setEmi] = useState(null);
    const [errors, setErrors] = useState({});

    const paths = [
        { label: 'Home', href: '/' },
        { label: 'Categories', href: '/categories' },
        { label: 'Personal Loan', href: '/personalLoan' },
    ];

    const validateInputs = () => {
        const errs = {};
        if (!principal || parseFloat(principal) <= 0) {
            errs.principal = 'Enter a valid positive loan amount';
        }
        if (!rate || parseFloat(rate) <= 0) {
            errs.rate = 'Enter a valid positive interest rate';
        }
        if (!tenure || parseInt(tenure, 10) <= 0) {
            errs.tenure = 'Enter a valid positive tenure';
        }
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const calculateEMI = () => {
        if (!validateInputs()) {
            setEmi(null);
            return;
        }
        const P = parseFloat(principal);
        const R = parseFloat(rate) / 12 / 100;
        const N = parseInt(tenure, 10);

        if (R === 0) {
            setEmi((P / N).toFixed(2));
            return;
        }

        const emiCalc =
            (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        setEmi(emiCalc.toFixed(2));
    };

    return (
        <div
            className={`${theme === 'light'
                ? 'bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900'
                : 'bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100'
                } min-h-screen flex flex-col items-center px-2 sm:px-4`}
        >
            <div className="w-full max-w-2xl rounded-xl mt-8 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center space-y-8">

                {/* Logo / Header */}
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

                {/* Page Title */}
                <div className="text-2xl sm:text-3xl font-bold text-purple-800 dark:text-purple-300 text-center">
                    Personal Loan Calculator
                </div>

                {/* Breadcrumb */}
                <Breadcrumb paths={paths} />

                {/* Image */}
                <img src={loan} alt="Personal Loan" className="my-4 w-24 sm:w-28" />

                {/* How to Use Section */}
                <div className="w-full bg-purple-50 dark:bg-gray-800 rounded-lg p-4 text-gray-700 dark:text-gray-300">
                    <h2 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                        How To Use
                    </h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Enter Loan Amount</li>
                        <li>Enter Interest Rate</li>
                        <li>Enter Tenure (in months)</li>
                        <li>Calculator will show EMI, total interest & total cost</li>
                    </ul>
                </div>

                {/* Explanation Section */}
                <div className="w-full mt-2 p-2 rounded-lg shadow text-base leading-relaxed text-gray-800 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-4">
                        <li>
                            Quickly estimate potential loan costs, compare options, and make
                            informed decisions.
                        </li>
                        <li>
                            Input loan amount, interest rate, and tenure to calculate monthly
                            EMIs & total interest cost.
                        </li>
                        <li>
                            Experiment with scenarios to assess affordability and repayment
                            flexibility.
                        </li>
                        <li>
                            Compare multiple lender offers to pick the most favorable one.
                        </li>
                        <li>
                            Overall, empowers you to plan smartly while minimizing risks.
                        </li>
                    </ul>
                </div>

                {/* Input Section */}
                <div className="w-full space-y-6">
                    {/* Loan Amount */}
                    <div className="relative">
                        <IndianRupee className="absolute top-3 left-3 w-6 h-6 text-gray-400 dark:text-gray-500" />
                        <input
                            type="number"
                            placeholder="Loan Amount"
                            value={principal}
                            onChange={(e) => setPrincipal(e.target.value)}
                            className={`w-full px-10 py-2 rounded border ${errors.principal
                                ? 'border-red-500'
                                : 'border-gray-300 dark:border-gray-600'
                                } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring`}
                        />
                        {errors.principal && (
                            <p className="text-red-500 text-sm mt-1">{errors.principal}</p>
                        )}
                    </div>

                    {/* Interest Rate */}
                    <input
                        type="number"
                        placeholder="Annual Interest Rate (%)"
                        step="0.01"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className={`w-full px-3 py-2 rounded border ${errors.rate
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-600'
                            } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring`}
                    />
                    {errors.rate && (
                        <p className="text-red-500 text-sm mt-1">{errors.rate}</p>
                    )}

                    {/* Tenure */}
                    <input
                        type="number"
                        placeholder="Loan Tenure (Months)"
                        value={tenure}
                        onChange={(e) => setTenure(e.target.value)}
                        className={`w-full px-3 py-2 rounded border ${errors.tenure
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-600'
                            } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring`}
                    />
                    {errors.tenure && (
                        <p className="text-red-500 text-sm mt-1">{errors.tenure}</p>
                    )}

                    {/* Button */}
                    <button
                        onClick={calculateEMI}
                        className="w-full bg-purple-600 hover:bg-purple-700 rounded text-white py-2 font-medium transition"
                    >
                        Calculate EMI
                    </button>

                    {/* EMI Result */}
                    {emi !== null && (
                        <div className="text-center mt-4 text-lg text-gray-900 dark:text-gray-100">
                            Estimated EMI: <span className="font-bold">₹ {emi}</span>
                        </div>
                    )}
                </div>

                {/* About Section */}
                <div className="w-full mt-10 p-4 bg-purple-50 dark:bg-gray-800 rounded-lg shadow text-base leading-relaxed text-gray-800 dark:text-gray-300">
                    <h2 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                        About Personal Loan Calculator
                    </h2>
                    <p>
                        This calculator helps users quickly estimate loan costs, compare
                        options, and make smarter decisions.
                    </p>
                    <p className="mt-3">
                        Input loan amount, interest rate, and tenure to calculate EMIs &
                        interest payable. It enables effective repayment planning.
                    </p>
                    <p className="mt-3">
                        It also allows borrowers to evaluate offers from multiple lenders
                        and pick the best deal.
                    </p>
                    <p className="mt-3">
                        Overall, it empowers you to secure a loan that aligns with your
                        financial goals.
                    </p>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}
