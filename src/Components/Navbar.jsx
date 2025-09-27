import { useContext } from 'react';
import { Sun, Moon, Calculator, DollarSign } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../Theme';

export default function Navbar() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <>
            <nav className="bg-[#b488e8] shadow-md">
                <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">

                </div>
            </nav>
            <Outlet />
        </>
    );
}
