import {
  ArrowRight,
  BarChart3,
  Bug,
  Calendar,
  CheckCircle,
  Clock,
  Cloud,
  Cpu,
  ExternalLink,
  FileText,
  GitBranch,
  Globe,
  Layers,
  Play,
  Settings,
  Shield,
  Smartphone,
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

const HomePage = () => {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeCategory, setActiveCategory] = useState('web');
  const [currentSlide, setCurrentSlide] = useState(0);
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
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose SimplifyQA?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Streamline your entire development lifecycle with our comprehensive, AI-powered platform designed for modern teams who demand quality, speed, and reliability.
            </p>
          </div>
          
          {/* Simple Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentFeatures().map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon container with enhanced styling */}
                <div className="relative mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-16 transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dot Navigation */}
          <div className="flex justify-center space-x-3 mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Testing Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to deliver quality software faster. From AI-powered test generation 
              to enterprise-grade security and reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className='comprehensive_card_main position-relative'>
              <div className="text-center" style={{ cursor: 'pointer' }} onClick={() => setIsAIModalOpen(true)}>
                <div className="w-16 m-auto h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 comprehensive_card_header">AI-Powered Test Generation</h3>
                  <p className="text-blue-600 font-medium comprehensive_card_subHeader">Intelligent automation at scale</p>
                </div>
                <div className='position-absolute bottom-0 start-50 translate-middle-x mb-2'>
              read more <a href="#features" className="text-blue-600 hover:underline">here</a>
            </div>
              </div>
            </div>
          {/* Modal for AI-Powered Test Generation card (global overlay) */}
          {isAIModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div
                className="bg-white rounded-2xl shadow-2xl p-2 w-[50%] relative"
                style={{ maxWidth: '900px' }}
              >
                {/* Close icon at top right */}
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                  onClick={() => setIsAIModalOpen(false)}
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className='bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300'>
                  <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI-Powered Test Generation</h3>
                    <p className="text-blue-600 font-medium">Intelligent automation at scale</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Leverage advanced machine learning algorithms to automatically generate comprehensive test cases 
                  that understand your application structure, user flows, and business logic.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-gray-600 leading-relaxed text-sm">
                    <span className="font-bold text-gray-900">Smart Test Creation:</span> AI analyzes your app and generates relevant test scenarios automatically
                  </li>
                  <li className="text-gray-600 leading-relaxed text-sm">
                    <span className="font-bold text-gray-900">Intelligent Assertions:</span> Automatically generates meaningful assertions based on UI elements and data
                  </li>
                  <li className="text-gray-600 leading-relaxed text-sm">
                    <span className="font-bold text-gray-900">Self-Healing Tests:</span> Tests automatically adapt to UI changes, reducing maintenance by 70%
                  </li>
                  <li className="text-gray-600 leading-relaxed text-sm">
                    <span className="font-bold text-gray-900">Pattern Recognition:</span> Learns from existing tests to suggest improvements and optimizations
                  </li>
                </ul>
                </div>
              </div>
            </div>
          )}
            <div className='comprehensive_card_main'>
                <div className="text-center">
                  <div className="w-16 m-auto h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 comprehensive_card_header">Cross-Platform Testing</h3>
                    <p className="text-green-600 font-medium comprehensive_card_subHeader">Test everywhere, deploy with confidence</p>
                  </div>
                </div>
            </div>
            <div className='comprehensive_card_main'>
                <div className="text-center">
                  <div className="w-16 m-auto h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 comprehensive_card_header">Enterprise Security</h3>
                    <p className="text-purple-600 font-medium comprehensive_card_subHeader">Bank-grade security and compliance</p>
                  </div>
                </div>
            </div>
            <div className='comprehensive_card_main'>
                <div className="text-center">
                  <div className="w-16 m-auto h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 comprehensive_card_header">Advanced Analytics</h3>
                    <p className="text-orange-600 font-medium comprehensive_card_subHeader">Data-driven testing insights</p>
                  </div>
                </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-3">
            <div className='comprehensive_card_main'>
                <div className="text-center">
                  <div className="w-16 m-auto h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GitBranch className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 comprehensive_card_header">CI/CD Integration</h3>
                    <p className="text-cyan-600 font-medium comprehensive_card_subHeader">Seamless DevOps workflow</p>
                  </div>
                </div>
            </div>
            <div className='comprehensive_card_main'>
                  <div className="text-center">
                    <div className="w-16 m-auto h-16 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Cloud className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 comprehensive_card_header">Cloud Execution</h3>
                      <p className="text-pink-600 font-medium comprehensive_card_subHeader">Infinite scale, zero infrastructure</p>
                    </div>
                  </div>
            </div>
            <div className='comprehensive_card_main'>
                  <div className="text-center">
                    <div className="w-16 m-auto h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 comprehensive_card_header">Team Collaboration</h3>
                      <p className="text-indigo-600 font-medium comprehensive_card_subHeader">Built for distributed teams</p>
                    </div>
                  </div>
            </div>
          </div>
          

          <div className="">
            {/* AI-Powered Test Generation */}
            <div className="group mb-10">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI-Powered Test Generation</h3>
                    <p className="text-blue-600 font-medium">Intelligent automation at scale</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Leverage advanced machine learning algorithms to automatically generate comprehensive test cases 
                  that understand your application structure, user flows, and business logic.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-gray-600 leading-relaxed text-sm">
                    <span className="font-bold text-gray-900">Smart Test Creation:</span> AI analyzes your app and generates relevant test scenarios automatically
                  </li>
                  <li className="text-gray-600 leading-relaxed text-sm">
                    <span className="font-bold text-gray-900">Intelligent Assertions:</span> Automatically generates meaningful assertions based on UI elements and data
                  </li>
                  <li className="text-gray-600 leading-relaxed text-sm">
                    <span className="font-bold text-gray-900">Self-Healing Tests:</span> Tests automatically adapt to UI changes, reducing maintenance by 70%
                  </li>
                  <li className="text-gray-600 leading-relaxed text-sm">
                    <span className="font-bold text-gray-900">Pattern Recognition:</span> Learns from existing tests to suggest improvements and optimizations
                  </li>
                </ul>
              </div>
            </div>

            {/* Cross-Platform Testing */}
            <div className="group mb-10">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Cross-Platform Testing</h3>
                    <p className="text-green-600 font-medium">Test everywhere, deploy with confidence</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Execute tests across web browsers, mobile devices, APIs, and desktop applications from a single platform. 
                  Ensure consistent user experience across all touchpoints.
                </p>
            
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Web Testing:</span> Chrome, Firefox, Safari, Edge - all browsers covered with headless support
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Mobile Testing:</span> Real device testing on iOS and Android with cloud device farm
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">API Testing:</span> REST, SOAP, GraphQL - comprehensive API validation and performance testing
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Desktop Apps:</span> Windows, macOS, Linux desktop application testing support
                    </li>
                  </ul>
              </div>
            </div>

            {/* Enterprise Security */}
            <div className="group mb-10">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Enterprise Security</h3>
                    <p className="text-purple-600 font-medium">Bank-grade security and compliance</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Meet the highest security standards with SOC 2 Type II compliance, end-to-end encryption, 
                  and comprehensive audit logging for enterprise peace of mind.
                </p>
                
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">SOC 2 Compliance:</span> Type II certified with regular third-party security audits
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Data Encryption:</span> End-to-end encryption for data in transit and at rest
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Access Control:</span> Role-based permissions with SSO and multi-factor authentication
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Audit Logging:</span> Comprehensive activity logs for compliance and security monitoring
                    </li>
                  </ul>
              </div>
            </div>

            {/* Advanced Analytics */}
            <div className="group mb-10">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Advanced Analytics</h3>
                    <p className="text-orange-600 font-medium">Data-driven testing insights</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Transform testing data into actionable insights with real-time dashboards, predictive analytics, 
                  and comprehensive reporting that drives continuous improvement.
                </p>
                
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Real-time Dashboards:</span> Live test execution monitoring with customizable views
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Predictive Analytics:</span> AI-powered insights to predict and prevent quality issues
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Custom Reports:</span> Executive summaries and detailed technical reports
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Trend Analysis:</span> Historical data analysis to identify patterns and improvements
                    </li>
                  </ul>
              </div>
            </div>

            {/* CI/CD Integration */}
            <div className="group mb-10">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <GitBranch className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">CI/CD Integration</h3>
                    <p className="text-cyan-600 font-medium">Seamless DevOps workflow</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Integrate seamlessly with your existing DevOps pipeline. Trigger tests automatically, 
                  get instant feedback, and maintain quality gates throughout your development process.
                </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Pipeline Integration:</span> Jenkins, GitHub Actions, GitLab CI, Azure DevOps support
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Quality Gates:</span> Automated quality checks that prevent bad code from deploying
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Parallel Execution:</span> Run thousands of tests simultaneously for faster feedback
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Smart Notifications:</span> Contextual alerts via Slack, Teams, email, and webhooks
                    </li>
                  </ul>
              </div>
            </div>

            {/* Cloud Execution */}
            <div className="group mb-10">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Cloud Execution</h3>
                    <p className="text-pink-600 font-medium">Infinite scale, zero infrastructure</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Execute tests at massive scale with our cloud infrastructure. No setup required, 
                  automatic scaling, and global availability for consistent performance worldwide.
                </p>
    
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Auto Scaling:</span> Automatically scale resources based on test execution demand
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Global Infrastructure:</span> Test from multiple geographic locations for performance validation
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Zero Maintenance:</span> No infrastructure to manage - focus on testing, not servers
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Cost Optimization:</span> Pay only for what you use with intelligent resource allocation
                    </li>
                  </ul>
              </div>
            </div>

            {/* Team Collaboration */}
            <div className="group lg:col-span-2">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Team Collaboration</h3>
                    <p className="text-indigo-600 font-medium">Built for distributed teams</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Enable seamless collaboration across development, QA, and product teams with real-time sharing, 
                  comments, notifications, and role-based access controls.
                </p>
              
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Real-time Sharing:</span> Share test results and reports instantly with stakeholders
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Comments & Reviews:</span> Collaborative test review process with inline comments
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Role Management:</span> Granular permissions for different team roles and responsibilities
                    </li>
                    <li className="text-gray-600 leading-relaxed text-sm">
                      <span className="font-bold text-gray-900">Activity Feeds:</span> Stay updated with real-time notifications and activity streams
                    </li>
                  </ul>
              </div>
            </div>
          </div>


        

          {/* Feature Highlights */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Teams Choose SimplifyQA</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">10x Faster</h4>
                <p className="text-gray-600">Reduce testing time from weeks to hours with intelligent automation</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">95% Coverage</h4>
                <p className="text-gray-600">Achieve comprehensive test coverage across all platforms and devices</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">70% Less Maintenance</h4>
                <p className="text-gray-600">Self-healing tests adapt automatically to application changes</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">All Platforms</h4>
                <p className="text-gray-600">Web, mobile, API, and desktop testing from a single platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Capabilities Section */}
      {/* <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete Technology Ecosystem
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              SimplifyQA integrates seamlessly with your entire technology stack. From enterprise applications to modern web platforms.
            </p>
          </div>

          Technology Ecosystem Visualization
          <div className="relative max-w-6xl mx-auto">
            Background Grid
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                {Array.from({ length: 96 }).map((_, i) => (
                  <div key={i} className="border border-cyan-500/20"></div>
                ))}
              </div>
            </div>

            Main Platform Container
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-cyan-500/30 p-12 min-h-[600px]">
              
              Platform Header
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-700 border border-cyan-500/50 rounded-lg px-6 py-2">
                  <span className="text-cyan-400 font-semibold">Platform</span>
                </div>
              </div>

              Left Side - Enterprise Applications
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-700 border border-purple-500/50 rounded-lg px-3 py-2 mb-4 rotate-90">
                  <span className="text-purple-400 font-semibold text-sm">ERP & CRM</span>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Salesforce', icon: '☁️', color: 'blue' },
                    { name: 'SAP', icon: '🏢', color: 'blue' },
                    { name: 'Workday', icon: '👥', color: 'orange' },
                    { name: 'Coupa', icon: '💼', color: 'blue' },
                    { name: 'ServiceNow', icon: '⚙️', color: 'green' }
                  ].map((app, index) => (
                    <div
                      key={app.name}
                      className="bg-gray-800 border border-dashed border-cyan-500/30 rounded-lg p-3 flex items-center space-x-3 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer group"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="w-8 h-8 bg-gray-700 rounded border border-gray-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-sm">{app.icon}</span>
                      </div>
                      <span className="text-gray-300 font-medium text-sm">{app.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              Right Side - Technology Categories
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-700 border border-pink-500/50 rounded-lg px-3 py-2 mb-4 -rotate-90">
                  <span className="text-pink-400 font-semibold text-sm">Applications</span>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Web', icon: '🌐', color: 'pink', count: '5 Browsers' },
                    { name: 'Mobile', icon: '📱', color: 'pink', subtitle: '(iOS & Android)' },
                    { name: 'API', icon: '🔗', color: 'pink', count: 'REST & SOAP' },
                    { name: 'Desktop', icon: '🖥️', color: 'pink', count: '6 Platforms' },
                    { name: 'Database', icon: '🗄️', color: 'pink', count: '7 Systems' }
                  ].map((tech, index) => (
                    <div
                      key={tech.name}
                      className="bg-gray-800 border border-dashed border-pink-500/30 rounded-lg p-3 hover:border-pink-400/60 transition-all duration-300 cursor-pointer group"
                      onClick={() => setActiveCategory(tech.name.toLowerCase())}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-700 rounded border border-gray-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-sm">{tech.icon}</span>
                        </div>
                        <div>
                          <div className="text-gray-300 font-medium text-sm">{tech.name}</div>
                          {tech.subtitle && <div className="text-gray-500 text-xs">{tech.subtitle}</div>}
                          {tech.count && <div className="text-gray-500 text-xs">{tech.count}</div>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              Central Hub Area
              <div className="flex items-center justify-center h-full">
                <div className="relative">
                  Outer Ring with Orbiting Elements
                  <div className="relative w-80 h-80">
                    Outer Ring
                    <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full"></div>
                    
                    Orbiting Elements
                    {Array.from({ length: 8 }).map((_, index) => {
                      const angle = (index * 45) * (Math.PI / 180);
                      const radius = 140;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      
                      return (
                        <div
                          key={index}
                          className="absolute w-12 h-12 bg-gray-700 border-2 border-cyan-500/50 rounded-full flex items-center justify-center"
                          style={{
                            transform: `translate(${x}px, ${y}px)`,
                            left: '50%',
                            top: '50%',
                            marginLeft: '-24px',
                            marginTop: '-24px',
                            animation: `autoRotate 20s linear infinite`,
                            animationDelay: `${index * 0.5}s`
                          }}
                        >
                          <div className="w-6 h-6 bg-cyan-400 rounded-full"></div>
                        </div>
                      );
                    })}
                  </div>

                  Inner Ring
                  <div className="absolute inset-16 border border-dashed border-purple-500/30 rounded-full flex items-center justify-center">
                    Atto Label
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gray-700 border border-purple-500/50 rounded-full px-4 py-2 flex items-center space-x-2">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">A</span>
                        </div>
                        <span className="text-purple-400 font-semibold">Atto</span>
                      </div>
                    </div>

                    Copilot Label
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gray-700 border border-blue-500/50 rounded-full px-4 py-2 flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">C</span>
                        </div>
                        <span className="text-blue-400 font-semibold">Copilot</span>
                      </div>
                    </div>
                  </div>

                  Central Core
                  <div className="absolute inset-24 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">⚡</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              Connection Lines
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                Left side connections
                <path
                  d="M 0 300 Q 150 300 300 300"
                  stroke="url(#leftGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
                Right side connections
                <path
                  d="M 600 300 Q 450 300 300 300"
                  stroke="url(#rightGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
                
                Gradients
                <defs>
                  <linearGradient id="leftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="rightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          Technology Details Section
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Selected Technology: <span className="text-cyan-400 capitalize">{activeCategory}</span>
              </h3>
            </div>
            
            <div className="min-h-[300px]">
              Dynamic Content Display
              {activeCategory === 'web' && (
                <div className="animate-slideIn">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/30">
                    <div className="text-center mb-12">
                      <div className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-full font-bold text-lg mb-4">
                        🌐 Web Automation
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Cross-Browser Excellence</h3>
                      <p className="text-lg text-gray-300">Headless & Incognito Support • Real Browser Testing • Cloud Infrastructure</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                      {[
                        { name: 'Chrome', icon: '🟢', color: 'from-green-500 to-blue-500', market: '65%', features: ['Headless', 'DevTools', 'Extensions'] },
                        { name: 'Firefox', icon: '🟠', color: 'from-orange-500 to-red-500', market: '18%', features: ['Gecko Engine', 'Privacy', 'Developer'] },
                        { name: 'Edge', icon: '🔵', color: 'from-blue-600 to-cyan-600', market: '10%', features: ['Chromium', 'Enterprise', 'Security'] },
                        { name: 'Safari', icon: '⚪', color: 'from-gray-400 to-blue-500', market: '5%', features: ['WebKit', 'macOS', 'iOS'] },
                        { name: 'Internet Explorer', icon: '🔷', color: 'from-blue-500 to-blue-700', market: '2%', features: ['Legacy', 'Enterprise', 'Compatibility'] }
                      ].map((browser, index) => (
                        <div key={index} className="group">
                          <div className="bg-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-gray-600 hover:border-cyan-400">
                            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${browser.color} flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                              {browser.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white text-center mb-3">{browser.name}</h4>
                            <div className="text-center mb-4">
                              <span className="text-sm text-gray-400">Market Share</span>
                              <div className="text-2xl font-bold text-cyan-400">{browser.market}</div>
                            </div>
                            <div className="space-y-1">
                              {browser.features.map((feature, idx) => (
                                <div key={idx} className="text-center">
                                  <span className="text-xs bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded-full">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              Other technology categories remain similar but with dark theme
              {activeCategory === 'db' && (
                <div className="animate-slideIn">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30">
                    <div className="text-center mb-12">
                      <div className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-bold text-lg mb-4">
                        🗄️ Database Automation
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Complete Database Coverage</h3>
                      <p className="text-lg text-gray-300">SQL & NoSQL • Data Validation • Performance Testing • Schema Management</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {[
                        { name: 'MySQL', icon: '🟡', color: 'from-orange-500 to-blue-600', usage: '39%', type: 'Relational' },
                        { name: 'PostgreSQL', icon: '🔵', color: 'from-blue-500 to-indigo-600', usage: '31%', type: 'Object-Relational' },
                        { name: 'MongoDB', icon: '🟢', color: 'from-green-500 to-green-700', usage: '25%', type: 'Document' },
                        { name: 'Redis', icon: '🔴', color: 'from-red-500 to-red-700', usage: '20%', type: 'Key-Value' },
                        { name: 'Oracle', icon: '🟠', color: 'from-orange-600 to-red-600', usage: '15%', type: 'Enterprise' },
                        { name: 'SQL Server', icon: '🔷', color: 'from-blue-600 to-blue-800', usage: '12%', type: 'Microsoft' },
                        { name: 'Cassandra', icon: '⚫', color: 'from-gray-600 to-purple-600', usage: '8%', type: 'Wide-Column' }
                      ].map((db, index) => (
                        <div key={index} className="group">
                          <div className="bg-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-gray-600 hover:border-green-400">
                            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${db.color} flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                              {db.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white text-center mb-3">{db.name}</h4>
                            <div className="text-center mb-4">
                              <span className="text-sm text-gray-400">Market Usage</span>
                              <div className="text-2xl font-bold text-green-600">{db.usage}</div>
                            </div>
                            <div className="text-center">
                              <span className="text-sm bg-green-900/50 text-green-300 px-3 py-1 rounded-full font-medium">{db.type}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              Similar updates for other categories...
              {activeCategory === 'desktop' && (
                <div className="animate-slideIn">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30">
                    <div className="text-center mb-12">
                      <div className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full font-bold text-lg mb-4">
                        🖥️ Desktop Automation
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Legacy & Modern Applications</h3>
                      <p className="text-lg text-gray-300">Cross-Platform Support • Legacy System Integration • Modern Framework Testing</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {[
                        { name: 'Java Swing', icon: '☕', color: 'from-orange-500 to-red-600', year: '1997', platform: 'Cross-Platform' },
                        { name: 'WinForms', icon: '🪟', color: 'from-blue-500 to-blue-700', year: '2002', platform: 'Windows' },
                        { name: 'WPF', icon: '🔷', color: 'from-blue-600 to-purple-600', year: '2006', platform: 'Windows' },
                        { name: 'Qt', icon: '🔧', color: 'from-green-500 to-blue-600', year: '1995', platform: 'Cross-Platform' },
                        { name: 'Electron', icon: '⚡', color: 'from-cyan-500 to-blue-600', year: '2013', platform: 'Cross-Platform' },
                        { name: 'Tkinter', icon: '🐍', color: 'from-yellow-500 to-green-600', year: '1991', platform: 'Cross-Platform' }
                      ].map((tech, index) => (
                        <div key={index} className="group">
                          <div className="bg-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-gray-600 hover:border-purple-400">
                            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                              {tech.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white text-center mb-3">{tech.name}</h4>
                            <div className="text-center mb-4">
                              <span className="text-sm text-gray-400">Since</span>
                              <div className="text-lg font-bold text-purple-600">{tech.year}</div>
                            </div>
                            <div className="text-center">
                              <span className="text-xs bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full font-medium">{tech.platform}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section> */}

      {/* Automation Capabilities Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-blue-800 font-semibold">Complete Technology Stack</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              One Platform,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                Infinite Possibilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Seamlessly automate testing across every technology in your stack. From legacy mainframes to cutting-edge mobile apps, 
              Select any technology to see our comprehensive support. One platform, unlimited possibilities across your entire tech stack.
            </p>
          </div>
          
          Animated Technology Stack Visualization
          <div className="mb-20">
            <div className="relative max-w-4xl mx-auto">
              Central Hub
              <div className="relative flex items-center justify-center">
                <div className="w-80 h-80 relative">
                  Outer rotating ring
                  <div className="absolute inset-0 rounded-full border-4 border-gray-200 animate-spin" style={{ animationDuration: '20s' }}></div>
                  
                  Inner segments - SDLC phases
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-red-400 via-pink-400 to-purple-400 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">SimplifyQA</div>
                        <div className="text-sm text-gray-600">Complete ALM</div>
                      </div>
                    </div>
                  </div>
                  
                  Technology orbits
                  {[
                    { name: 'WEB', icon: '🌐', angle: 0, color: 'from-blue-500 to-cyan-500' },
                    { name: 'MOBILE', icon: '📱', angle: 60, color: 'from-green-500 to-emerald-500' },
                    { name: 'API', icon: '🔗', angle: 120, color: 'from-purple-500 to-pink-500' },
                    { name: 'SAP', icon: '🏢', angle: 180, color: 'from-orange-500 to-red-500' },
                    { name: 'MAINFRAME', icon: '🖥️', angle: 240, color: 'from-indigo-500 to-purple-500' },
                    { name: 'DB TEST', icon: '🗄️', angle: 300, color: 'from-teal-500 to-cyan-500' }
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="absolute w-20 h-20 animate-spin"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${tech.angle}deg) translateY(-140px) rotate(-${tech.angle}deg)`,
                        animationDuration: '15s',
                        animationDirection: 'reverse'
                      }}
                    >
                      <div className={`w-full h-full bg-gradient-to-br ${tech.color} rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group`}>
                        <div className="text-center">
                          <div className="text-2xl mb-1">{tech.icon}</div>
                          <div className="text-xs font-bold">{tech.name}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              SDLC Phase Labels
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { phase: 'Plan', angle: 30, radius: 200 },
                  { phase: 'Research', angle: 90, radius: 200 },
                  { phase: 'Development', angle: 150, radius: 200 },
                  { phase: 'Testing', angle: 210, radius: 200 },
                  { phase: 'Deployment', angle: 270, radius: 200 },
                  { phase: 'Maintenance', angle: 330, radius: 200 }
                ].map((phase, index) => (
                  <div
                    key={index}
                    className="absolute text-sm font-medium text-gray-500 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${phase.angle}deg) translateY(-${phase.radius}px) rotate(-${phase.angle}deg)`
                    }}
                  >
                    {phase.phase}
                  </div>
                ))}
              </div>
            </div>
            
            Technology Stats
            <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
              {[
                { name: 'Web Browsers', count: '5+', color: 'text-blue-600' },
                { name: 'Mobile Platforms', count: '2', color: 'text-green-600' },
                { name: 'API Protocols', count: '2+', color: 'text-purple-600' },
                { name: 'Enterprise Apps', count: '7+', color: 'text-orange-600' },
                { name: 'Legacy Systems', count: '6+', color: 'text-indigo-600' },
                { name: 'Databases', count: '7+', color: 'text-teal-600' }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.count}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.name}</div>
                </div>
              ))}
            </div>
          </div>
          
          Interactive Circular Technology Selector
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="relative w-96 h-96 mx-auto">
              Central Hub
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl border-4 border-gray-100 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">SimplifyQA</div>
                  <div className="text-xs text-gray-500">Tech Stack</div>
                </div>
              </div>

              Technology Orbits
              {[
                { 
                  id: 'web', 
                  name: 'Web', 
                  icon: '🌐', 
                  color: 'from-blue-500 to-blue-700',
                  angle: 0,
                  count: '5 Browsers'
                },
                { 
                  id: 'mobile', 
                  name: 'Mobile', 
                  icon: '📱', 
                  color: 'from-green-500 to-green-700',
                  angle: 60,
                  count: '2 Platforms'
                },
                { 
                  id: 'api', 
                  name: 'API', 
                  icon: '🔗', 
                  color: 'from-purple-500 to-purple-700',
                  angle: 120,
                  count: '2 Protocols'
                },
                { 
                  id: 'enterprise', 
                  name: 'SAP', 
                  icon: '🏢', 
                  color: 'from-orange-500 to-orange-700',
                  angle: 180,
                  count: '7 Systems'
                },
                { 
                  id: 'desktop', 
                  name: 'Desktop', 
                  icon: '🖥️', 
                  color: 'from-red-500 to-red-700',
                  angle: 240,
                  count: '6 Platforms'
                },
                { 
                  id: 'db', 
                  name: 'Database', 
                  icon: '🗄️', 
                  color: 'from-cyan-500 to-cyan-700',
                  angle: 300,
                  count: '7 Systems'
                }
              ].map((tech, index) => {
                const radius = 140;
                const x = Math.cos((tech.angle - 90) * Math.PI / 180) * radius;
                const y = Math.sin((tech.angle - 90) * Math.PI / 180) * radius;
                
                return (
                  <button
                    key={tech.id}
                    onClick={() => setActiveCategory(tech.id)}
                    className={`absolute w-20 h-20 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
                      activeCategory === tech.id 
                        ? `bg-gradient-to-br ${tech.color} text-white scale-125 shadow-2xl` 
                        : 'bg-white text-gray-700 hover:shadow-xl border-2 border-gray-200'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
                    }}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-1">{tech.icon}</div>
                      <div className="text-xs font-bold">{tech.name}</div>
                    </div>
                    
                    {activeCategory === tech.id && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                        {tech.count}
                      </div>
                    )}
                  </button>
                );
              })}

              Connecting Lines
              {activeCategory && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <radialGradient id="connectionGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                    </radialGradient>
                  </defs>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="140"
                    fill="none"
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                </svg>
              )}
            </div>
          </div>

          Dynamic Content Display
          <div className="relative">
            All Automation Cards in One Row
            <div className="animate-fadeIn">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 mb-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {activeCategory === 'web' && 'Web Automation'}
                    {activeCategory === 'db' && 'Database Automation'}
                    {activeCategory === 'desktop' && 'Desktop Automation'}
                    {activeCategory === 'mobile' && 'Mobile Automation'}
                    {activeCategory === 'api' && 'API Automation'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {activeCategory === 'web' && 'Cross-Browser Testing'}
                    {activeCategory === 'db' && 'SQL & NoSQL Support'}
                    {activeCategory === 'desktop' && 'Legacy & Modern Apps'}
                    {activeCategory === 'mobile' && 'Native & Hybrid Apps'}
                    {activeCategory === 'api' && 'REST • SOAP Protocols'}
                  </p>
                </div>
                
                <div className="flex justify-center overflow-x-auto">
                  <div className="flex gap-3 min-w-max">
                    Web Automation Cards
                    {activeCategory === 'web' && [
                      { name: 'Chrome', icon: '🟢', color: 'from-green-500 to-blue-500', market: '65%' },
                      { name: 'Firefox', icon: '🟠', color: 'from-orange-500 to-red-500', market: '18%' },
                      { name: 'Edge', icon: '🔵', color: 'from-blue-600 to-cyan-600', market: '10%' },
                      { name: 'Safari', icon: '⚪', color: 'from-gray-400 to-blue-500', market: '5%' },
                      { name: 'Internet Explorer', icon: '🔷', color: 'from-blue-500 to-blue-700', market: '2%' }
                    ].map((browser, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-200 border border-blue-100 hover:border-blue-200 w-20">
                          <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${browser.color} flex items-center justify-center text-base mb-2 mx-auto`}>
                            {browser.icon}
                          </div>
                          <h4 className="text-xs font-semibold text-gray-900 text-center mb-1">{browser.name}</h4>
                          <div className="text-center">
                            <div className="text-xs font-medium text-blue-600">{browser.market}</div>
                          </div>
                        </div>
                      </div>
                    ))}

                    Database Automation Cards
                    {activeCategory === 'db' && [
                      { name: 'MySQL', icon: '🟡', color: 'from-orange-500 to-blue-600', type: 'Relational' },
                      { name: 'Oracle', icon: '🔴', color: 'from-red-600 to-red-800', type: 'Enterprise' },
                      { name: 'PostgreSQL', icon: '🔵', color: 'from-blue-500 to-indigo-600', type: 'Open Source' },
                      { name: 'MongoDB', icon: '🟢', color: 'from-green-500 to-green-700', type: 'NoSQL' },
                      { name: 'DB2', icon: '🔷', color: 'from-blue-700 to-blue-900', type: 'Mainframe' },
                      { name: 'SQL Server', icon: '🟥', color: 'from-red-600 to-orange-600', type: 'Microsoft' },
                      { name: 'Cassandra', icon: '⚫', color: 'from-gray-600 to-purple-600', type: 'NoSQL' }
                    ].map((db, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-200 border border-green-100 hover:border-green-200 w-20">
                          <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${db.color} flex items-center justify-center text-base mb-2 mx-auto`}>
                            {db.icon}
                          </div>
                          <h4 className="text-xs font-semibold text-gray-900 text-center mb-1">{db.name}</h4>
                          <div className="text-center">
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{db.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}

                    Desktop Automation Cards
                    {activeCategory === 'desktop' && [
                      { name: 'Java', icon: '🟠', color: 'from-orange-500 to-red-600', platform: 'Cross-Platform' },
                      { name: 'Mainframe', icon: '⬛', color: 'from-gray-600 to-gray-800', platform: 'Legacy' },
                      { name: '.NET', icon: '🟣', color: 'from-blue-500 to-purple-600', platform: 'Windows' },
                      { name: 'Silverlight', icon: '⚪', color: 'from-gray-500 to-blue-600', platform: 'Desktop' },
                      { name: 'Flex', icon: '🔶', color: 'from-red-500 to-pink-600', platform: 'Adobe' },
                      { name: 'WinForms', icon: '🟦', color: 'from-blue-600 to-cyan-600', platform: 'Windows' },
                      { name: 'WPF', icon: '🔷', color: 'from-blue-800 to-purple-800', platform: 'Windows' }
                    ].map((tech, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-200 border border-purple-100 hover:border-purple-200 w-20">
                          <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${tech.color} flex items-center justify-center text-base mb-2 mx-auto`}>
                            {tech.icon}
                          </div>
                          <h4 className="text-xs font-semibold text-gray-900 text-center mb-1">{tech.name}</h4>
                          <div className="text-center">
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">{tech.platform}</span>
                          </div>
                        </div>
                      </div>
                    ))}


                    Mobile Automation Cards
                    {activeCategory === 'mobile' && [
                      { name: 'Android', icon: '🟢', color: 'from-green-500 to-green-700', share: '71%' },
                      { name: 'iOS', icon: '⚪', color: 'from-gray-700 to-gray-900', share: '28%' },
                      { name: 'React Native', icon: '🔵', color: 'from-blue-500 to-cyan-500', share: 'Hybrid' },
                      { name: 'Flutter', icon: '🔷', color: 'from-blue-400 to-purple-500', share: 'Hybrid' },
                      { name: 'Xamarin', icon: '🟣', color: 'from-purple-500 to-pink-500', share: 'Hybrid' }
                    ].map((platform, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-200 border border-pink-100 hover:border-pink-200 w-20">
                          <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${platform.color} flex items-center justify-center text-base mb-2 mx-auto`}>
                            {platform.icon}
                          </div>
                          <h4 className="text-xs font-semibold text-gray-900 text-center mb-1">{platform.name}</h4>
                          <div className="text-center">
                            <div className="text-xs font-medium text-pink-600">{platform.share}</div>
                          </div>
                        </div>
                      </div>
                    ))}

                    API Automation Cards
                    {activeCategory === 'api' && [
                      { name: 'REST', icon: '🟢', color: 'from-green-600 to-blue-600', usage: '85%' },
                      { name: 'SOAP', icon: '🟡', color: 'from-yellow-500 to-orange-600', usage: '15%' },
                      { name: 'GraphQL', icon: '🟣', color: 'from-purple-500 to-pink-600', usage: 'Modern' },
                      { name: 'gRPC', icon: '🔵', color: 'from-blue-600 to-cyan-600', usage: 'High-Perf' }
                    ].map((protocol, index) => (
                      <div key={index} className="group">
                        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-200 border border-cyan-100 hover:border-cyan-200 w-20">
                          <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${protocol.color} flex items-center justify-center text-base mb-2 mx-auto`}>
                            {protocol.icon}
                          </div>
                          <h4 className="text-xs font-semibold text-gray-900 text-center mb-1">{protocol.name}</h4>
                          <div className="text-center">
                            <div className="text-xs font-medium text-blue-600">{protocol.usage}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          Bottom Stats
          <div className="mt-20 relative">
            Background with subtle pattern
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl opacity-95"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] rounded-3xl"></div>
            
            <div className="relative p-12 text-white">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                  <Target className="w-5 h-5 text-blue-300 mr-2" />
                  <span className="text-blue-200 font-semibold">Platform Statistics</span>
                </div>
                <h3 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  Complete Technology Coverage
                </h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  One unified platform engineered to handle every aspect of your automation needs across all technology stacks
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">29+</div>
                  <div className="text-gray-300 text-lg font-medium">Technologies Supported</div>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                    <span className="text-3xl">📊</span>
                  </div>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">6</div>
                  <div className="text-gray-300 text-lg font-medium">Automation Categories</div>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                    <span className="text-3xl">✅</span>
                  </div>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-gray-300 text-lg font-medium">Platform Coverage</div>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">0</div>
                  <div className="text-gray-300 text-lg font-medium">Setup Complexity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Platform Ecosystem Section */}
      {/* <section className="py-12 bg-gray-900 relative overflow-hidden">
        Subtle Grid Background
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          Header
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">The SimplifyQA Platform.</span>
            </h2>
            <p className="text-xl md:text-2xl mb-4">
              <span className="text-white font-semibold">Powered by AI Agents, Driven by You.</span>
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Enterprise-ready test automation platform for every application, solution and use-case.
            </p>
          </div>

          Professional Platform Architecture
          <div className="relative">
            Top Tier - Core Capabilities
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-cyan-300 mb-4 text-center border-b border-slate-700 pb-2">Testing Solutions</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Accessibility Testing</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Visual Regression</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Cross-browser Testing</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Performance Testing</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-4 text-center border-b border-slate-700 pb-2">Lab & Operations</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-slate-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                    <span>SimplifyQA Lab</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                    <span>Test Management</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                    <span>CI/CD Integration</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                    <span>Cloud Infrastructure</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-4 text-center border-b border-slate-700 pb-2">Testing Types</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-slate-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    <span>Functional Testing</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    <span>Regression Testing</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    <span>Load Testing</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    <span>Integration Testing</span>
                  </div>
                </div>
              </div>
            </div>

            Central Platform Core
            <div className="flex justify-center mb-12">
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-2 rounded-lg border border-slate-600">
                <span className="text-white font-medium text-sm uppercase tracking-wider">Core Platform</span>
              </div>
            </div>

            Enterprise Ecosystem Grid
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              Left - Enterprise Systems
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider text-center mb-6">Enterprise Systems</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Salesforce', category: 'CRM Platform', color: 'bg-blue-600' },
                    { name: 'SAP', category: 'ERP Solution', color: 'bg-blue-700' },
                    { name: 'Workday', category: 'HR Platform', color: 'bg-orange-600' },
                    { name: 'ServiceNow', category: 'ITSM Platform', color: 'bg-green-600' },
                    { name: 'Oracle Fusion', category: 'Cloud ERP', color: 'bg-red-600' }
                  ].map((system, index) => (
                    <div key={index} className="bg-slate-800/60 border border-slate-700/50 rounded-lg p-4 hover:border-slate-600/50 transition-all duration-300">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 ${system.color} rounded-full mr-3`}></div>
                        <div>
                          <div className="text-white font-medium text-sm">{system.name}</div>
                          <div className="text-slate-400 text-xs">{system.category}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              Center - AI Core Platform
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  Outer Ring
                  <div className="w-64 h-64 rounded-full border border-slate-600/50 flex items-center justify-center relative">
                    Connection Points
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>

                    Inner Platform Core
                    <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full border border-slate-600 flex flex-col items-center justify-center shadow-2xl">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-2">
                        <Settings className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-white font-semibold text-xs text-center">AI Engine</div>
                      <div className="text-slate-400 text-xs">Core Platform</div>
                    </div>
                  </div>
                </div>
              </div>

              Right - Application Types
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider text-center mb-6">Application Types</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Web Applications', category: 'Cross-browser', color: 'bg-pink-600', icon: Globe },
                    { name: 'Mobile Apps', category: 'iOS & Android', color: 'bg-purple-600', icon: Smartphone },
                    { name: 'API Services', category: 'REST & SOAP', color: 'bg-cyan-600', icon: Zap },
                    { name: 'Desktop Apps', category: 'Legacy & Modern', color: 'bg-blue-600', icon: Cpu },
                    { name: 'Databases', category: 'SQL & NoSQL', color: 'bg-green-600', icon: BarChart3 }
                  ].map((app, index) => (
                    <div key={index} className="bg-slate-800/60 border border-slate-700/50 rounded-lg p-4 hover:border-slate-600/50 transition-all duration-300">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 ${app.color} rounded-lg flex items-center justify-center mr-3`}>
                          <app.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">{app.name}</div>
                          <div className="text-slate-400 text-xs">{app.category}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            Enterprise Ready Badge
            <div className="flex justify-center mb-12">
              <div className="bg-gradient-to-r from-orange-600/20 to-yellow-600/20 backdrop-blur-sm border border-orange-500/30 px-6 py-2 rounded-lg">
                <span className="text-orange-300 font-medium text-sm uppercase tracking-wider">Enterprise Ready</span>
              </div>
            </div>

            Bottom Tier - Enterprise Features
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              Deployment
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-300 mb-4 text-center border-b border-slate-700 pb-2">Deployment Options</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between text-slate-300">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-orange-600 rounded-md flex items-center justify-center mr-3">
                        <span className="text-white text-xs">☁️</span>
                      </div>
                      <span>Public Cloud</span>
                    </div>
                    <div className="text-xs text-slate-500">AWS, Azure, GCP</div>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-orange-700 rounded-md flex items-center justify-center mr-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>Private Cloud</span>
                    </div>
                    <div className="text-xs text-slate-500">Dedicated</div>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-orange-800 rounded-md flex items-center justify-center mr-3">
                        <div className="w-3 h-2 bg-white rounded-sm"></div>
                      </div>
                      <span>On-premises</span>
                    </div>
                    <div className="text-xs text-slate-500">Self-hosted</div>
                  </div>
                </div>
              </div>

              Integrations
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-300 mb-4 text-center border-b border-slate-700 pb-2">Integrations</h3>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { name: 'Jira', color: 'bg-blue-600' },
                    { name: 'Jenkins', color: 'bg-red-600' },
                    { name: 'GitHub', color: 'bg-gray-700' },
                    { name: 'Slack', color: 'bg-purple-600' },
                    { name: 'Teams', color: 'bg-blue-700' },
                    { name: 'GitLab', color: 'bg-orange-600' },
                    { name: 'Azure', color: 'bg-cyan-600' },
                    { name: 'AWS', color: 'bg-yellow-600' }
                  ].map((integration, index) => (
                    <div key={index} className={`${integration.color} rounded-md p-2 flex items-center justify-center hover:scale-105 transition-transform duration-200`}>
                      <span className="text-white text-xs font-medium">{integration.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              Security & Compliance
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-300 mb-4 text-center border-b border-slate-700 pb-2">Security & Compliance</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'SOC 2', color: 'bg-slate-700' },
                    { name: 'GDPR', color: 'bg-green-700' },
                    { name: 'ISO 27001', color: 'bg-blue-700' },
                    { name: 'HIPAA', color: 'bg-purple-700' },
                    { name: 'PCI DSS', color: 'bg-red-700' },
                    { name: 'FedRAMP', color: 'bg-yellow-700' }
                  ].map((cert, index) => (
                    <div key={index} className={`${cert.color} rounded-md p-3 text-center hover:scale-105 transition-transform duration-200`}>
                      <span className="text-white text-xs font-bold">{cert.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            Platform Capabilities
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">200+</div>
                  <div className="text-slate-400 text-sm">Integrations</div>
                </div>
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-1">99.9%</div>
                  <div className="text-slate-400 text-sm">Uptime SLA</div>
                </div>
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1">24/7</div>
                  <div className="text-slate-400 text-sm">AI Monitoring</div>
                </div>
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-1">500+</div>
                  <div className="text-slate-400 text-sm">Enterprise Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Everything You Need Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <Users className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Smarter Control</h3>
                        <p className="text-blue-600 font-medium text-sm">One sign-in for all roles</p>
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
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Assistance */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <Cpu className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">AI Assistance</h3>
                        <p className="text-purple-600 font-medium text-sm">AI-generated acceptance criteria</p>
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
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
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
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <BarChart3 className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Dynamic Test Data</h3>
                        <p className="text-green-600 font-medium text-sm">Auto-generate data</p>
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
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Virtualization & Integrations */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <GitBranch className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Virtualization & Integrations</h3>
                        <p className="text-cyan-600 font-medium text-sm">DevOps integration</p>
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
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
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
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Modern Execution</h3>
                        <p className="text-orange-600 font-medium text-sm">Resume failed runs from any step</p>
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
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Powerful Reporting */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <BarChart3 className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Powerful Reporting</h3>
                        <p className="text-indigo-600 font-medium text-sm">Drag-and-drop requirements</p>
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
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
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

      {/* Comprehensive Webinar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full mb-6">
              <Play className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-semibold">Expert Webinars</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learn from Industry Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join our live sessions and access our extensive library of on-demand webinars covering 
              everything from automation basics to advanced enterprise strategies.
            </p>
          </div>

          {/* Upcoming Webinar Spotlight */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 mb-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse mr-3"></div>
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    Next Live Session
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {upcomingWebinar.title}
                </h3>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                  {upcomingWebinar.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center text-blue-100 mb-2">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">Date & Time</span>
                    </div>
                    <div className="text-white font-bold">{upcomingWebinar.date}</div>
                    <div className="text-blue-200">{upcomingWebinar.time}</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center text-blue-100 mb-2">
                      <Users className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">Registrations</span>
                    </div>
                    <div className="text-white font-bold text-2xl">{upcomingWebinar.registrations.toLocaleString()}</div>
                    <div className="text-blue-200 text-sm">and counting...</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsWebinarFormOpen(true)}
                    className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center w-full"
                  >
                    Register Free Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-blue-600 px-6 py-4 rounded-xl font-semibold transition-all">
                    Add to Calendar
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={upcomingWebinar.image}
                  alt="Upcoming Webinar"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Past Webinars Library */}
          <div>
            <div className="flex justify-between items-center mb-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">On-Demand Webinar Library</h3>
                <p className="text-lg text-gray-600">Access our complete collection of expert-led sessions</p>
              </div>
              <button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all items-center">
                View All Sessions
                <ExternalLink className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img
                      src={webinar.thumbnail}
                      alt={webinar.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {webinar.duration}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {webinar.views.toLocaleString()} views
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {webinar.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="font-medium">{webinar.presenter}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{webinar.date}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center">
                        Watch Now
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Webinar Stats & CTA */}
            <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Join Our Growing Community
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Subscribe to our webinar series and never miss expert insights, product updates, 
                    and exclusive Q&A sessions with our team.
                  </p>
                  <button
                    onClick={() => setIsWebinarFormOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center"
                  >
                    Subscribe to Webinars
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                    <div className="text-gray-600">Expert Sessions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-1">15K+</div>
                    <div className="text-gray-600">Total Attendees</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-1">4.9/5</div>
                    <div className="text-gray-600">Average Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
                    <div className="text-gray-600">Free Access</div>
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
        presenter={upcomingWebinar.presenter}
      />
      {/* Demo Request Form */}
      <DemoRequestForm
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Testing Strategy
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover how SimplifyQA delivers the comprehensive automation capabilities 
                your team needs to deliver quality software at scale.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Reduce manual testing effort by 80%",
                  "Accelerate release cycles by 60%",
                  "Improve test coverage across all platforms",
                  "Real-time collaboration for distributed teams",
                  "Enterprise-grade security and compliance"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 rounded-3xl p-12 border border-slate-700/50">
                {/* Central Platform Visual */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">⚡</span>
                        </div>
                      </div>
                    </div>
                    {/* Connection Lines */}
                    <div className="absolute top-1/2 left-full w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                    <div className="absolute top-1/2 right-full w-16 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent"></div>
                    <div className="absolute left-1/2 top-full h-16 w-0.5 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                    <div className="absolute left-1/2 bottom-full h-16 w-0.5 bg-gradient-to-t from-cyan-400 to-transparent"></div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  One Unified Platform, Infinite Possibilities
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                  Experience the power of integrated testing capabilities working seamlessly together. 
                  From intelligent automation to comprehensive analytics, everything connects.
                </p>

                {/* Platform Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">6</div>
                    <div className="text-slate-400 text-sm">Core Capabilities</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
                    <div className="text-slate-400 text-sm">Scalability</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">1</div>
                    <div className="text-slate-400 text-sm">Unified Platform</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">0</div>
                    <div className="text-slate-400 text-sm">Setup Complexity</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center shadow-lg">
                    Experience the Platform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setIsDemoFormOpen(true)}
                    className="border-2 border-slate-600 hover:border-slate-500 text-white hover:bg-slate-800 px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center justify-center"
                  >
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
      <section className="py-20 bg-gray-900">
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