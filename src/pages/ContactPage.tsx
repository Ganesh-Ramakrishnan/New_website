import { CheckCircle, Mail, Phone } from 'lucide-react';
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

      <section className="py-20" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-6 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="animate-on-scroll space-y-4">
              {/* Email Card */}
              <div 
                className="rounded-2xl p-6 relative overflow-hidden" 
                style={{ 
                  background: 'rgb(4, 7, 13)',
                  border: '1px solid rgba(216, 231, 242, 0.07)',
                  borderRadius: '16px',
                  boxShadow: 'rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset'
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-start">
                    <div 
                      className="p-2 rounded-lg flex items-center justify-center mr-4" 
                      style={{ 
                        background: 'rgb(16, 19, 28)',
                        borderRadius: '8px',
                        boxShadow: 'rgba(207, 231, 255, 0.2) 0px 1px 1px 0px inset'
                      }}
                    >
                      <Mail className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-400 text-sm">support@simplifyqa.com</p>
                    </div>
                  </div>
                </div>
                <div 
                  className="absolute top-0 right-0 w-full h-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)',
                    opacity: 0.1
                  }}
                />
              </div>

              {/* Phone Card */}
              <div 
                className="rounded-2xl p-6 relative overflow-hidden" 
                style={{ 
                  background: 'rgb(4, 7, 13)',
                  border: '1px solid rgba(216, 231, 242, 0.07)',
                  borderRadius: '16px',
                  boxShadow: 'rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset'
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-start">
                    <div 
                      className="p-2 rounded-lg flex items-center justify-center mr-4" 
                      style={{ 
                        background: 'rgb(16, 19, 28)',
                        borderRadius: '8px',
                        boxShadow: 'rgba(207, 231, 255, 0.2) 0px 1px 1px 0px inset'
                      }}
                    >
                      <Phone className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                </div>
                <div 
                  className="absolute top-0 right-0 w-full h-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)',
                    opacity: 0.1
                  }}
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll animate-delay-200">
              <div 
                className="rounded-2xl p-8 relative overflow-hidden" 
                style={{ 
                  background: 'rgb(4, 7, 13)',
                  border: '1px solid rgba(216, 231, 242, 0.07)',
                  borderRadius: '16px',
                  boxShadow: 'rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset',
                  width: '100%'
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div 
                      className="p-3 rounded-lg flex items-center justify-center" 
                      style={{ 
                        background: 'rgb(16, 19, 28)',
                        borderRadius: '8px',
                        boxShadow: 'rgba(207, 231, 255, 0.2) 0px 1px 1px 0px inset'
                      }}
                    >
                      <CheckCircle className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">We'd love to help! Let us know how</h3>
                    </div>
                  </div>
                
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative w-full">
                      <label className="block text-sm mb-2" style={{ color: '#d5dbe6', cursor: 'default' }}>Full Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Ikta Sollork"
                        className="w-full focus:outline-none transition-all"
                        style={{ 
                          background: '#04070d',
                          border: '1px solid rgba(216, 231, 242, 0.07)',
                          borderRadius: '8px',
                          color: '#d5dbe6',
                          padding: '12px',
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: '1.2em',
                          letterSpacing: '0em',
                          fontFamily: 'Inter, sans-serif',
                          height: '48px',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(213, 219, 230, 0.15)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(216, 231, 242, 0.07)'}
                      />
                    </div>

                    <div className="relative w-full">
                      <label className="block text-sm mb-2" style={{ color: '#d5dbe6', cursor: 'default' }}>Business Mail</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@business-email.com"
                        className="w-full focus:outline-none transition-all"
                        style={{ 
                          background: '#04070d',
                          border: '1px solid rgba(216, 231, 242, 0.07)',
                          borderRadius: '8px',
                          color: '#d5dbe6',
                          padding: '12px',
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: '1.2em',
                          letterSpacing: '0em',
                          fontFamily: 'Inter, sans-serif',
                          height: '48px',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(213, 219, 230, 0.15)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(216, 231, 242, 0.07)'}
                      />
                    </div>

                    <div className="relative w-full">
                      <label className="block text-sm mb-2" style={{ color: '#d5dbe6', cursor: 'default' }}>Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="w-full focus:outline-none transition-all"
                        style={{ 
                          background: '#04070d',
                          border: '1px solid rgba(216, 231, 242, 0.07)',
                          borderRadius: '8px',
                          color: '#d5dbe6',
                          padding: '12px',
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: '1.2em',
                          letterSpacing: '0em',
                          fontFamily: 'Inter, sans-serif',
                          height: '48px',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(213, 219, 230, 0.15)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(216, 231, 242, 0.07)'}
                      />
                    </div>

                    <div className="relative w-full">
                      <label className="block text-sm mb-2" style={{ color: '#d5dbe6', cursor: 'default' }}>Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Give us more info.."
                        className="w-full focus:outline-none transition-all resize-none"
                        style={{ 
                          background: '#04070d',
                          border: '1px solid rgba(216, 231, 242, 0.07)',
                          borderRadius: '8px',
                          color: '#d5dbe6',
                          padding: '12px',
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: '1.2em',
                          letterSpacing: '0em',
                          fontFamily: 'Inter, sans-serif'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(213, 219, 230, 0.15)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(216, 231, 242, 0.07)'}
                      />
                    </div>

                <button
                  type="submit"
                      className="w-full font-semibold text-white transition-all hover:opacity-90 relative overflow-visible cursor-pointer flex items-center justify-center"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        willChange: 'transform',
                        padding: '14px 28px',
                        height: 'min-content'
                      }}
                    >
                      {/* Glow effect */}
                      <div 
                        className="absolute pointer-events-none overflow-hidden"
                        style={{
                          inset: '0 -1px 0 0',
                          zIndex: 0,
                          background: 'radial-gradient(25% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
                          filter: 'blur(15px)',
                          borderRadius: '8px',
                          willChange: 'transform'
                        }}
                      />
                      
                      {/* Stroke effect */}
                      <div 
                        className="absolute pointer-events-none overflow-hidden"
                        style={{
                          inset: '0 -1px 0 0',
                          zIndex: 0,
                          background: 'radial-gradient(20.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
                          borderRadius: '8px',
                          willChange: 'auto'
                        }}
                      />
                      
                      {/* Fill background */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          backgroundColor: 'rgb(0, 0, 0)',
                          borderRadius: '8px',
                          zIndex: 1
                        }}
                      />
                      
                      {/* Button text */}
                      <span className="relative" style={{ zIndex: 10 }}>Send to support@simplify3x.com</span>
                </button>
              </form>
                </div>

                {/* Gradient light effect */}
                <div 
                  className="absolute top-0 right-0 w-full h-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)',
                    opacity: 0.1
                  }}
                />
              </div>
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