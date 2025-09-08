import React from 'react';
import { Calendar, Download, Play, BookOpen, Users, ArrowRight } from 'lucide-react';

const ResourcesPage = () => {
  const blogPosts = [
    {
      title: "10 Best Practices for Test Automation",
      excerpt: "Learn the essential strategies that top QA teams use to maximize their testing efficiency and coverage.",
      category: "Best Practices",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "Dec 15, 2024"
    },
    {
      title: "AI in Testing: The Future is Now",
      excerpt: "Explore how artificial intelligence is revolutionizing software testing and quality assurance processes.",
      category: "Technology",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "Dec 12, 2024"
    },
    {
      title: "Building a Scalable Testing Framework",
      excerpt: "Step-by-step guide to creating a testing framework that grows with your organization.",
      category: "Framework",
      readTime: "15 min read", 
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      date: "Dec 10, 2024"
    }
  ];

  const whitepapers = [
    {
      title: "The Complete Guide to Test Automation ROI",
      description: "Calculate and maximize the return on investment for your test automation initiatives.",
      pages: "32 pages",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      title: "Enterprise Testing Security Framework",
      description: "Best practices for implementing secure testing processes in enterprise environments.",
      pages: "28 pages",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      title: "Mobile Testing Strategy Guide",
      description: "Comprehensive strategies for testing mobile applications across different platforms and devices.",
      pages: "24 pages",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    }
  ];

  const webinars = [
    {
      title: "Advanced Test Automation Techniques",
      presenter: "Sarah Johnson, QA Expert",
      date: "Jan 25, 2025",
      time: "2:00 PM EST",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Scaling QA in Agile Environments", 
      presenter: "Michael Chen, DevOps Engineer",
      date: "Feb 8, 2025",
      time: "1:00 PM EST",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Resources & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Learning Hub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expand your testing knowledge with our comprehensive collection of guides, 
            best practices, and expert insights.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
              <p className="text-lg text-gray-600">Stay up-to-date with testing trends and SimplifyQA updates</p>
            </div>
            <button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors items-center">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                    <span className="mx-2">•</span>
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              In-Depth Guides & Whitepapers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources to help you master testing strategies and implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((whitepaper, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <img
                  src={whitepaper.image}
                  alt={whitepaper.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {whitepaper.pages}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {whitepaper.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {whitepaper.description}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all w-full flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our experts for live sessions on testing best practices and SimplifyQA features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Play className="h-16 w-16 text-white opacity-80" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {webinar.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Users className="h-4 w-4 mr-2" />
                    {webinar.presenter}
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    {webinar.date} at {webinar.time}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all w-full">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get Started with SimplifyQA Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to put your new knowledge into practice? Start your free trial now.
          </p>
          <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center mx-auto">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;