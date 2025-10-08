
import { CheckCircle, Mail, Phone } from 'lucide-react';
import { useEffect } from 'react';
import { useScrollAnimations } from '../utils/useScrollAnimations';

const RequestDemoPage = () => {
  useScrollAnimations();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen pt-16">
      {/* Reach Us Anytime Section */}
      <section className="py-20" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-5xl font-bold text-white mb-4">
              Reach Us <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Anytime</span>
            </h2>
            <p className="text-lg text-gray-400">Have questions or need help? We're here for you</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-6 max-w-6xl mx-auto">
            {/* Left side - Contact Cards */}
            <div className="space-y-6 animate-on-scroll animate-delay-200">
              {/* Email Us Card */}
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
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="p-3 rounded-lg flex items-center justify-center" 
                      style={{ 
                        background: 'rgb(16, 19, 28)',
                        borderRadius: '8px',
                        boxShadow: 'rgba(207, 231, 255, 0.2) 0px 1px 1px 0px inset'
                      }}
                    >
                      <Mail className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Email Us</h3>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed" style={{ opacity: 0.8 }}>
                    Facing technical challenges or product concerns?<br />We're here to assist
                  </p>
                  <a 
                    href="mailto:support@simplify3x.com" 
                    className="text-white hover:text-gray-300 transition-colors"
                    target="_blank"
                    rel="noopener"
                  >
                    support@simplify3x.com
                  </a>
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

              {/* Contact Sales Card */}
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
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="p-3 rounded-lg flex items-center justify-center" 
                      style={{ 
                        background: 'rgb(16, 19, 28)',
                        borderRadius: '8px',
                        boxShadow: 'rgba(207, 231, 255, 0.2) 0px 1px 1px 0px inset'
                      }}
                    >
                      <Phone className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Contact Sales</h3>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed" style={{ opacity: 0.8 }}>
                    Let's collaborate on custom solutions or discuss<br />product insights
                  </p>
                  <a 
                    href="#" 
                    className="text-white hover:text-gray-300 transition-colors underline"
                  >
                    Book a call
                  </a>
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

            {/* Right side - Contact Form */}
            <div 
              className="rounded-2xl p-8 relative overflow-hidden animate-on-scroll animate-delay-300" 
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

                <form className="space-y-4">
                  <div className="relative w-full">
                    <label className="block text-sm mb-2" style={{ color: '#d5dbe6', cursor: 'default' }}>Full Name</label>
                    <input
                      type="text"
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
      </section>
    </div>
  );
};

export default RequestDemoPage;
