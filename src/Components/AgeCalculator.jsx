import { useState } from 'react';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import age from '../assets/age.webp';
import { Calculator } from 'lucide-react';

export default function AgeCalculator() {
    const paths = [
        { label: 'Home', href: '/' },
        { label: 'Every Calculator', href: '/everyday' },
        { label: 'Age Calculator', href: '/ageCalculator' },
    ];

    const [birthDate, setBirthDate] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [calculatedAge, setCalculatedAge] = useState(null);

    const calculateAge = () => {
        const now = new Date();
        const birth = new Date(+birthYear, birthMonth - 1, +birthDate);
        if (isNaN(birth)) {
            setCalculatedAge('Invalid date');
            return;
        }
        let years = now.getFullYear() - birth.getFullYear();
        let months = now.getMonth() - birth.getMonth();
        let days = now.getDate() - birth.getDate();

        if (days < 0) {
            months--;
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        setCalculatedAge(`${years} years, ${months} months, and ${days} days`);
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
                    Age Calculator
                </h1>

                <Breadcrumb paths={paths} />

                <img src={age} alt="Age Calculator" className="h-25 mx-auto" />


                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mt-6">
                    The calculator then presents the calculated age to the user, often in years, months, and days or simply in years.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Online age calculators offer several benefits due to their convenience, accuracy, and versatility. Firstly, they provide instant access to age calculation tools, eliminating the need for manual calculations and reducing the chances of errors.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Users can simply input their date of birth and, if necessary, the current date, and receive accurate age results within seconds.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Furthermore, online age calculators are accessible from any internet-enabled device, including computers, smartphones, and tablets. This accessibility ensures that individuals can conveniently determine their age anytime, anywhere, without the need for specialized software or physical calculators.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Whether for personal use, administrative purposes, or professional requirements, online age calculators offer a readily available solution. Moreover, these calculators are user-friendly and intuitive, typically featuring simple interfaces with clear instructions for inputting dates and viewing results.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Users of all ages and technical abilities can easily navigate these tools without any prior training or expertise.
                </p>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    Additionally, many online age calculators offer customization options, allowing users to choose their preferred date formats or adjust settings according to their specific needs. Another significant benefit of online age calculators is their ability to handle complex.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">How To Use:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Enter Your Birth Date :</li>
                    <li>Enter Your Birth Month :</li>
                    <li>Enter Your Birth Year:</li>
                </ul>

                <form
                    onSubmit={e => {
                        e.preventDefault();
                        calculateAge();
                    }}
                    className="space-y-4 mt-4"
                >
                    <div className="flex space-x-4">
                        <input
                            type="number"
                            min="1"
                            max="31"
                            placeholder="Date"
                            value={birthDate}
                            onChange={e => setBirthDate(e.target.value)}
                            className="flex-1 px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="number"
                            min="1"
                            max="12"
                            placeholder="Month"
                            value={birthMonth}
                            onChange={e => setBirthMonth(e.target.value)}
                            className="flex-1 px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="number"
                            min="1900"
                            max={new Date().getFullYear()}
                            placeholder="Year"
                            value={birthYear}
                            onChange={e => setBirthYear(e.target.value)}
                            className="flex-1 px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition w-full"
                    >
                        Calculate Age
                    </button>
                </form>

                {calculatedAge && (
                    <p className="mt-4 text-center text-lg font-semibold text-purple-700 dark:text-purple-300">
                        Calculated Age: {calculatedAge}
                    </p>
                )}


                <Footer />
            </div>
        </div>
    );
}
