import React, { useState } from 'react';
import { X, Calendar, Users, CheckCircle, ArrowRight, Building, Mail, Phone } from 'lucide-react';

interface DemoRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoRequestForm: React.FC<DemoRequestFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    teamSize: '',
    currentTools: '',
    challenges: '',
    timeframe: '',
    preferredDate: '',
    preferredTime: '',
    additionalInfo: '',
    marketingConsent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    setIsSubmitted(true);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const teamSizes = [
    '1-10 people',
    '11-50 people',
    '51-200 people',
    '201-1000 people',
    '1000+ people'
  ];

  const timeframes = [
    'Immediately',
    'Within 1 month',
    'Within 3 months',
    'Within 6 months',
    'Just exploring'
  ];

  const preferredTimes = [
    '9:00 AM - 10:00 AM EST',
    '10:00 AM - 11:00 AM EST',
    '11:00 AM - 12:00 PM EST',
    '1:00 PM - 2:00 PM EST',
    '2:00 PM - 3:00 PM EST',
    '3:00 PM - 4:00 PM EST',
    '4:00 PM - 5:00 PM EST'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-2xl relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 mr-3" />
                <div>
                  <h2 className="text-2xl font-bold">Request a Personalized Demo</h2>
                  <p className="text-blue-100">See SimplifyQA in action with your use case</p>
                </div>
              </div>
            </div>

            {/* Demo Benefits */}
            <div className="p-6 bg-blue-50 border-b border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What You'll Get in Your Demo:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Personalized walkthrough of SimplifyQA features
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Custom use case demonstration
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  ROI calculation for your team
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Q&A with our testing experts
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="p-6">
              {/* Personal Information */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Company Information */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      Job Title *
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="QA Manager"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Size *
                </label>
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select team size</option>
                  {teamSizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              {/* Project Details */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h4>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Testing Tools
                  </label>
                  <input
                    type="text"
                    name="currentTools"
                    value={formData.currentTools}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="e.g., Selenium, Cypress, Manual Testing"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Main Testing Challenges
                  </label>
                  <textarea
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Describe your current testing pain points..."
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Implementation Timeframe
                  </label>
                  <select
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select timeframe</option>
                    {timeframes.map((timeframe) => (
                      <option key={timeframe} value={timeframe}>{timeframe}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Demo Scheduling */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Demo Scheduling</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select preferred time</option>
                      {preferredTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Any specific features you'd like to see or questions you have..."
                />
              </div>

              <div className="mb-6">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="marketingConsent"
                    checked={formData.marketingConsent}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-3 mt-0.5"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to receive marketing communications from SimplifyQA about product updates, 
                    testing resources, and relevant content. You can unsubscribe at any time.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
              >
                Schedule My Demo
                <Calendar className="ml-2 h-5 w-5" />
              </button>

              <p className="mt-4 text-xs text-gray-500 text-center">
                By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                Our team will contact you within 24 hours to confirm your demo.
              </p>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Demo Request Received!
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
              Thank you for your interest in SimplifyQA. Our team will review your request 
              and contact you within 24 hours to schedule your personalized demo.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-gray-900 mb-4">What Happens Next?</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Team Review</div>
                    <div className="text-gray-600">We'll review your requirements</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Demo Setup</div>
                    <div className="text-gray-600">Customize demo for your use case</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Live Session</div>
                    <div className="text-gray-600">45-minute personalized demo</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Close
              </button>
              <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Contact Sales Team
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoRequestForm;