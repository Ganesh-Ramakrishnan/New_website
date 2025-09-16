import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // ...existing code...
  const handleFeatureClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/?scrollTo=features');
    } else {
      const el = document.getElementById('features');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <nav className={`fixed text-white top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900 shadow-lg border-b border-gray-800' 
        : 'bg-gray-900 backdrop-blur-sm'
    }`} style={{ background: '#08090a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src="/simplify_logo.svg" 
                alt="SimplifyQA" 
                className="h-5 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {/* Navigation Links */}
              <a
                href="#features"
                onClick={handleFeatureClick}
                className="font-medium transition-colors duration-200 text-gray-700 hover:text-blue-600"
              >
                Features
              </a>
              <Link
                to="/pricing"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/pricing')
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Pricing
              </Link>
              <Link
                to="/resources"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/resources')
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Resources
              </Link>
              <Link
                to="/customer-success"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/customer-success')
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Customers
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors duration-200 ${
                  isActive('/about')
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => window.open('https://app.simplifyqa.ai/login', '_blank')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Sign In
            </button>
            <Link
              to="/request-demo"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-2 pb-6 space-y-1 bg-gray-50 border-t border-gray-200 shadow-lg">
            <div className="space-y-1">
              <a
                href="#features"
                onClick={e => { handleFeatureClick(e); setIsOpen(false); }}
                className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Features
              </a>
              <Link 
                to="/pricing" 
                className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/resources" 
                className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/customer-success" 
                className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Customers
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-base text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <Link
                to="/request-demo"
                className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;