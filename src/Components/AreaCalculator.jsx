import { useState } from 'react';
import age from '../assets/age.webp'; // Replace with actual area conversion image if available
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { Calculator } from 'lucide-react';

const areaUnits = {
    'Square Meters': 1,
    'Square Feet': 0.092903,
    Acres: 4046.86,
    Hectares: 10000,
};

export default function AreaConversionCalculator() {
    const paths = [
        { label: 'Home', href: '/' },
        { label: 'Every Calculator', href: '/everyday' },
        { label: 'Area Conversion Calculator', href: '/areaConversionCalculator' },
    ];

    const [number, setNumber] = useState('');
    const [fromUnit, setFromUnit] = useState('Square Meters');
    const [toUnit, setToUnit] = useState('Square Feet');
    const [converted, setConverted] = useState(null);

    const convertArea = () => {
        const num = parseFloat(number);
        if (isNaN(num)) {
            setConverted('Please enter a valid number');
            return;
        }
        // Convert input number to square meters, then to target unit
        const inSquareMeters = num * areaUnits[fromUnit];
        const result = inSquareMeters / areaUnits[toUnit];
        setConverted(result.toFixed(4));
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 px-4 sm:px-6 py-10 flex flex-col items-center">
            <div className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 space-y-6">

                {/* logo */}
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
                    Area Conversion Calculator
                </h1>

                <Breadcrumb paths={paths} />

                <img src={age} alt="Area Conversion Calculator" className="h-25 mx-auto" />

                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mt-6">
                    After entering all the details calculator will instantly convert your number from one mass to another.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    An area conversion calculator is a practical tool used to convert measurements of area between different units of measurement.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Online area conversion calculators offer numerous benefits, making them indispensable tools for professionals and enthusiasts working with measurements of area.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Firstly, these calculators provide convenience and efficiency by allowing users to swiftly convert area measurements between different units with just a few clicks.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Whether converting square meters to square feet or hectares to acres, users can obtain accurate results in a matter of seconds, saving valuable time and effort.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Moreover, these calculators offer flexibility and versatility, supporting conversion between a wide range of units of area measurement.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Whether working with metric units like square meters and hectares or imperial units like square feet and acres, users can easily convert between different measurement systems to suit their specific needs and preferences.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">How To Use:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Enter Number:</li>
                    <li>Select From:</li>
                    <li>Select To:</li>
                </ul>

                <div className="flex flex-col space-y-4 mt-4">
                    <input
                        type="number"
                        placeholder="Number"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <select
                        value={fromUnit}
                        onChange={e => setFromUnit(e.target.value)}
                        className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        {Object.keys(areaUnits).map(unit => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                    <select
                        value={toUnit}
                        onChange={e => setToUnit(e.target.value)}
                        className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        {Object.keys(areaUnits).map(unit => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={convertArea}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
                    >
                        Convert Area
                    </button>
                </div>

                {converted !== null && (
                    <p className="mt-4 text-center text-lg font-semibold text-purple-700 dark:text-purple-300">
                        {typeof converted === 'string' ? converted : `Converted Area: ${converted} ${toUnit}`}
                    </p>
                )}


                <Footer />
            </div>
        </div>
    );
}
