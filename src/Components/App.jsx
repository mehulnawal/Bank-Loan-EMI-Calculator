import { ThemeProvider } from '../Theme';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './Home';
import ContactPage from './Contact';
import CarLoanCalculator from './CarLoanCalculator';
import AboutPage from './About';
import Categories from './categories';
import AdPlaceholder from './AdPlaceholders';
import PersonalLoan from './PersonalLoanCalculator';
import HomeLoan from './HomeLoanCalculator';
import CarLoan from './CarLoanCalculator';
import Gst from './GSTCalculator';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* <AdPlaceholder> */}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/homeLoan" element={<HomeLoan />} />
          <Route path="/carLoan" element={<CarLoan />} />
          <Route path="/personalLoan" element={<PersonalLoan />} />
          <Route path="/gstCalculator" element={<Gst />} />
          {/* </Route> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* </AdPlaceholder> */}
      </BrowserRouter>
    </ThemeProvider >
  );
}