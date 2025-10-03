import { ArrowRight, Clock, Shield, Star, TrendingUp, Users } from 'lucide-react';

import { useEffect } from 'react';
import { useScrollAnimations } from '../utils/useScrollAnimations';

const CustomerSuccessPage = () => {
  useScrollAnimations();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "QA Director",
      company: "TechCorp Global",
      content: "SimplifyQA reduced our testing time by 70% while improving coverage. The AI-powered features are game-changers for our team.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      companyLogo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
      metrics: [
        { label: "Time Saved", value: "70%" },
        { label: "Test Coverage", value: "95%" },
        { label: "Team Satisfaction", value: "9.8/10" }
      ]
    },
    {
      name: "Michael Chen", 
      role: "Lead Developer",
      company: "StartupXYZ",
      content: "The seamless CI/CD integration and intelligent test maintenance have transformed our development workflow. Couldn't imagine working without it.",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      companyLogo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
      metrics: [
        { label: "Deployment Speed", value: "5x faster" },
        { label: "Bug Detection", value: "85% earlier" },
        { label: "Developer Productivity", value: "+40%" }
      ]
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Engineering",
      company: "Enterprise Inc",
      content: "SimplifyQA's enterprise security and scalability features make it perfect for our needs. The support team is exceptional.",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      companyLogo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
      metrics: [
        { label: "Cost Reduction", value: "60%" },
        { label: "Quality Score", value: "98%" },
        { label: "Compliance", value: "100%" }
      ]
    }
  ];

  const caseStudies = [
    {
      company: "FinanceFirst Bank",
      industry: "Financial Services",
      challenge: "Needed to automate complex compliance testing while maintaining security standards",
      solution: "Implemented SimplifyQA's enterprise security features with custom compliance workflows",
      results: [
        "Reduced compliance testing time by 80%",
        "Achieved 100% audit pass rate",
        "Improved security posture"
      ],
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      company: "RetailMax E-commerce",
      industry: "E-commerce",
      challenge: "Peak traffic periods required extensive performance and load testing",
      solution: "Leveraged SimplifyQA's cloud infrastructure for scalable performance testing",
      results: [
        "Handled 10x traffic increase seamlessly",
        "Reduced page load times by 40%", 
        "Improved customer satisfaction by 25%"
      ],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Required HIPAA-compliant testing for patient data systems",
      solution: "Deployed SimplifyQA with advanced security and audit logging capabilities",
      results: [
        "Achieved HIPAA compliance certification",
        "Reduced testing overhead by 65%",
        "Improved data security measures"
      ],
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  const clientLogos = [
    "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
    "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
    "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
    "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
    "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop",
    "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Customer 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Success Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading organizations are transforming their testing workflows 
            and achieving remarkable results with SimplifyQA.
          </p>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real results from real teams</p>
          </div>
          
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                      <div className="text-blue-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                    {testimonial.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <img
                  src={testimonial.companyLogo}
                  alt={testimonial.company}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Detailed Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into how different organizations have solved their testing challenges with SimplifyQA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-2xl font-bold text-white mb-2">{study.company}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Key Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-3 rounded-lg font-semibold transition-all flex items-center justify-center group-hover:shadow-lg">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gallery Navigation */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-600 transition-colors duration-200"
                ></button>
              ))}
            </div>
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-8">
            <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Case Study Modal Overlay - Hidden by default */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-8">
              <div className="mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Industry</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-2">Company Name</h2>
                <p className="text-gray-600">Detailed case study content would go here...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Original case studies section - now updated */}
      <section className="py-20 bg-white" style={{ display: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Detailed Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into how different organizations have solved their testing challenges with SimplifyQA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{study.industry}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.company}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    <strong>Solution:</strong> {study.solution}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Results:</h4>
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center text-sm">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Success by the Numbers</h2>
          <p className="text-xl text-blue-100 mb-16 max-w-3xl mx-auto">
            See the measurable impact SimplifyQA delivers for our customers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group">
              <TrendingUp className="h-12 w-12 text-blue-200 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">70%</div>
              <div className="text-blue-100">Average Time Savings</div>
            </div>
            <div className="group">
              <Users className="h-12 w-12 text-blue-200 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Enterprise Customers</div>
            </div>
            <div className="group">
              <Clock className="h-12 w-12 text-blue-200 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">24 hrs</div>
              <div className="text-blue-100">Average Setup Time</div>
            </div>
            <div className="group">
              <Shield className="h-12 w-12 text-blue-200 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Platform Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Dedicated Customer Success
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our customer success team works closely with you to ensure you're getting 
                maximum value from SimplifyQA. From onboarding to optimization, we're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dedicated Success Manager</h3>
                    <p className="text-gray-600">Your dedicated point of contact for strategic guidance and support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">24/7 Technical Support</h3>
                    <p className="text-gray-600">Round-the-clock assistance when you need it most</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Training & Best Practices</h3>
                    <p className="text-gray-600">Ongoing education to maximize your testing efficiency</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Customer Success Team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            See how SimplifyQA can transform your testing process and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-gray-600 hover:border-blue-400 text-white hover:text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSuccessPage;