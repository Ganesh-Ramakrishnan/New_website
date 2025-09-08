import React from 'react';
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';

const IntegrationsPage = () => {
  const integrationCategories = [
    {
      title: "CI/CD & DevOps",
      description: "Seamlessly integrate with your development pipeline",
      integrations: [
        { name: "Jenkins", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "GitHub Actions", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "GitLab CI", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "Azure DevOps", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "CircleCI", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "TeamCity", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" }
      ]
    },
    {
      title: "Project Management",
      description: "Connect with your project tracking and management tools",
      integrations: [
        { name: "Jira", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "Azure Boards", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "Trello", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "Monday.com", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "Linear", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "Asana", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" }
      ]
    },
    {
      title: "Communication",
      description: "Stay informed with real-time notifications and updates",
      integrations: [
        { name: "Slack", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "Microsoft Teams", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "Discord", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "Email", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "Webhooks", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "PagerDuty", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" }
      ]
    },
    {
      title: "Test Management",
      description: "Integrate with existing test management and quality assurance tools",
      integrations: [
        { name: "TestRail", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "Zephyr", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "qTest", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "ALM", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "Xray", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" },
        { name: "Allure", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" }
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            200+ Integrations for 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Seamless Workflows</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect SimplifyQA with your existing toolchain. From project management to deployment, 
            we integrate with the tools your team already loves.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center mx-auto">
            Explore All Integrations
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {integrationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.integrations.map((integration, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-center">
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="w-12 h-12 mx-auto mb-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {integration.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Powerful REST API
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Build custom integrations and extend SimplifyQA's capabilities with our 
                comprehensive REST API. Complete documentation and SDKs available.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "RESTful API with OpenAPI specification",
                  "SDKs for popular programming languages",
                  "Webhook support for real-time updates",
                  "Rate limiting and authentication",
                  "Comprehensive documentation"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center">
                  View API Docs
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
                <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all">
                  Download SDKs
                </button>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-8 overflow-hidden">
              <pre className="text-green-400 text-sm overflow-x-auto">
{`// Example API call
const response = await fetch('/api/v1/tests', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'User Login Flow',
    type: 'web',
    browser: 'chrome',
    steps: [...]
  })
});

const test = await response.json();
console.log('Test created:', test.id);`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Connect Your Tools?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start integrating SimplifyQA with your existing workflow in minutes.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default IntegrationsPage;