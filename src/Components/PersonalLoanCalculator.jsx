import { useContext, useState } from 'react';
import { ThemeContext } from '../Theme';
import AdPlaceholder from './AdPlaceholders';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { IndianRupee } from 'lucide-react';

export default function PersonalLoan() {
    const { theme } = useContext(ThemeContext);
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [tenure, setTenure] = useState('');
    const [emi, setEmi] = useState(null);
    const [errors, setErrors] = useState({});

    const paths = [
        { label: "Home", href: "/" },
        { label: "Categories", href: "/categories" },
        { label: "Personal Loan", href: "/personalLoan" },
    ];

    const validateInputs = () => {
        const errs = {};
        if (!principal || parseFloat(principal) <= 0) {
            errs.principal = "Enter a valid positive loan amount";
        }
        if (!rate || parseFloat(rate) <= 0) {
            errs.rate = "Enter a valid positive interest rate";
        }
        if (!tenure || parseInt(tenure, 10) <= 0) {
            errs.tenure = "Enter a valid positive tenure";
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
        <div className={`${theme === 'light' ? 'bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900' : 'bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100'} min-h-screen flex flex-col items-center px-2 sm:px-4`}>
            <div className="w-full max-w-lg sm:max-w-md rounded-xl mt-8 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center space-y-8">

                <div className="text-2xl sm:text-3xl font-bold text-purple-800 dark:text-purple-300 text-center">
                    Personal Loan Calculator
                </div>

                <Breadcrumb paths={paths} />

                

                <div className="w-full space-y-6">
                    <div className="relative">
                        <IndianRupee className="absolute top-3 left-3 w-6 h-6 text-gray-400 dark:text-gray-500" />
                        <input
                            type="number"
                            placeholder="Loan Amount"
                            value={principal}
                            onChange={(e) => setPrincipal(e.target.value)}
                            className={`w-full px-10 py-2 rounded border ${errors.principal ? "border-red-500" : "border-gray-300"} dark:border-gray-600 focus:outline-none focus:ring`}
                        />
                        {errors.principal && <p className="text-red-500 text-sm mt-1">{errors.principal}</p>}
                    </div>

                    <input
                        type="number"
                        placeholder="Annual Interest Rate (%)"
                        step="0.01"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className={`w-full px-3 py-2 rounded border ${errors.rate ? "border-red-500" : "border-gray-300"} dark:border-gray-600 focus:outline-none focus:ring`}
                    />
                    {errors.rate && <p className="text-red-500 text-sm mt-1">{errors.rate}</p>}

                    <input
                        type="number"
                        placeholder="Loan Tenure (Months)"
                        value={tenure}
                        onChange={(e) => setTenure(e.target.value)}
                        className={`w-full px-3 py-2 rounded border ${errors.tenure ? "border-red-500" : "border-gray-300"} dark:border-gray-600 focus:outline-none focus:ring`}
                    />
                    {errors.tenure && <p className="text-red-500 text-sm mt-1">{errors.tenure}</p>}

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

                

                <Footer />
            </div>
        </div>
    );
}
