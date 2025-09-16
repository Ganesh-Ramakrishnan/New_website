
import { useEffect } from 'react';

const RequestDemoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col justify-center bg-white items-center px-8 py-16 relative" style={{ background: '#ffffff !important' }}>
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-white">
            <span className="text-purple-600 ">Zero blindspots</span>, 100% visibility of your freelancers
          </h1>
          <p className="mb-8 text-lg text-black text-white">
            The fastest way to streamline your global <span className="font-semibold text-white">freelance management</span>—from hiring and onboarding to compliance, invoicing, payments, and more.
          </p>
          <div className="bg-gray-100 rounded-xl p-6 mb-4">
            <p className="text-lg mb-4 text-center text-black">Trusted by 350+ leading brands and agencies</p>
            <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
              <img src="/assets/client/technotree.png" alt="Technotree" className="h-8 filter grayscale" />
              <img src="/assets/client/Technology Mindz.png" alt="Technology Mindz" className="h-8 filter grayscale" />
              <img src="/assets/client/Svatantra.png" alt="Svatantra" className="h-8 filter grayscale" />
              <img src="/assets/client/Sunbots.png" alt="Sunbots" className="h-8 filter grayscale" />
              <img src="/assets/client/SMFG india credits.png" alt="SMFG India Credits" className="h-8 filter grayscale" />
              <img src="/assets/client/Smartx technologies.png" alt="Smartx Technologies" className="h-8 filter grayscale" />
              <img src="/assets/client/Quest alliance.png" alt="Quest Alliance" className="h-8 filter grayscale" />
              <img src="/assets/client/Piramal finance.png" alt="Piramal Finance" className="h-8 filter grayscale" />
              <img src="/assets/client/Dr reddys laboratory.png" alt="Dr Reddys Laboratory" className="h-8 filter grayscale" />
            </div>
          </div>
        </div>
        {/* Decorative SVG or background can be added here */}
      </div>
      {/* Right Side */}
      <div className="md:w-1/2 flex flex-col justify-center items-center px-8 py-16 bg_white">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-center mb-4 text-black">Schedule a call to get started</h2>
          <p className="text-center text-gray-500 mb-8">Schedule a 30 minute demo with an expert Q+A</p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="border rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500" />
              <input type="text" placeholder="Last name" className="border rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Company name" className="border rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500" />
              <input type="email" placeholder="Work email" className="border rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500" />
            </div>
            <select className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:border-purple-500">
              <option># of Freelancers</option>
              <option>1-10</option>
              <option>11-50</option>
              <option>51-200</option>
              <option>201+</option>
            </select>
            <select className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:border-purple-500">
              <option>Company Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Other</option>
            </select>
            <button type="submit" className="w-full bg-purple-500 text-white font-semibold py-3 rounded-lg mt-4 hover:bg-purple-600 transition">Book a call</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestDemoPage;
