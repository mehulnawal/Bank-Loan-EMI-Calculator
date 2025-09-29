import { useContext, useState } from "react";
import { ThemeContext } from "../Theme";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import { Calculator, IndianRupee } from "lucide-react";
import home from "../assets/home.png";
import AdPlaceholder from './AdPlaceholders';

export default function HomeLoan() {
    const { theme } = useContext(ThemeContext);
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [tenure, setTenure] = useState("");
    const [emi, setEmi] = useState(null);
    const [errors, setErrors] = useState({});

    const paths = [
        { label: "Home", href: "/" },
        { label: "Categories", href: "/categories" },
        { label: "Home Loan", href: "/homeLoan" },
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
        <div
            className={`${theme === "light"
                ? "bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900"
                : "bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100"
                } min-h-screen flex flex-col items-center px-2 sm:px-4`}
        >
            <div className="w-full max-w-2xl rounded-xl mt-8 shadow-lg px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center space-y-8 bg-white dark:bg-gray-900">

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

                {/* Header */}
                <div className={`text-2xl sm:text-3xl font-bold ${theme === "light" ? "text-purple-800" : "text-purple-300"} text-center`}>
                    Home Loan Calculator
                </div>

                <Breadcrumb paths={paths} />

                <img src={home} className="h-25" alt="Home Loan" />

                {/* Info Section */}
                <div className="w-full mt-2 p-2 rounded-lg shadow bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    <ul className="list-disc list-inside space-y-4">
                        <li>An online home loan calculator helps individuals estimate their monthly mortgage payments and total loan costs.</li>
                        <li>Users can input details like loan amount, interest rate, repayment tenure, and down payment to get accurate EMI results.</li>
                        <li>It helps assess affordability and choose a repayment plan that fits the budget.</li>
                        <li>You can compare multiple loan options from different lenders to find the best deal.</li>
                        <li>By simulating different scenarios, borrowers can see how changes in interest rates or tenure affect EMI and total repayment.</li>
                        <li>Overall, it empowers buyers to make informed financial decisions.</li>
                    </ul>
                </div>

                {/* Input Section */}
                <div className="w-full space-y-6 bg-white p-4 rounded-lg shadow">
                    <div className="relative">
                        <IndianRupee className="absolute top-3 left-3 w-6 h-6 text-gray-400 dark:text-gray-500" />
                        <input
                            type="number"
                            placeholder="Loan Amount"
                            value={principal}
                            onChange={(e) => setPrincipal(e.target.value)}
                            className={`w-full px-10 py-2 rounded border ${errors.principal ? "border-red-500" : "border-gray-300 dark:border-gray-600"} focus:outline-none focus:ring bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
                        />
                        {errors.principal && <p className="text-red-500 text-sm mt-1">{errors.principal}</p>}
                    </div>

                    <input
                        type="number"
                        placeholder="Annual Interest Rate (%)"
                        step="0.01"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className={`w-full px-3 py-2 rounded border ${errors.rate ? "border-red-500" : "border-gray-300 dark:border-gray-600"} focus:outline-none focus:ring bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
                    />
                    {errors.rate && <p className="text-red-500 text-sm mt-1">{errors.rate}</p>}

                    <input
                        type="number"
                        placeholder="Loan Tenure (Months)"
                        value={tenure}
                        onChange={(e) => setTenure(e.target.value)}
                        className={`w-full px-3 py-2 rounded border ${errors.tenure ? "border-red-500" : "border-gray-300 dark:border-gray-600"} focus:outline-none focus:ring bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
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

                {/* About Section */}
                <div className="w-full mt-10 p-4 rounded-lg shadow bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    <h2 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-300">
                        About Home Loans
                    </h2>
                    <p>A home loan, also known as a mortgage, is a secured loan taken for buying, constructing, or renovating property. The property itself serves as collateral.</p>
                    <p className="mt-3">Home loans usually have tenures of 10–30 years, allowing manageable EMIs. Your EMI depends on loan amount, rate, tenure, and credit profile.</p>
                    <p className="mt-3">Planning with fixed vs floating rates, prepayment, and penalty terms helps optimize your loan effectively.</p>
                </div>

                <Footer />
            </div>
        </div>
    );
}
