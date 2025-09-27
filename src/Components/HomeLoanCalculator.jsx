import { useContext, useState } from 'react';
import { ThemeContext } from '../Theme';
import AdPlaceholder from './AdPlaceholders';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { IndianRupee } from 'lucide-react';
import home from '../assets/home.png';

export default function HomeLoan() {
    const { theme } = useContext(ThemeContext);
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [tenure, setTenure] = useState('');
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
        <div className={`${theme === 'light' ? 'bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900' : 'bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100'} min-h-screen flex flex-col items-center px-2 sm:px-4`}>
            <div className="w-full max-w-lg sm:max-w-md rounded-xl mt-8 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center space-y-8">

                <div className="text-2xl sm:text-3xl font-bold text-purple-800 dark:text-purple-300 text-center">
                    Home Loan Calculator
                </div>

                <Breadcrumb paths={paths} />

                <img src={home} alt="Personal Loan" className="my-4 w-25" />

                {/* <AdPlaceholder /> */}

                <div className="w-full mt-2 p-2 rounded-lg shadow text-lg leading-relaxed ">
                    <ul className="list-disc list-inside space-y-4">
                        <li>
                            An online home loan calculator is a convenient tool that helps individuals estimate
                            their monthly mortgage payments and overall loan costs when purchasing a home.
                        </li>

                        <li>
                            Users can input key details such as the loan amount, interest rate, repayment tenure,
                            and down payment to get an accurate calculation of monthly installments and total interest payable.
                        </li>

                        <li>
                            The calculator enables prospective homeowners to assess affordability and choose
                            a repayment plan that fits their budget, reducing financial stress during the loan tenure.
                        </li>

                        <li>
                            Additionally, it allows users to compare multiple loan options from different lenders,
                            helping them identify the most favorable deal in terms of interest rates, fees, and repayment terms.
                        </li>

                        <li>
                            By simulating different scenarios, borrowers can understand the impact of changing
                            interest rates or loan tenure on monthly payments and total cost, facilitating better financial planning.
                        </li>

                        <li>
                            Overall, a home loan calculator empowers users with the information they need to make informed
                            decisions about home financing, ensuring they secure a loan that aligns with their long-term financial goals.
                        </li>
                    </ul>
                </div>

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

                <div className="w-full mt-10 p-4 bg-purple-50 dark:bg-gray-800 rounded-lg shadow text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    <h2 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                        About Home Loans
                    </h2>
                    <p>
                        A home loan, also known as a mortgage, is a secured loan specifically taken for purchasing, constructing, or renovating residential property. The property itself serves as collateral, making interest rates generally lower compared to unsecured loans.
                    </p>
                    <p className="mt-3">
                        Home loans usually have longer tenures, often spanning 10 to 30 years, allowing for manageable monthly installments (EMIs). Factors such as loan amount, interest rate, tenure, and your creditworthiness influence your EMI, which you can calculate using the above calculator.
                    </p>
                    <p className="mt-3">
                        Proper planning and understanding of terms like floating vs fixed interest rates, prepayment options, and penalties can help you optimize your home loan effectively.
                    </p>
                </div>


                <Footer />
            </div>
        </div>
    );
}
