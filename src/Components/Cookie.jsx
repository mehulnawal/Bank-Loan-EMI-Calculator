import { Calculator } from "lucide-react";

export default function CookiePolicy() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">

            <a href="/" className="flex items-center gap-3 group transition-all  mb-10 mx-auto w-full">
                <span className="relative flex items-center">
                    <span className="rounded-full bg-white/20 p-2 shadow-lg group-hover:scale-110 transition-transform">
                        <Calculator className="w-8 h-8 text-white drop-shadow" />
                    </span>
                </span>
                <span className="ml-2">
                    <span className="block uppercase font-semibold text-white text-sm tracking-widest opacity-90 group-hover:tracking-[.20em] transition-all">
                        Bank Loan
                    </span>
                    <span className="block font-black text-white text-xl sm:text-2xl tracking-wider drop-shadow">
                        EMI Calculators
                    </span>
                </span>
            </a>

            <h1 className="text-2xl font-bold mb-6">Cookie Policy</h1>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
            <p>
                This Cookie Policy explains how rainautaim.com uses cookies and similar technologies. By using our site, you agree to this Cookie Policy.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. What Are Cookies?</h2>
            <p>
                Cookies are small files stored on your device to help us recognize your device and improve your experience.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6">
                <li>Essential Cookies</li>
                <li>Performance Cookies</li>
                <li>Advertising and Targeting Cookies</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Why We Use Cookies</h2>
            <ul className="list-disc pl-6">
                <li>Ensure proper website functionality</li>
                <li>Enhance browsing experience</li>
                <li>Gather analytics data</li>
                <li>Personalize content and ads</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. How to Manage Cookies</h2>
            <p>
                You can control or disable cookies via your browser settings.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Third-Party Cookies</h2>
            <p>
                We may use third-party services like Google Analytics or social media platforms which set cookies on your device.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Information</h2>
            <p>
                Contact us at <a href="mailto:contact@rainautaim.com">contact@rainautaim.com</a>
            </p>
        </div>
    );
}
