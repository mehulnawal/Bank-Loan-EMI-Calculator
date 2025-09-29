import { Calculator } from 'lucide-react';
import AdPlaceholder from './AdPlaceholders';
import Breadcrumb from './Breadcrumb';

export function Demo() {

    const paths = [
        { label: "Home", href: "#/" },
        { label: "Demo", href: "/demo" },
    ];

    return (
        <>

            {/* ===== Empty Parent Placeholder ===== */}
            <div
                className="w-full max-w-lg sm:max-w-md rounded-xl mt-8 shadow-lg 
             bg-white dark:bg-gray-900 
             border border-gray-200 dark:border-gray-700 
             px-4 sm:px-6 py-6 sm:py-8 
             flex flex-col items-center 
             text-gray-900 dark:text-gray-100 mx-auto min-h-screen max-h-fit"
            >

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

                {/* Ad placeholder */}
                {/* <AdPlaceholder /> */}

                <Breadcrumb paths={paths} />

                {/* ===== Inner Content Div (Client can add content here later) ===== */}
                <div className="w-full space-y-4 text-center">
                    Demo Text
                    {/* 🔹 Add text, images, or components here in the future */}
                </div>
            </div>


        </>
    )
}