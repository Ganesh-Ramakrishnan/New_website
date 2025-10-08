import { CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';

import { useEffect } from 'react';
import { useScrollAnimations } from '../utils/useScrollAnimations';

const ContactPage = () => {
  useScrollAnimations();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    message: '',
    demoRequest: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
            Get in Touch with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Our Experts</span>
          </h1>
          <p className="text-xl text-gray-600 animate-on-scroll animate-delay-200">
            Ready to transform your testing process? Let's discuss how SimplifyQA can help your team deliver quality software faster.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1 animate-on-scroll">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hello@simplifyqa.com</p>
                    <p className="text-gray-600">support@simplifyqa.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">123 Tech Boulevard<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Immediate Help?</h3>
                <p className="text-gray-600 mb-4">
                  Check our comprehensive documentation or schedule a quick call with our support team.
                </p>
                <div className="space-y-2">
                  <button className="w-full text-left text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    Browse Documentation →
                  </button>
                  <button className="w-full text-left text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    Schedule Support Call →
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-on-scroll animate-delay-200">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Request a Demo</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="john.doe@company.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="QA Manager"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your testing needs
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Describe your current testing challenges and goals..."
                  />
                </div>

                <div className="mt-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="demoRequest"
                      checked={formData.demoRequest}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      I would like to schedule a personalized demo
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Connect</h2>
            <p className="text-lg text-gray-600">Choose the method that works best for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 animate-on-scroll">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Support</h3>
              <p className="text-gray-600 mb-4">Get help from our support team via email</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                support@simplifyqa.com
              </button>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 animate-on-scroll animate-delay-200">
              <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak directly with our experts</p>
              <button className="text-green-600 hover:text-green-700 font-semibold">
                +1 (555) 123-4567
              </button>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 animate-on-scroll animate-delay-300">
              <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our team in real-time</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>

  {/* Offices section */}
  {/* <OurOffice /> */}

      {/* Trusted by Industry Leaders Section */}
      <section className="py-20" style={{ background: '#000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-400">See how SimplifyQA is helping teams worldwide deliver better software faster.</p>
          </div>

          <div className="animate-on-scroll animate-delay-200">
            <TrustedBySection />
          </div>
        </div>
      </section>
    </div>
  );
};

// Trusted By Section Component with rotating countries
const TrustedBySection = () => {
  const [activeCountry, setActiveCountry] = useState(0);

  const countries = [
    {
      name: 'Malaysia',
      flag: '/assets/map/flag_mal.svg',
      map: '/assets/map/map_mal.svg',
      address: {
        title: 'Kuala Lumpur, Malaysia',
        details: '466, Unit 6, Level 4, SetiaWalk Mall (Block K) SetiaWalk, Persiaran Wawasan Pusat Bandar Puchong (47160)',
        phone: '+603 8602 2095 (Mon - Fri)',
        email: 'info@simplify3x.com'
      }
    },
    {
      name: 'India',
      flag: '/assets/map/flag_ind.svg',
      map: '/assets/map/map_india.svg',
      address: {
        title: 'Bengaluru, India',
        details: 'BCIT, Block 1, Ground Floor Bhartiya City, RK Hegde Nagar, Bangalore',
        phone: '+91 9019407023 (Mon - Fri)',
        email: 'info@simplify3x.com'
      }
    },
    {
      name: 'USA',
      flag: '/assets/map/flag_usa.svg',
      map: '/assets/map/map_usa.svg',
      address: {
        title: 'Orlando, Florida, USA',
        details: '1317, Edgewater Dr 897, Orlando Florida (32804)',
        phone: '+1 (678) 954-3946 (Mon - Fri)',
        email: 'info@simplify3x.com'
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCountry((prev) => (prev + 1) % countries.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [countries.length]);

  const currentCountry = countries[activeCountry];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="rounded-2xl overflow-hidden relative" style={{ 
        background: '#1a1a1a',
        border: '1px solid #333',
        height: '420px'
      }}>
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] h-full">
        {/* Left side - World Map (70%) */}
        <div className="flex items-center justify-center p-8" style={{ background: '#1a1a1a' }}>
            <img 
              key={activeCountry}
              src={currentCountry.map}
              alt={`${currentCountry.name} map`}
              style={{ width: '800px', maxWidth: '100%' }}
              className="h-auto"
            />
        </div>

        {/* Vertical divider line */}
        <div className="hidden lg:block absolute left-[70%] top-0 bottom-0" style={{ 
          width: '2px',
          background: 'rgb(108 108 108)',
          borderRadius: '100%',
          height: '85%',
          margin: 'auto'
        }}></div>

        {/* Right side - Country Info and Address (30%) */}
        <div className="flex flex-col justify-center p-6 relative">
          <div key={`country-${activeCountry}`}>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                {currentCountry.name} 
                <img src={currentCountry.flag} alt={`${currentCountry.name} flag`} className="w-6 h-6 object-contain" style={{ marginBottom: '12px' }} />
              </h3>
            </div>

            {/* Office Address */}
            <div>
              <h4 className="text-2xl font-semibold text-white mb-4">{currentCountry.address.title}</h4>
              <p className="text-gray-300 text-base mb-6 leading-relaxed">{currentCountry.address.details}</p>
              <div className="space-y-2 border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-sm">{currentCountry.address.phone}</p>
                <p className="text-gray-400 text-sm">{currentCountry.address.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactPage;