import { useContext } from 'react';
import { ThemeContext } from '../Theme';
import AdPlaceholder from './AdPlaceholders';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { User, Home, Car, Percent, MessageCircle, Calculator } from 'lucide-react';
import aboutUs from '../assets/about-us.webp';

export default function AboutPage() {
    const { theme } = useContext(ThemeContext);

    const paths = [
        { label: "Home", href: "#/" },
        { label: "About", href: "/about" }
    ];

    const calculatorTypes = [
        {
            icon: User,
            title: "Personal Loan Calculator",
            colorLight: "text-purple-700",
            colorDark: "dark:text-purple-300",
            bgLight: "bg-purple-100",
            bgDark: "dark:bg-purple-900",
            description:
                "Effortlessly calculate your personal loan EMIs, whether for medical needs, home improvements, or other personal expenditures. Our tool helps you determine the best loan terms to suit your budget and repayment capacity.",
        },
        {
            icon: Home,
            title: "Home Loan Calculator",
            colorLight: "text-pink-800",
            colorDark: "dark:text-pink-300",
            bgLight: "bg-pink-100",
            bgDark: "dark:bg-pink-900",
            description:
                "Plan your path to homeownership with our detailed home loan calculator. Analyze different tenures, interest rates, and monthly EMIs to make informed decisions for your mortgage financing.",
        },
        {
            icon: Car,
            title: "Car Loan Calculator",
            colorLight: "text-blue-800",
            colorDark: "dark:text-blue-300",
            bgLight: "bg-blue-100",
            bgDark: "dark:bg-blue-900",
            description:
                "Drive your dreams with confidence. Our car loan calculator provides precise EMI estimates, supporting you to select the ideal car loan amount and repayment schedule.",
        },
        {
            icon: Percent,
            title: "GST Calculator",
            colorLight: "text-green-800",
            colorDark: "dark:text-green-300",
            bgLight: "bg-green-100",
            bgDark: "dark:bg-green-900",
            description:
                "Navigate GST complexities with ease. Calculate GST amounts, ascertain inclusive and exclusive prices, and ensure compliance with our comprehensive GST calculator.",
        },
    ];

    return (
        <div className={`${theme === 'light' ? 'bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900' : 'bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100'} min-h-screen flex flex-col items-center`}>

            <div className="max-w-md w-full rounded-xl mt-8 shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-6 py-8 flex flex-col items-center space-y-10">

                {/* logo */}
                <a
                    href="#/"
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

                <AdPlaceholder />


                {/* Header Section */}
                <div className="w-full text-center">
                    <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
                        Who We Are
                    </h1>
                </div>

                <img src={aboutUs} alt="Personal Loan" className="mx-auto w-40" />


                <Breadcrumb paths={paths} />

                {/* Mission Statement */}
                <div className="w-full text-center bg-purple-100 dark:bg-purple-900 border rounded-xl py-6 px-6">
                    <p className="text-lg leading-relaxed text-purple-800 dark:text-purple-300">
                        At EMI Calculator, we are committed to transforming complex financial calculations into seamless and accessible experiences. Our suite of calculators empowers users to make informed, confident decisions regarding their loans and investments with precision and ease.
                    </p>
                </div>

                {/* {/* <AdPlaceholder /> */}

                <div className="w-full px-1">
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 text-center">
                        Dedicated to innovation and accuracy, our tools cater to a broad spectrum of financial needs, simplifying computations and enhancing financial literacy for individuals and professionals alike.
                    </p>
                </div>

                {/* What We Offer */}
                <div className="w-full">
                    <h2 className="text-3xl font-bold mb-5 text-gray-900 dark:text-white text-center">
                        Our Offerings
                    </h2>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 text-center mb-8">
                        Explore a comprehensive selection of loan calculators designed to facilitate your financial planning process. Our easy-to-use tools deliver accurate EMI calculations, tax estimations, and more — helping you manage your finances with confidence and control.
                    </p>
                </div>

                <div className="w-full space-y-8">
                    {calculatorTypes.map(
                        ({ icon: Icon, title, colorLight, colorDark, bgLight, bgDark, description }) => (
                            <div
                                key={title}
                                className={`w-full text-left border rounded-xl py-6 px-6 flex flex-col sm:flex-row sm:items-center gap-6 ${bgLight} ${bgDark}`}
                            >
                                <div>
                                    <div className="flex items-center gap-4 sm:mb-0">
                                        <Icon className={`w-7 h-7 ${colorLight} ${colorDark}`} />
                                        <h3 className={`text-2xl font-semibold ${colorLight} ${colorDark}`}>
                                            {title}
                                        </h3>
                                    </div>
                                    <p className={`text-sm mt-4 leading-relaxed max-w-xl ${colorLight} ${colorDark}`}>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>

                {/* Why Choose Us? */}
                <div className="w-full text-center bg-purple-100 dark:bg-purple-900 border rounded-xl py-6 px-6">
                    <h3 className="text-2xl font-semibold text-purple-800 dark:text-purple-300 mb-4">Why Choose EMI Calculator?</h3>
                    <div className="text-sm text-purple-700 dark:text-purple-200 space-y-3 max-w-lg mx-auto">
                        <p><strong>Unmatched Accuracy:</strong> We provide reliable and precise calculations, empowering you to trust the results entirely.</p>
                        <p><strong>Intuitive Design:</strong> Our calculators feature clean interfaces and are easy to use, ensuring efficient interaction.</p>
                        <p><strong>Your Privacy:</strong> All data you input remains confidential; security is of utmost importance to us.</p>
                        <p><strong>Access for All:</strong> Enjoy uninterrupted access to our free tools designed for users of all backgrounds.</p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="w-full text-center">
                    <a
                        href="#/categories"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-10 py-4 rounded-lg shadow transition inline-block text-lg"
                        aria-label="Start using EMI calculators"
                    >
                        Start Calculating Now
                    </a>
                </div>

                <Footer />

            </div>
        </div>
    );
}
