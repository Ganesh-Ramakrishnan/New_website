import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CustomerSuccessPage from './pages/CustomerSuccessPage';
import HomePage from './pages/HomePage';
import IntegrationsPage from './pages/IntegrationsPage';
import PricingPage from './pages/PricingPage';
import RequestDemoPage from './pages/RequestDemoPage';
import ResourcesPage from './pages/ResourcesPage';
import SolutionsPage from './pages/SolutionsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/customer-success" element={<CustomerSuccessPage />} />
            <Route path="/request-demo" element={<RequestDemoPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;