import {
  BarChart3,
  Bug,
  Calendar,
  Cloud,
  Cpu,
  FileText,
  GitBranch,
  Globe,
  Layers,
  Settings,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ClientLogoSlider from '../components/ClientLogoSlider';
import DemoRequestForm from '../components/DemoRequestForm';
import FavoriteToolsGrid from '../components/FavoriteToolsGrid';
import Hero from '../components/Hero';
import { useScrollAnimations } from '../utils/useScrollAnimations';

import ApiIntegrationShowcase from '../components/ApiIntegrationShowcase';
import DataAnalyticsShowcase from '../components/DataAnalyticsShowcase';
import FeatureShowcase from '../components/FeatureShowcase';
import SuccessStoriesCarousel from '../components/SuccessStoriesCarousel';
import { TrialForm } from '../components/TrialForm';

const HomePage = () => {
  useScrollAnimations();

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(window.location.search);
    if (params.get('scrollTo') === 'feature-showcase') {
      setTimeout(() => {
        const el = document.getElementById('feature-showcase');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  // Horizontal scroll image + text pairs
  const imageTextPairs = [
    {
      img: '/assets/banner/unnamed (1).jpg',
      heading: 'Banner 1',
      text: 'Description for Banner 1.'
    },
    {
      img: '/assets/banner/unnamed (2).jpg',
      heading: 'Banner 2',
      text: 'Description for Banner 2.'
    },
    {
      img: '/assets/banner/unnamed (3).jpg',
      heading: 'Banner 3',
      text: 'Description for Banner 3.'
    },
    {
      img: '/assets/banner/unnamed (4).jpg',
      heading: 'Banner 4',
      text: 'Description for Banner 4.'
    },
    {
      img: '/assets/banner/unnamed.jpg',
      heading: 'Banner 5',
      text: 'Description for Banner 5.'
    }
  ];

  // Refs for scroll effect
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const pairStripRef = React.useRef<HTMLDivElement>(null);

  // Smooth scroll-linked horizontal animator using RAF + easing
  React.useEffect(() => {
    const strip = pairStripRef.current;
    if (!strip) return;

    // measurement-based CSS animation for smooth continuous scroll
    const PX_PER_SEC = 0.2; // very slow motion; tune to 0.1 for almost static

    // ensure style
    strip.style.willChange = 'transform';
    strip.style.backfaceVisibility = 'hidden';

  const totalWidth = strip.scrollWidth || 0;
  const originalWidth = totalWidth / 2 || 0;
  if (originalWidth === 0) return;

  // fixed duration as requested by user
  const durationSec = 1; // 1 second full loop
    const animName = `homeLoop_${Math.floor(Math.random() * 1e9)}`;
    const styleEl = document.createElement('style');
    styleEl.setAttribute('data-home-loop', animName);
    styleEl.innerHTML = `
      @keyframes ${animName} {
        0% { transform: translate3d(0,0,0); }
        100% { transform: translate3d(-${originalWidth}px,0,0); }
      }
      @media (prefers-reduced-motion: reduce) {
        @keyframes ${animName} { 0% { transform: none; } 100% { transform: none; } }
      }
    `;
    document.head.appendChild(styleEl);

    strip.style.animationName = animName;
    strip.style.animationDuration = `${durationSec}s`;
    strip.style.animationTimingFunction = 'linear';
    strip.style.animationIterationCount = 'infinite';

    // pause on hover
    const onEnter = () => { strip.style.animationPlayState = 'paused'; };
    const onLeave = () => { strip.style.animationPlayState = 'running'; };
    strip.addEventListener('mouseenter', onEnter);
    strip.addEventListener('mouseleave', onLeave);

    return () => {
      strip.removeEventListener('mouseenter', onEnter);
      strip.removeEventListener('mouseleave', onLeave);
      const el = document.head.querySelector(`style[data-home-loop="${animName}"]`);
      if (el) el.remove();
      strip.style.animationName = '';
    };
  }, [imageTextPairs.length]);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeCategory, setActiveCategory] = useState('web');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dissolveActive, setDissolveActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDissolveActive((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const mainFeatures = [
    {
      icon: <Cpu className="h-12 w-12 text-blue-600" />,
      title: "AI-Powered Test Generation",
      description: "Automatically generate comprehensive test cases using machine learning algorithms that understand your application structure and user flows.",
      details: [
        "Smart test case creation from user stories",
        "Automated test data generation",
        "Intelligent test path optimization",
        "Self-healing test scripts"
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Lightning-Fast Execution",
      description: "Execute thousands of tests simultaneously with our cloud-based infrastructure designed for speed and reliability.",
      details: [
        "Parallel test execution",
        "Cloud-based test runners",
        "Instant feedback on failures",
        "99.9% uptime guarantee"
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-purple-600" />,
      title: "Advanced Analytics & Reporting",
      description: "Gain deep insights into your testing performance with comprehensive analytics and customizable dashboards.",
      details: [
        "Real-time test execution monitoring",
        "Trend analysis and predictions",
        "Custom dashboard creation",
        "Export capabilities for stakeholders"
      ]
    },
    {
      icon: <GitBranch className="h-12 w-12 text-green-600" />,
      title: "Seamless CI/CD Integration",
      description: "Integrate effortlessly with your existing development workflow and popular DevOps tools.",
      details: [
        "Jenkins, GitHub Actions, GitLab CI",
        "Slack and Teams notifications",
        "Jira integration for bug tracking",
        "API-first architecture"
      ]
    },
    {
      icon: <Cloud className="h-12 w-12 text-cyan-600" />,
      title: "Cloud Execution",
      description: "Execute tests on our scalable cloud infrastructure with unlimited parallel execution and global availability.",
      details: [
        "Unlimited parallel test execution",
        "Global cloud infrastructure",
        "Auto-scaling based on demand",
        "99.9% uptime guarantee"
      ]
    },
    {
      icon: <Globe className="h-12 w-12 text-indigo-600" />,
      title: "Cross-Platform Testing",
      description: "Test across multiple browsers, devices, and operating systems from a single platform.",
      details: [
        "Web, mobile, and API testing",
        "Multi-browser compatibility",
        "Device farm integration",
        "Visual regression testing"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-red-500" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, encryption, and comprehensive access controls.",
      details: [
        "End-to-end encryption",
        "Role-based access control",
        "Audit logs and compliance",
        "GDPR and SOC 2 certified"
      ]
    }
  ];
  const [isGaneshModalOpen, setIsGaneshModalOpen] = useState(false);
  const [isWebinarFormOpen, setIsWebinarFormOpen] = useState(false);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [isTrialFormOpen, setIsTrialFormOpen] = useState(false);

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "AI-Powered Test Generation",
      description: "Generate comprehensive test cases automatically using machine learning algorithms that understand your application structure."
    },
    {
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
      title: "Smart Test Maintenance",
      description: "Self-healing tests that automatically adapt to UI changes, reducing maintenance overhead significantly."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Agile Management",
      description: "Streamline sprint planning, backlog management, and team collaboration with intelligent automation tools."
    },
    {
      icon: <GitBranch className="h-8 w-8 text-green-600" />,
      title: "Release Management", 
      description: "Orchestrate seamless releases with automated deployment pipelines and zero-downtime deployments."
    },
    {
      icon: <Bug className="h-8 w-8 text-red-600" />,
      title: "Defect Management",
      description: "Intelligent bug tracking, prioritization, and resolution with automated detection and AI-driven insights."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      title: "Lightning Fast Execution",
      description: "Execute thousands of tests simultaneously with parallel processing and cloud-based infrastructure."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Cross-Platform Testing",
      description: "Test web, mobile, and API applications across multiple browsers, devices, and operating systems."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      title: "Reports & Dashboard",
      description: "Real-time analytics, executive dashboards, and predictive insights to monitor project health."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption, role-based access control, and comprehensive audit logs."
    },
    {
      icon: <Layers className="h-8 w-8 text-cyan-500" />,
      title: "Seamless CI/CD Integration",
      description: "Native integrations with Jenkins, GitHub Actions, GitLab CI, and 200+ other DevOps tools."
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-500" />,
      title: "Requirements Management",
      description: "Centralized requirement tracking, traceability matrix, and automated validation for complete coverage."
    },
    {
      icon: <Calendar className="h-8 w-8 text-pink-500" />,
      title: "Team Collaboration",
      description: "Built-in collaboration tools with real-time sharing, comments, and notifications for teams."
    }
  ];

  // Slider configuration
  const featuresPerSlide = 6;
  const totalSlides = Math.ceil(features.length / featuresPerSlide);

  // Slider functions
  const getCurrentFeatures = () => {
    const startIndex = currentSlide * featuresPerSlide;
    return features.slice(startIndex, startIndex + featuresPerSlide);
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const almFeatures = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Agile Management",
      description: "Streamline sprint planning, backlog management, and team collaboration with intelligent automation and real-time insights."
    },
    {
      icon: <GitBranch className="h-8 w-8 text-green-500" />,
      title: "Release Management",
      description: "Orchestrate seamless releases with automated deployment pipelines, version control, and zero-downtime deployments."
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: "Test Automation",
      description: "AI-powered test generation, execution, and maintenance with cross-platform support and intelligent self-healing capabilities."
    },
    {
      icon: <Bug className="h-8 w-8 text-red-500" />,
      title: "Defect Management",
      description: "Intelligent bug tracking, prioritization, and resolution with automated detection and AI-driven insights for faster fixes."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-cyan-500" />,
      title: "Reports & Dashboard",
      description: "Real-time analytics, executive dashboards, and predictive insights to monitor project health and team performance."
    },
    {
      icon: <FileText className="h-8 w-8 text-orange-500" />,
      title: "Requirements Management",
      description: "Centralized requirement tracking, traceability matrix, and automated validation to ensure complete coverage."
    }
  ];

  const upcomingWebinar = {
    title: "Advanced Test Automation with AI: Best Practices for 2025",
    date: "January 30, 2025",
    time: "2:00 PM EST",
    presenter: "Dr. Sarah Kim, CTO",
    description: "Learn how to leverage AI-powered testing to reduce manual effort by 80% and improve test coverage.",
    registrations: 1247,
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  };

  const pastWebinars = [
    {
      title: "Building Scalable Test Automation Frameworks",
      presenter: "Alex Rivera, CEO",
      date: "December 15, 2024",
      duration: "45 min",
      views: 2340,
      thumbnail: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    },
    {
      title: "Mobile Testing Strategies for Modern Apps",
      presenter: "Marcus Johnson, VP Engineering",
      date: "November 28, 2024", 
      duration: "38 min",
      views: 1890,
      thumbnail: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    },
    {
      title: "Enterprise Security in Test Automation",
      presenter: "Elena Rodriguez, VP Customer Success",
      date: "November 10, 2024",
      duration: "42 min", 
      views: 1650,
      thumbnail: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    },
    {
      title: "CI/CD Integration Best Practices",
      presenter: "Michael Chen, Lead Developer",
      date: "October 25, 2024",
      duration: "50 min",
      views: 2100,
      thumbnail: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    },
    {
      title: "Performance Testing at Scale",
      presenter: "Sarah Johnson, QA Director",
      date: "October 12, 2024",
      duration: "35 min",
      views: 1780,
      thumbnail: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    },
    {
      title: "API Testing Automation Masterclass",
      presenter: "David Park, Senior Engineer",
      date: "September 28, 2024",
      duration: "55 min",
      views: 2450,
      thumbnail: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
  <div className="w-full text-white">
        <Hero />
      
      </div>

      {/* Data Analytics Showcase - First section after Hero */}
      <div className="animate-on-scroll" id="data-analytics-showcase">
        <DataAnalyticsShowcase />
      </div>

      {/* API Integration Showcase */}
      {/* <div className="animate-on-scroll" id="api-integration-showcase">
        <ApiIntegrationShowcase />
      </div> */}

      {/* Client Logos Slider */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 animate-on-scroll" id="client-logos">
          <div className="relative">
            {/* Slider for Client Logos */}
            <ClientLogoSlider />
          </div>
        </div>
      </section>

      {/* AI Features Showcase */}
      {/* <div className="animate-on-scroll" id="ai-features">
        <AIFeaturesShowcase />
      </div> */}

      {/* Feature Showcase */}
      <div className="animate-on-scroll" id="feature-showcase">
        <FeatureShowcase />
      </div>


  {/* Features Section - Dark Theme */}

  {/* <div className="animate-on-scroll" id="project-dashboard">
        <ProjectDashboard />
      </div> */}

{/*       
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll" id="features-section">
          <div className="text-center mb-10">
            <h2 className="heading font-bold text-white">
              Why Choose SimplifyQA?
            </h2>
            <p className="subheading text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Streamline your entire development lifecycle with our comprehensive, AI-powered platform designed for modern teams who demand quality, speed, and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentFeatures().map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
             
                <div className="relative mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    {feature.icon}
                  </div>
                </div>
             
                <div className="relative text-center">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm light_grey">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-6 mt-12">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`bg-gray-700 hover:bg-gray-500 text-white rounded-full p-2 shadow-lg transition-all duration-200 flex items-center justify-center ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className={`bg-gray-700 hover:bg-gray-500 text-white rounded-full p-2 shadow-lg transition-all duration-200 flex items-center justify-center ${currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

        
        </div>
      </section> */}

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
          <div className="text-center mb-10">
            <h2 className="heading font-bold text-gray-900 mb-6">Why Choose SimplifyQA?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Streamline your entire development lifecycle with our comprehensive, AI-powered platform designed for modern teams who demand quality, speed, and reliability.
            </p>
          </div>
        </div> */}


        {/* API Integration Showcase */}
        <div className="mx-auto animate-on-scroll" id="api-integration-showcase">
          <ApiIntegrationShowcase />
        </div>  

      {/* Project Dashboard Section */}
      

  {/* Removed start and end horizontal scroll section divs as requested */}

  {/* Horizontal scroll effect JS (React useEffect) */}

      {/* AI Features Two-Column Scroller */}

      {/* Detailed Features Section */}
      {/* <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll" id="detailed-features">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Testing Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed light_grey">
              Everything you need to deliver quality software faster. From AI-powered test generation
              to enterprise-grade security and reporting.
            </p>
          </div>

          <div className="animate-on-scroll animate-delay-200" id="carousel-card">
            <CarouselCard />
          </div>

        </div>
      </section> */}

      {/* Everything You Need Section */}
      {/* <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll" id="everything-section">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Everything You Need in One Platform
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed light_grey">
              From AI-powered automation to comprehensive reporting, SimplifyQA provides all the tools 
              modern QA teams need to deliver exceptional software quality.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59,130,246,0.5) 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}></div>
            </div>

            <div className="w-full">
              <FeatureCategorySlider />
            </div>
          </div>
        </div>
      </section> */}


      {/* Webinar Registration Form */}
      {/* <WebinarForm
        isOpen={isWebinarFormOpen}
        onClose={() => setIsWebinarFormOpen(false)}
        webinarTitle={upcomingWebinar.title}
        webinarDate={upcomingWebinar.date}
        presenter={upcomingWebinar.presenter} webinarTime={''}      /> */}
      {/* Demo Request Form */}
      <DemoRequestForm
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />

      {/* Success Stories Carousel */}
      <SuccessStoriesCarousel />

        {/* Favorite Tools Grid Section */}
          <div className="animate-on-scroll" id="favorite-tools">
            <FavoriteToolsGrid />
          </div>

      {/* Testimonials Section */}
      {/* <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll" id="testimonials-section">
          <div className="text-center mb-10">
            <h2 className="heading font-bold text-white">
              Trusted by Industry Leaders
            </h2>
            <p className="subheading text-blue-100 max-w-4xl mx-auto leading-relaxed">
              See how SimplifyQA is helping teams worldwide deliver better software faster.
            </p>
          </div>
      <div className="animate-on-scroll animate-delay-200" id="testimonials">
        <TestimonySection />
      </div>
        </div>
      </section> */}

      

      {/* CTA Section */}
      {/* <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Testing?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Join thousands of teams who trust SimplifyQA to deliver quality software faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsTrialFormOpen(true)}
              className="bg-purple-500 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Start Free Trial
            </button>
            <button
              onClick={() => setIsDemoFormOpen(true)}
              className="border-2 border-gray-600 hover:border-gray-500 text-white hover:bg-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </section> */}


      {/* Compliance Badges Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center heading font-bold text-white mb-8">Our Certifications & Compliance</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            <img
              src="/assets/crt/SOC.png"
              alt="SOC 2 TYPE 2"
              className="h-auto w-[108px] object-contain transition-transform hover:scale-105"
            />
            <img
              src="/assets/crt/GDPR compliant.png"
              alt="GDPR Compliant"
              className="h-auto w-[150px] object-contain transition-transform hover:scale-105"
            />
            <img
              src="/assets/crt/Intercert.Png"
              alt="ISO 27001"
              className="h-auto w-[150px] object-contain transition-transform hover:scale-105"
            />
            <img
              src="/assets/crt/HIPAA compliant.png"
              alt="HIPAA Compliant"
              className="h-auto w-[150px] object-contain transition-transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Next Live Session Section */}
      {/* <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">NEXT LIVE SESSION</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Advanced Test Automation with AI: Best Practices for 2025</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-base md:text-lg text-gray-300 mb-0">Learn how to leverage AI-powered testing to reduce manual effort by 80% and improve test coverage.</p>
            
          </div>
          <p className="flex items-center gap-2 justify-center m-auto my-2">
              <span className="text-gray-400 text-xs font-semibold">Date & Time</span>
              <span className="text-white font-bold text-lg">January 30, 2025</span>
              <span className="text-gray-300 text-sm">2:00 PM EST</span>
            </p>
          <button className="bg-purple-500 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center m-auto">Register Now</button>
        </div>
      </section> */}

      {/* Trial Form Modal */}
      <TrialForm isOpen={isTrialFormOpen} onClose={() => setIsTrialFormOpen(false)} />
    </div>
  );
};

export default HomePage;