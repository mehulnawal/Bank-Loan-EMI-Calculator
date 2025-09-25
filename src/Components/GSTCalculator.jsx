import { useContext, useState } from 'react';
import { ThemeContext } from '../Theme';
import AdPlaceholder from './AdPlaceholders';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';

export default function Gst() {
    const { theme } = useContext(ThemeContext);
    const [amount, setAmount] = useState('');
    const [rate, setRate] = useState('');
    const [gst, setGst] = useState(null);
    const [total, setTotal] = useState(null);
    const [errors, setErrors] = useState({});

    const paths = [
        { label: "Home", href: "/" },
        { label: "Categories", href: "/categories" },
        { label: "GST", href: "/gstCalculator" },
    ];

    const validateInputs = () => {
        const errs = {};
        if (!amount || parseFloat(amount) <= 0) {
            errs.amount = "Enter a valid positive amount";
        }
        if (!rate || parseFloat(rate) <= 0) {
            errs.rate = "Enter a valid positive GST rate";
        }
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const calculateGST = () => {
        if (!validateInputs()) {
            setGst(null);
            setTotal(null);
            return;
        }
        const amt = parseFloat(amount);
        const r = parseFloat(rate);
        const gstAmount = (amt * r) / 100;
        setGst(gstAmount.toFixed(2));
        setTotal((amt + gstAmount).toFixed(2));
    };

    return (
        <div className={`${theme === 'light' ? 'bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900' : 'bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100'} min-h-screen flex flex-col items-center px-2 sm:px-4`}>
            <div className="w-full max-w-lg sm:max-w-md rounded-xl mt-8 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center space-y-8">

                <div className="text-2xl sm:text-3xl font-bold text-purple-800 dark:text-purple-300 text-center">
                    GST Calculator
                </div>

                <Breadcrumb paths={paths} />



                <div className="w-full space-y-6">
                    <div>
                        <input
                            type="number"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className={`w-full px-3 py-2 rounded border ${errors.amount ? "border-red-500" : "border-gray-300"} dark:border-gray-600 focus:outline-none focus:ring`}
                        />
                        {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="GST Rate (%)"
                            step="0.01"
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            className={`w-full px-3 py-2 rounded border ${errors.rate ? "border-red-500" : "border-gray-300"} dark:border-gray-600 focus:outline-none focus:ring`}
                        />
                        {errors.rate && <p className="text-red-500 text-sm mt-1">{errors.rate}</p>}
                    </div>
                    <button
                        onClick={calculateGST}
                        className="w-full bg-purple-600 hover:bg-purple-700 rounded text-white py-2 font-medium transition"
                    >
                        Calculate GST
                    </button>

                    {gst !== null && total !== null && (
                        <div className="text-center mt-4 space-y-1">
                            <div>GST Amount: <span className="font-bold">{gst}</span></div>
                            <div>Total Amount: <span className="font-bold">{total}</span></div>
                        </div>
                    )}
                </div>

                <Footer />
            </div>
        </div>
    );
}
