import { FileText, Github, Linkedin, Mail, MessageCircle, Phone, Play, Shield, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" style={{ background: '#08090a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <TestTube2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">SimplifyQA</span> */}
              <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src="/simplify_logo.svg" 
                alt="SimplifyQA" 
                className="h-4 w-auto"
              />
            </Link>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Streamline your testing workflows with our AI-powered automation platform. 
              Built for modern development teams who demand quality and speed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Play className="h-4 w-4 mr-2" />
                  Webinars
                </a>
              </li>
              <li>
                <a href="https://discord.gg/simplifyqa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Help Documents
                </a>
              </li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Blog & Guides</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/customer-success" className="text-gray-400 hover:text-white transition-colors">Customer Success</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Security Certifications */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Security & Compliance
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="bg-gray-800 rounded-lg p-3 text-center hover:bg-gray-700 transition-colors">
                <div className="text-xs font-semibold text-blue-400 mb-1">SOC 2</div>
                <div className="text-xs text-gray-400">Type II</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 text-center hover:bg-gray-700 transition-colors">
                <div className="text-xs font-semibold text-green-400 mb-1">ISO 27001</div>
                <div className="text-xs text-gray-400">Certified</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 text-center hover:bg-gray-700 transition-colors">
                <div className="text-xs font-semibold text-purple-400 mb-1">GDPR</div>
                <div className="text-xs text-gray-400">Compliant</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 text-center hover:bg-gray-700 transition-colors">
                <div className="text-xs font-semibold text-orange-400 mb-1">HIPAA</div>
                <div className="text-xs text-gray-400">Ready</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 text-center hover:bg-gray-700 transition-colors">
                <div className="text-xs font-semibold text-red-400 mb-1">PCI DSS</div>
                <div className="text-xs text-gray-400">Level 1</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 text-center hover:bg-gray-700 transition-colors">
                <div className="text-xs font-semibold text-cyan-400 mb-1">FedRAMP</div>
                <div className="text-xs text-gray-400">Authorized</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                hello@simplifyqa.com
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                © 2025 SimplifyQA. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;