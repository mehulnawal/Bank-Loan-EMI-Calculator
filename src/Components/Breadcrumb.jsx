// Breadcrumb.js
import { Link } from 'react-router-dom';

export default function Breadcrumb({ paths }) {
    return (
        <nav className="text-sm sm:text-base mb-4 w-full max-w-3xl px-2 sm:px-0">
            <ol className="list-reset flex text-gray-600 dark:text-gray-300">
                {paths.map((path, index) => (
                    <li key={index} className="flex items-center">
                        {index !== 0 && <span className="mx-2">/</span>}
                        {index !== paths.length - 1 ? (
                            <Link to={path.href} className="hover:text-purple-600 dark:hover:text-purple-400">
                                {path.label}
                            </Link>
                        ) : (
                            <span className="font-semibold text-gray-900 dark:text-white">{path.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
