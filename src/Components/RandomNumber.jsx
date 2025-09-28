import { useState } from 'react';
import randomNumber from '../assets/randomNumber.webp';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { Calculator } from 'lucide-react';

export default function RandomNumberGenerator() {
    const paths = [
        { label: 'Home', href: '/' },
        { label: 'Every Calculator', href: '/everyday' },
        { label: 'Random Number Generator', href: '/randomNumberGenerator' },
    ];

    const [lower, setLower] = useState('');
    const [upper, setUpper] = useState('');
    const [result, setResult] = useState(null);

    const generateRandom = () => {
        const low = parseInt(lower, 10);
        const up = parseInt(upper, 10);
        if (isNaN(low) || isNaN(up)) {
            setResult('Please enter valid numbers');
            return;
        }
        if (low > up) {
            setResult('Lower limit should be less than or equal to upper limit');
            return;
        }
        const randomNum = Math.floor(Math.random() * (up - low + 1)) + low;
        setResult(randomNum);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 px-4 sm:px-6 py-10 flex flex-col items-center">
            <div className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 space-y-6">

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


                <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-300 text-center">
                    Random Number Generator
                </h1>

                <Breadcrumb paths={paths} />

                <img src={randomNumber} alt="Random Number Calculator" className="h-25 mx-auto" />

                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mt-6">
                    After entering all the details, the calculator will generate the random number within the specified range.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    RNGs offer numerous benefits across a wide range of applications. Firstly, they provide a reliable source of randomness essential for tasks requiring unpredictability, fairness, and security.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Moreover, RNGs are indispensable tools in scientific research and simulations, gaming and gambling, cryptography, software testing, and quality assurance, facilitating various computational tasks with confidence and efficiency.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Furthermore, RNGs promote efficiency and convenience by automating the generation of random numbers, saving time and resources in large-scale computing environments and simulations.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Additionally, RNGs can be customized to meet specific requirements, allowing users to tailor the randomness characteristics to their application needs, further enhancing their versatility and usefulness.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">How To Use:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Input the Upper Limit:</li>
                    <li>Input the Lower Limit:</li>
                    <li>Calculate:</li>
                </ul>

                <div className="flex flex-col space-y-4 mt-4">
                    <input
                        type="number"
                        placeholder="Lower Limit"
                        value={lower}
                        onChange={e => setLower(e.target.value)}
                        className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="number"
                        placeholder="Upper Limit"
                        value={upper}
                        onChange={e => setUpper(e.target.value)}
                        className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                        onClick={generateRandom}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
                    >
                        Generate Random Number
                    </button>
                </div>

                {result !== null && (
                    <p className="mt-4 text-center text-lg font-semibold text-purple-700 dark:text-purple-300">
                        {typeof result === 'number' ? `Random Number: ${result}` : result}
                    </p>
                )}

                <Footer />
            </div>
        </div>
    );
}
