import { useState, useContext } from 'react';
import { ThemeContext } from '../Theme';

export default function CarLoanCalculator() {
    const { theme } = useContext(ThemeContext);

    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [tenure, setTenure] = useState('');
    const [emi, setEmi] = useState(null);

    const calculateEMI = () => {
        if (!principal || !rate || !tenure) {
            setEmi(null);
            return;
        }
        const P = parseFloat(principal);
        const R = parseFloat(rate) / 12 / 100;
        const N = parseInt(tenure, 10);
        if (R === 0) {
            setEmi(P / N);
            return;
        }
        const emiVal = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        setEmi(emiVal.toFixed(2));
    };

    return (
        <div className={`${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-gray-100'} p-6 rounded-lg shadow max-w-md mx-auto`}>
            <h2 className="text-xl font-semibold mb-4">Car Loan Calculator</h2>
            <div className="space-y-4">
                <input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    placeholder="Loan Amount"
                    className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring"
                />
                <input
                    type="number"
                    step="0.01"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="Annual Interest Rate (%)"
                    className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring"
                />
                <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    placeholder="Loan Tenure (Months)"
                    className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring"
                />
                <button
                    onClick={calculateEMI}
                    className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
                >
                    Calculate EMI
                </button>
                {emi !== null && (
                    <div className="text-center mt-4 text-lg">
                        Estimated EMI: <span className="font-bold">{emi}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
