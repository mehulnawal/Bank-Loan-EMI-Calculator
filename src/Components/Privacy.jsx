import { Calculator } from "lucide-react";

export default function PrivacyPolicy() {
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

            <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>

            <p>
                At calculator.com, accessible from calculator.com, one of our priorities is the privacy of our visitors. This Privacy Policy describes the types of information we collect and record, and how we use it.
            </p>
            <p>
                This policy applies only to online activities. For questions or more info, please contact us.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Advertising Partners Privacy Policies</h2>
            <p>
                Third-party ad networks may use technologies such as cookies and web beacons in their advertising and links on our site. We do not control these cookies.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Third Party Privacy Policies</h2>
            <p>
                Our Privacy Policy does not apply to other websites or advertisers.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. CCPA Privacy Rights</h2>
            <ul className="list-disc pl-6">
                <li>Request disclosure of personal data categories collected</li>
                <li>Request deletion of personal data</li>
                <li>Opt-out from sale of personal data</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. GDPR Data Protection Rights</h2>
            <ul className="list-disc pl-6">
                <li>Right to access, rectify, erase, restrict processing, object to processing</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Children’s Information</h2>
            <p>
                We do not knowingly collect information from children under 13. Contact us to request removal if this occurs.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to This Privacy Policy</h2>
            <p>
                We may update this at any time. Please review this page periodically.
            </p>
        </div>
    );
}
