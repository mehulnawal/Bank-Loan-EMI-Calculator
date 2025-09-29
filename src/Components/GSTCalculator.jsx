import { useContext, useState } from 'react';
import { ThemeContext } from '../Theme';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import GST from '../assets/gst.png';
import { Calculator } from 'lucide-react';
import AdPlaceholder from './AdPlaceholders';

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

                {/* Logo / Header */}
                <a href="/" className="mx-auto w-full flex items-center gap-3 group transition-all">
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

                <div className="text-2xl sm:text-3xl font-bold text-purple-800 dark:text-purple-300 text-center">
                    GST Calculator
                </div>

                <Breadcrumb paths={paths} />

                <img src={GST} alt="GST Calculator" className="my-5 w-25" />

                {/* Info Section */}
                <div className="w-full mt-2 p-2 rounded-lg shadow bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    <ul className="list-disc list-inside space-y-4">
                        <li>An online GST (Goods and Services Tax) calculator helps businesses and individuals quickly calculate GST payable or refundable.</li>
                        <li>Users input taxable amount, GST rate, and transaction type to get accurate results.</li>
                        <li>It streamlines financial transactions and promotes compliance.</li>
                        <li>Automated calculations minimize errors and support better decision-making.</li>
                    </ul>
                </div>

                {/* Input Section */}
                <div className="w-full space-y-6 bg-white p-4 rounded-lg shadow">
                    <div>
                        <input
                            type="number"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className={`w-full px-3 py-2 rounded border ${errors.amount ? "border-red-500" : "border-gray-300 dark:border-gray-600"} focus:outline-none focus:ring bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
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
                            className={`w-full px-3 py-2 rounded border ${errors.rate ? "border-red-500" : "border-gray-300 dark:border-gray-600"} focus:outline-none focus:ring bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
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

                {/* About Section */}
                <div className="w-full mt-10 p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    <h2 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                        About GST
                    </h2>
                    <p>
                        Goods and Services Tax (GST) is a comprehensive indirect tax levied on the supply of goods and services across India, replacing multiple indirect taxes previously applied by the central and state governments.
                    </p>
                    <p className="mt-3">
                        GST simplifies the tax structure by subsuming various taxes into a single system, enhancing transparency and promoting ease of doing business.
                    </p>
                    <p className="mt-3">
                        This calculator helps you determine GST amount on a given price as well as the total amount payable, enabling better price and tax planning.
                    </p>
                </div>

                <Footer />
            </div>
        </div>
    );
}