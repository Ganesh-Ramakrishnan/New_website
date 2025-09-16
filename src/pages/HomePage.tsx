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
  Star,
  Target,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { useState } from 'react';
import DemoRequestForm from '../components/DemoRequestForm';
import Hero from '../components/Hero';
import WebinarForm from '../components/WebinarForm';


import { useEffect } from 'react';
import CarouselCard from '../components/CarouselCard';

import React from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(window.location.search);
    if (params.get('scrollTo') === 'features') {
      setTimeout(() => {
        const el = document.getElementById('features');
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

  // Horizontal scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const pairStrip = pairStripRef.current;
      if (!section || !pairStrip) return;
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalPairs = imageTextPairs.length;

      // Buffer: first 20% of sticky section keeps first image fixed
      const bufferRatio = 0.2;
      const bufferPx = (sectionRect.height - windowHeight) * bufferRatio;

      if (sectionRect.top <= 0 && sectionRect.bottom > windowHeight) {
        // Calculate vertical scroll within sticky section
        const verticalScroll = windowHeight - sectionRect.top;
        let scrollProgress = 0;
        if (verticalScroll > bufferPx) {
          // Start horizontal scroll after buffer
          scrollProgress = Math.min(
            1,
            (verticalScroll - bufferPx) / (sectionRect.height - windowHeight - bufferPx)
          );
        }
        const maxTranslateX = (totalPairs - 1) * window.innerWidth;
        pairStrip.style.transform = `translateX(-${scrollProgress * maxTranslateX}px)`;
      } else if (sectionRect.bottom <= windowHeight) {
        pairStrip.style.transform = `translateX(-${(totalPairs - 1) * window.innerWidth}px)`;
      } else {
        pairStrip.style.transform = 'translateX(0px)';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "QA Director",
      company: "TechCorp",
      content: "SimplifyQA reduced our testing time by 70% while improving coverage. Game-changer for our team.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      company: "StartupXYZ", 
      content: "The AI capabilities are incredible. Our test maintenance went from hours to minutes.",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "QA Manager",
      company: "Enterprise Inc",
      content: "Best testing platform we've used. The integrations work seamlessly with our existing stack.",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
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

      {/* Client Logos */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <p className="text-center text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">Trusted by 500+ companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 place-content-center">
            <div className="image-dissolve-container">
              <img
                  src="/assets/client/technotree.png"
                  alt="Technotree"
                  className={`image-dissolve image1${dissolveActive ? ' active' : ''} filter grayscale`}
              />
              <img
                  src="/assets/client/Technology Mindz.png"
                  alt="Technology Mindz"
                  className={`image-dissolve image2${!dissolveActive ? ' active' : ''} filter grayscale`}
              />
            </div>
            <div>
              <div className="image-dissolve-container">
                <img
                    src="/assets/client/Svatantra.png"
                    alt="Svatantra"
                    className={`image-dissolve image1${dissolveActive ? ' active' : ''} filter grayscale`}
                />
                <img
                    src="/assets/client/Sunbots.png"
                    alt="Sunbots"
                    className={`image-dissolve image2${!dissolveActive ? ' active' : ''} filter grayscale`}
                />
              </div>
            </div>
            <div>
              <div className="image-dissolve-container">
                <img
                    src="/assets/client/SMFG india credits.png"
                    alt="SMFG India Credits"
                    className={`image-dissolve image1${dissolveActive ? ' active' : ''} filter grayscale`}
                />
                <img
                    src="/assets/client/Smartx technologies.png"
                    alt="Smartx Technologies"
                    className={`image-dissolve image2${!dissolveActive ? ' active' : ''} filter grayscale`}
                />
              </div>
            </div>
            <div>
              <div className="image-dissolve-container">
                <img
                    src="/assets/client/Quest alliance.png"
                    alt="Quest Alliance"
                    className={`image-dissolve image1${dissolveActive ? ' active' : ''} filter grayscale`}
                />
                <img
                    src="/assets/client/Piramal finance.png"
                    alt="Piramal Finance"
                    className={`image-dissolve image2${!dissolveActive ? ' active' : ''} filter grayscale`}
                />
              </div>
            </div>
           
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 place-content-center mt-3">
            <div className="image-dissolve-container">
              <img
                  src="/assets/client/Dr reddys laboratory.png"
                  alt="Dr Reddys Laboratory"
                  className={`image-dissolve image1${dissolveActive ? ' active' : ''} filter grayscale`}
              />
              <img
                  src="/assets/client/carelon globalsolutions.png"
                  alt="Carelon Global Solutions"
                  className={`image-dissolve image2${!dissolveActive ? ' active' : ''} filter grayscale`}
              />
            </div>
            <div>
              <div className="image-dissolve-container">
                <img
                    src="/assets/client/Availity.png"
                    alt="Availity"
                    className={`image-dissolve image1${dissolveActive ? ' active' : ''} filter grayscale`}
                />
                <img
                    src="/assets/client/Adithya birla fashion retail.png"
                    alt="Adithya Birla Fashion Retail"
                    className={`image-dissolve image2${!dissolveActive ? ' active' : ''} filter grayscale`}
                />
              </div>
            </div>
            <div>
              <div className="image-dissolve-container">
                <img
                    src="/assets/client/images.png"
                    alt="Images"
                    className={`image-dissolve image1${dissolveActive ? ' active' : ''} filter grayscale`}
                />
                <img
                    src="/assets/client/Opentext.png"
                    alt="Opentext"
                    className={`image-dissolve image2${!dissolveActive ? ' active' : ''} filter grayscale`}
                />
              </div>
            </div>
            <div>
              <div className="image-dissolve-container">
                <img
                    src="/assets/client/leap scholar.png"
                    alt="Leap Scholar"
                    className={`image-dissolve image1${dissolveActive ? ' active' : ''} filter grayscale`}
                />
                <img
                    src="/assets/client/Persyst.png"
                    alt="Persyst"
                    className={`image-dissolve image2${!dissolveActive ? ' active' : ''} filter grayscale`}
                />
              </div>
            </div>
           
          </div>
        </div>
        
      </section>

      {/* Features Section - Dark Theme */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose SimplifyQA?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Streamline your entire development lifecycle with our comprehensive, AI-powered platform designed for modern teams who demand quality, speed, and reliability.
            </p>
          </div>
          {/* Simple Grid Layout - Dark Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentFeatures().map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                {/* Icon container with enhanced styling */}
                <div className="relative mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    {feature.icon}
                  </div>
                </div>
                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm light_grey">
                    {feature.description}
                  </p>
                  {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div> */}
                </div>
              </div>
            ))}
          </div>
          {/* Dot Navigation - Dark Theme */}
          <div className="flex justify-center space-x-3 mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-700 hover:bg-gray-500 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose SimplifyQA?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Streamline your entire development lifecycle with our comprehensive, AI-powered platform designed for modern teams who demand quality, speed, and reliability.
            </p>
          </div>
        </div> */}

      {/* <section className="image-text-section relative" style={{ height: '500vh' }} ref={sectionRef}> 
        <div className="sticky-container sticky top-0 flex h-screen bg-white overflow-hidden">
          <div className="pair-strip flex absolute top-0 left-0 h-[100vh] transition-transform duration-100" ref={pairStripRef}>
            {imageTextPairs.map((pair, idx) => (
              <div className="pair flex w-screen h-[100vh]" key={idx}>
                <img src={pair.img} alt={pair.heading} className="w-1/2 object-cover" />
                <div className="text w-1/2 flex flex-col justify-center items-center p-8 bg-gray-50 text-gray-800 text-2xl">
                  <h2 className="font-bold mb-4">{pair.heading}</h2>
                  <p className="text-lg">{pair.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

  {/* Removed start and end horizontal scroll section divs as requested */}

  {/* Horizontal scroll effect JS (React useEffect) */}

      {/* Detailed Features Section */}
      <section id="features" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Testing Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed light_grey">
              Everything you need to deliver quality software faster. From AI-powered test generation
              to enterprise-grade security and reporting.
            </p>
          </div>

          {/* Carousel Card Example with Toggle */}
          <CarouselCard />

        </div>
      </section>

      {/* Everything You Need Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed light_grey">
              From AI-powered automation to comprehensive reporting, SimplifyQA provides all the tools 
              modern QA teams need to deliver exceptional software quality.
            </p>
          </div>

          {/* Feature Categories */}
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59,130,246,0.5) 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}></div>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="space-y-8 flex flex-col">
                {/* Smarter Control */}
                <div className="group relative">
                  <div className="absolute inset-0 from-blue-600/10 to-cyan-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="min-h-365 relative backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col feature-gradient-bg liener_bg min-h-365">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <Users className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Smarter Control</h3>
                        <p className="font-medium text-sm light_grey">One sign-in for all roles</p>
                      </div>
                    </div>
                    <div className="space-y-3 flex-grow">
                      {[
                        "Custom team & project layouts with flexible field configuration",
                        "Organize by product lines and business units for scalability",
                        "Advanced role-based access control with granular permissions",
                        "Multi-tenant architecture for enterprise security"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start group/item">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-700 text-sm leading-relaxed light_grey">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Assistance */}
                <div className="group relative">
                  <div className="absolute  from-purple-600/10 to-indigo-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="min-h-365 relative backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col feature-gradient-bg liener_bg">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <Cpu className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">AI Assistance</h3>
                        <p className="font-medium text-sm light_grey">AI-generated acceptance criteria</p>
                      </div>
                    </div>
                    <div className="space-y-3 flex-grow">
                      {[
                        "End-to-end self-healing with intelligent flakiness detection",
                        "AI assistant for smart test case generation and suggestions",
                        "Automated test optimization and performance enhancement",
                        "Machine learning-powered failure analysis and resolution"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start group/item">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-700 text-sm leading-relaxed light_grey">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column */}
              <div className="space-y-8 flex flex-col">
                {/* Dynamic Test Data */}
                <div className="group relative">
                  <div className="absolute  from-green-600/10 to-emerald-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="min-h-365 relative backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col feature-gradient-bg liener_bg">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <BarChart3 className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Dynamic Test Data</h3>
                        <p className="font-medium text-sm light_grey">Auto-generate data</p>
                      </div>
                    </div>
                    <div className="space-y-3 flex-grow">
                      {[
                        "Parameterize manual and automated tests with dynamic variables",
                        "Create reusable functions and components across projects",
                        "Smart data generation with realistic test datasets",
                        "Advanced data masking for security and compliance"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start group/item">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-700 text-sm leading-relaxed light_grey">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Virtualization & Integrations */}
                <div className="group relative">
                  <div className="absolute  from-cyan-600/10 to-blue-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="min-h-365 relative backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col feature-gradient-bg liener_bg">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <GitBranch className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Virtualization & Integrations</h3>
                        <p className="font-medium text-sm light_grey">DevOps integration</p>
                      </div>
                    </div>
                    <div className="space-y-3 flex-grow">
                      {[
                        "Connect to Jenkins, Azure, GitLab, Jira",
                        "Advanced service virtualization capabilities",
                        "API mocking and simulation tools",
                        "Real-time integration monitoring"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start group/item">
                          <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-700 text-sm leading-relaxed light_grey">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8 flex flex-col">
                {/* Modern Execution */}
                <div className="group relative">
                  <div className="absolute  from-orange-600/10 to-red-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="min-h-365 relative backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col feature-gradient-bg liener_bg">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Modern Execution</h3>
                        <p className="font-medium text-sm light_grey">Resume failed runs from any step</p>
                      </div>
                    </div>
                    <div className="space-y-3 flex-grow">
                      {[
                        "Unified manual and automation test suites in one platform",
                        "Effortless scheduling with remote execution capabilities",
                        "Automatic step-wise screenshots and detailed logging",
                        "Parallel execution with intelligent load balancing"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start group/item">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-700 text-sm leading-relaxed light_grey">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Powerful Reporting */}
                <div className="group relative">
                  <div className="absolute  from-indigo-600/10 to-purple-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="min-h-365 relative backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col feature-gradient-bg liener_bg">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <BarChart3 className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Powerful Reporting</h3>
                        <p className="font-medium text-sm light_grey">Drag-and-drop requirements</p>
                      </div>
                    </div>
                    <div className="space-y-3 flex-grow">
                      {[
                        "Role-based dashboards with fully customizable reports",
                        "Detailed step-level logs and custom notification systems",
                        "Real-time analytics with predictive insights and trends",
                        "Executive summaries and automated compliance reporting"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start group/item">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-700 text-sm leading-relaxed light_grey">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Webinar Registration Form */}
      <WebinarForm
        isOpen={isWebinarFormOpen}
        onClose={() => setIsWebinarFormOpen(false)}
        webinarTitle={upcomingWebinar.title}
        webinarDate={upcomingWebinar.date}
        presenter={upcomingWebinar.presenter} webinarTime={''}      />
      {/* Demo Request Form */}
      <DemoRequestForm
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />

      {/* Testimonials Section */}
      <section className="py-10 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              See how SimplifyQA is helping teams worldwide deliver better software faster.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Testing?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Join thousands of teams who trust SimplifyQA to deliver quality software faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDemoFormOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
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
      </section>
    </div>
  );
};

export default HomePage;