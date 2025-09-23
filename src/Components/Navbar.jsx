import { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../Theme';

export default function Navbar() {
    const { theme, setTheme } = useContext(ThemeContext);

    const linkClass = `${theme === 'light' ? 'text-gray-700 hover:text-blue-600' : 'text-gray-300 hover:text-blue-400'} transition`;

    return (
        <>
            <nav className={`bg-white ${theme === 'light' ? '' : 'dark:bg-gray-900'} shadow-md`}>
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <a href="/" className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-xl font-semibold`}>
                        Bank Loan EMI Calculator
                    </a>

                    <div className="flex items-center space-x-6">
                        <a href="/" className={linkClass}>
                            Home
                        </a>
                        <a href="/contact" className={linkClass}>
                            Contact
                        </a>

                        <button
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                            className={`${theme === 'light' ? '' : 'hover:bg-gray-700'} p-2 rounded-full hover:bg-gray-200 transition`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon className="w-5 h-5 text-gray-700" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                        </button>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}
