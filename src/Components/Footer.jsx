import { useContext } from 'react';
import { Facebook, Twitter, Instagram, Mail, Youtube } from 'lucide-react';
import { ThemeContext } from '../Theme';

export default function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <footer className={`${theme === 'light' ? 'bg-white text-gray-700' : 'bg-gray-900 text-gray-300'} border-t border-gray-200 dark:border-gray-700 py-8 px-6`}>
            <div className="max-w-4xl mx-auto">

                {/* Main Footer Text */}
                <div className="w-full text-center mb-8">
                    <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                        Thank you for choosing Our Website. We're here to simplify your life and
                        provide the tools you need to make informed decisions. Start using our calculators today, and
                        take control of your financial and personal journey.
                    </p>
                </div>

                {/* Divider Line */}
                <div className={`border-t ${theme === 'light' ? 'border-gray-200' : 'border-gray-600'} mb-8`}></div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:text-left">

                    {/* Information Section */}
                    <div>
                        <h3 className={`font-semibold text-lg mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
                            Information
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-gray-200'} transition-colors text-lg`}
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/aboutUs"
                                    className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-gray-200'} transition-colors text-lg`}
                                >
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Terms And Policy Section */}
                    <div>
                        <h3 className={`font-semibold text-lg mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
                            Terms And Policy
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/terms-of-service"
                                    className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-gray-200'} transition-colors text-sm`}
                                >
                                    Terms Of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/privacy-policy"
                                    className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-gray-200'} transition-colors text-sm`}
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/cookie-policy"
                                    className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-gray-200'} transition-colors text-sm`}
                                >
                                    Cookie Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/disclaimer"
                                    className={`${theme === 'light' ? 'text-gray-600 hover:text-gray-800' : 'text-gray-400 hover:text-gray-200'} transition-colors text-sm`}
                                >
                                    Disclaimer
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
}