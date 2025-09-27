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

        const emiCalc = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
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

                <a href="/" className="flex items-center gap-3 group transition-all">
                    <span className="relative flex items-center">
                        <span className="rounded-full bg-white/20 p-2 shadow-lg group-hover:scale-110 transition-transform">
                            <Calculator className="w-8 h-8 text-white drop-shadow" />
                        </span>
                    </span>
                    <span className="ml-2">
                        <span className="block uppercase font-semibold text-white text-sm tracking-widest opacity-90 group-hover:tracking-[.20em] transition-all">
                            Bank Loan
                        </span>
                        <span className="block font-black text-white text-xl sm:text-2xl tracking-wider drop-shadow">
                            EMI Calculators
                        </span>
                    </span>
                </a>

                {/* Header */}
                <div className="text-2xl sm:text-3xl font-bold text-purple-800 dark:text-purple-300 text-center">
                    Personal Loan Calculator
                </div>

                <Breadcrumb paths={paths} />

                <img src={loan} alt="Personal Loan" className="my-4 w-25" />

                {/* How to Use Section */}
                <div className="w-full bg-purple-50 dark:bg-gray-800 rounded-lg p-4 text-gray-700 dark:text-gray-300">
                    <h2 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                        How To Use
                    </h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Enter Loan Amount</li>
                        <li>Enter Interest Rate</li>
                        <li>Enter Holding (in months)</li>
                        <li>After entering details, the calculator will show total interest payable and total loan cost.</li>
                    </ul>
                </div>

                <div className="w-full mt-2 p-2 rounded-lg shadow text-lg leading-relaxed ">
                    <ul className="list-disc list-inside space-y-4">
                        <li>
                            An online personal loan calculator is a valuable tool that provides numerous
                            benefits to individuals considering taking out a loan. In short, it helps
                            users quickly estimate potential loan costs, compare different loan options,
                            and make informed financial decisions.
                        </li>

                        <li>
                            In more detail, an online personal loan calculator allows users to input key
                            variables such as loan amount, interest rate, and repayment term to calculate
                            monthly payments and total interest costs.
                        </li>

                        <li>
                            This enables borrowers to assess affordability and determine a repayment plan
                            that fits their budget. Additionally, users can experiment with different
                            scenarios, adjusting loan parameters to see how changes impact repayment
                            amounts and overall costs.
                        </li>

                        <li>
                            Furthermore, an online calculator facilitates comparison shopping by allowing
                            users to evaluate multiple loan offers from different lenders simultaneously.
                        </li>

                        <li>
                            By entering the terms of various loans, borrowers can quickly identify the
                            most favorable option in terms of interest rates, fees, and repayment terms.
                        </li>

                        <li>
                            Overall, an online personal loan calculator empowers borrowers with the
                            information they need to make educated financial choices, ensuring they secure
                            a loan that aligns with their needs and financial goals while minimizing
                            unnecessary costs and risks.
                        </li>
                    </ul>
                </div>

                {/* Input Section */}
                <div className="w-full space-y-6">
                    <div className="relative">
                        <IndianRupee className="absolute top-3 left-3 w-6 h-6 text-gray-400 dark:text-gray-500" />
                        <input
                            type="number"
                            placeholder="Loan Amount"
                            value={principal}
                            onChange={e => setPrincipal(e.target.value)}
                            className={`w-full px-10 py-2 rounded border ${errors.principal ? 'border-red-500' : 'border-gray-300'
                                } dark:border-gray-600 focus:outline-none focus:ring`}
                        />
                        {errors.principal && (
                            <p className="text-red-500 text-sm mt-1">{errors.principal}</p>
                        )}
                    </div>

                    <input
                        type="number"
                        placeholder="Annual Interest Rate (%)"
                        step="0.01"
                        value={rate}
                        onChange={e => setRate(e.target.value)}
                        className={`w-full px-3 py-2 rounded border ${errors.rate ? 'border-red-500' : 'border-gray-300'
                            } dark:border-gray-600 focus:outline-none focus:ring`}
                    />
                    {errors.rate && (
                        <p className="text-red-500 text-sm mt-1">{errors.rate}</p>
                    )}

                    <input
                        type="number"
                        placeholder="Loan Tenure (Months)"
                        value={tenure}
                        onChange={e => setTenure(e.target.value)}
                        className={`w-full px-3 py-2 rounded border ${errors.tenure ? 'border-red-500' : 'border-gray-300'
                            } dark:border-gray-600 focus:outline-none focus:ring`}
                    />
                    {errors.tenure && (
                        <p className="text-red-500 text-sm mt-1">{errors.tenure}</p>
                    )}

                    <button
                        onClick={calculateEMI}
                        className="w-full bg-purple-600 hover:bg-purple-700 rounded text-white py-2 font-medium transition"
                    >
                        Calculate EMI
                    </button>

                    {emi !== null && (
                        <div className="text-center mt-4 text-lg">
                            Estimated EMI: <span className="font-bold">₹ {emi}</span>
                        </div>
                    )}
                </div>

                {/* About Section */}
                <div className="w-full mt-10 p-4 bg-purple-50 dark:bg-gray-800 rounded-lg shadow text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    <h2 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                        About Personal Loan Calculator
                    </h2>
                    <p>
                        An online personal loan calculator is a valuable tool that helps users quickly estimate potential loan costs, compare options, and make informed financial decisions.
                    </p>
                    <p className="mt-3">
                        Users can input loan amount, interest rate, and repayment term to calculate monthly payments and total interest. This enables borrowers to assess affordability and plan repayment effectively.
                    </p>
                    <p className="mt-3">
                        Additionally, the calculator facilitates comparison shopping by allowing borrowers to evaluate multiple loan offers and choose the most favorable option.
                    </p>
                    <p className="mt-3">
                        Overall, it empowers borrowers to secure a loan that aligns with their needs and goals while minimizing unnecessary costs and risks.
                    </p>
                </div>

                <Footer />
            </div>
        </div>
    );
}
