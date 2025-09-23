import { useState, useContext } from 'react';
import { ThemeContext } from '../Theme';

export default function GstCalculator() {
    const { theme } = useContext(ThemeContext);

    const [amount, setAmount] = useState('');
    const [rate, setRate] = useState('');
    const [gstAmount, setGstAmount] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);

    // GST = (Amount * Rate) / 100
    // Total = Amount + GST

    const calculateGST = () => {
        if (!amount || !rate) {
            setGstAmount(null);
            setTotalAmount(null);
            return;
        }
        const amt = parseFloat(amount);
        const r = parseFloat(rate);
        const gst = (amt * r) / 100;
        setGstAmount(gst.toFixed(2));
        setTotalAmount((amt + gst).toFixed(2));
    };

    return (
        <div className={`${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-gray-100'} p-6 rounded-lg shadow max-w-md mx-auto`}>
            <h2 className="text-xl font-semibold mb-4">GST Calculator</h2>
            <div className="space-y-4">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Original Amount"
                    className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring"
                />
                <input
                    type="number"
                    step="0.01"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="GST Rate (%)"
                    className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring"
                />
                <button
                    onClick={calculateGST}
                    className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
                >
                    Calculate GST
                </button>
                {gstAmount !== null && totalAmount !== null && (
                    <div className="text-center mt-4">
                        <div>GST Amount: <span className="font-bold">{gstAmount}</span></div>
                        <div>Total Amount: <span className="font-bold">{totalAmount}</span></div>
                    </div>
                )}
            </div>
        </div>
    );
}
