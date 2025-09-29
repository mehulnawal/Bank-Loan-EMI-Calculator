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
import TermsOfService from './TermsOFService';
import Disclaimer from './Disclaimer';
import EverydayCalculator from './Everyday';
import AgeCalculator from './AgeCalculator';
import TwoDateCalculator from './TwoDates';
import AreaConversionCalculator from './AreaCalculator';
import RandomNumberGenerator from './RandomNumber';
import PrivacyPolicy from './Privacy';
import CookiePolicy from './Cookie';
import { Demo } from './demo';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* <AdPlaceholder> */}
        <Routes>
          {/* <Route path='/' element={<Navbar />}> */}
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/homeLoan" element={<HomeLoan />} />
          <Route path="/carLoan" element={<CarLoan />} />
          <Route path="/personalLoan" element={<PersonalLoan />} />
          <Route path="/gstCalculator" element={<Gst />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/everyday" element={<EverydayCalculator />} />
          <Route path="/ageCalculator" element={<AgeCalculator />} />
          <Route path="/twoDatesCalculator" element={<TwoDateCalculator />} />
          <Route path="/areaCalculator" element={<AreaConversionCalculator />} />
          <Route path="/randomNumberCalculator" element={<RandomNumberGenerator />} />
          {/* </Route> */}
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/cookie" element={<CookiePolicy />} />
          <Route path="/demo" element={<Demo />} />

          {/* </Route> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* </AdPlaceholder> */}
      </BrowserRouter>
    </ThemeProvider >
  );
}