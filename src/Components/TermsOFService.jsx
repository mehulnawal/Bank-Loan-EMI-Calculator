import { Calculator } from "lucide-react";

export default function TermsOfService() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">

            <a href="#/" className="flex items-center gap-3 group transition-all  mb-10 mx-auto w-full">
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

            <h1 className="text-2xl font-bold mb-6">Terms Of Services</h1>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
            <p>
                Welcome to rainautaim.com (“Company”, “we”, “our”, “us”)!
                These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website operated by rainautaim.com.
                Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard, and disclose information resulting from your use of our web pages.
                By using our Service, you acknowledge you have read and understood these Terms and our Privacy Policy (“Agreements”), and agree to be bound by them. If you do not agree, do not use the Service.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
            <p>
                The Service and its original content (except user content), features, and functionality are and will remain the exclusive property of rainautaim.com and its licensors. Use of our trademarks without consent is prohibited.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. No Use By Minors</h2>
            <p>
                You must be at least eighteen (18) years old to use our Service. By using the Service, you warrant you are at least 18 and have capacity to agree to these Terms.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Copyright Policy</h2>
            <p>
                We respect copyright. If you believe your work has been copied incorrectly, contact us at rainautaim.com with a detailed DMCA notice as described below.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes To Service</h2>
            <p>
                We may change or terminate Service at any time. We are not liable for any period of unavailability or restricted access.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Privacy</h2>
            <p>
                Your use of the site is governed by our Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Acknowledgement</h2>
            <p>
                By using our Service, you agree to these Terms of Service.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Information</h2>
            <p>
                Questions? Contact us at <a href="mailto:contact@rainautaim.com">contact@rainautaim.com</a>
            </p>
        </div>
    );
}
