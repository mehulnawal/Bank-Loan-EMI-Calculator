import { ThemeProvider } from '../Theme';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './Home';
import ContactPage from './Contact';
import CarLoanCalculator from './CarLoanCalculator';
import AboutPage from './About';
import Categories from './categories';
import AdPlaceholder from './AdPlaceholders';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* <AdPlaceholder> */}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/carLoan" element={<CarLoanCalculator />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/categories" element={<Categories />} />
          {/* </Route> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* </AdPlaceholder> */}
      </BrowserRouter>
    </ThemeProvider >
  );
}