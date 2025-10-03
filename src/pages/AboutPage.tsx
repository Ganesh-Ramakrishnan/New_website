import { ArrowRight, Award, Target, Users } from 'lucide-react';

import { useEffect } from 'react';
const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const team = [
    {
      name: "Alex Rivera",
      role: "CEO & Co-Founder",
      bio: "Former VP of Engineering at TestTech with 15+ years in quality assurance and test automation.",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Dr. Sarah Kim",
      role: "CTO & Co-Founder",
      bio: "PhD in Computer Science, former Principal Engineer at Google focusing on testing infrastructure.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Marcus Johnson",
      role: "VP of Engineering",
      bio: "Led testing teams at Microsoft and Amazon, expert in scalable testing architectures.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Customer Success",
      bio: "15+ years helping enterprise customers optimize their testing and quality processes.",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Quality First",
      description: "We believe quality software starts with quality testing. Every decision we make prioritizes helping our customers deliver better products."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Customer Success",
      description: "Your success is our success. We're committed to providing the tools, support, and expertise needed to achieve your testing goals."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in testing automation, leveraging the latest technologies and methodologies."
    }
  ];

  const milestones = [
    { year: "2019", title: "Company Founded", description: "SimplifyQA was born from the frustration of complex testing workflows." },
    { year: "2020", title: "First Enterprise Customer", description: "Signed our first Fortune 500 customer and proved enterprise viability." },
    { year: "2021", title: "AI Integration", description: "Launched AI-powered test generation, revolutionizing automated testing." },
    { year: "2022", title: "Series A Funding", description: "Raised $25M Series A to accelerate product development and growth." },
    { year: "2023", title: "Global Expansion", description: "Expanded operations to serve customers across North America and Europe." },
    { year: "2024", title: "1M+ Tests Daily", description: "Platform now processes over 1 million test executions daily." }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Building the Future of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Testing</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded by testing experts who understand the challenges of delivering quality software at scale.
                We're on a mission to simplify testing for every development team worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center" style={{ background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' }}>
                  Join Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all">
                  Our Story
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="SimplifyQA Team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Illustrated sections: left image, right text (repeatable) */}
      <section className='plan_white_bg'>

        <div className="w-full md:w-[85%] lg:w-[85%] mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              The SimplifyQA Story
            </h2>
          </div>
          {/* small reusable section component */}
          {/* eslint-disable-next-line react/no-unstable-nested-components */}
          {(() => {
            const IllustratedSection = ({ img, title, text, reverse = false }: { img: string; title: string; text: string; reverse?: boolean }) => (
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full rounded-lg p-2">
                  <img src={img} alt={title} />
                </div>
                <div className="w-full rounded-lg p-8">
                  <p className="text-black leading-relaxed">{text}</p>
                </div>
              </div>
            );

            const illustrations = [
              '/assets/illustrate/about-01.avif',
              '/assets/illustrate/about-02.avif',
              '/assets/illustrate/about-09.avif',
            ];

            const sections = [
              {
                title: 'Quality Assurance', text: `Quality Assurance was supposed to make software better. Instead, somewhere along the way, it became complicated.

  Ever counted how many apps you juggle every day for testing? There was a time when manual checklists and spreadsheets ruled the quality game. Then came the age of automation, where scripts took center stage—but also deepened the rift between "functional" and "technical" teams. One tool for test management, another for automation, a third for defect tracking. Teams started working in silos, wasting more time switching tabs than actually improving quality. The very process meant to ensure confidence in software ended up creating chaos.` },

              { title: 'Our Vision', text: `We started SimplifyQA because we believed testing deserved better. Our vision was simple: to build a platform where all those scattered parts finally fit together. A single, unified space where test planning, automation, execution, and reporting all live together—like LEGO blocks snapped into a single, intuitive workspace.` },

              { title: 'Inclusivity', text: `At the heart of our platform is inclusivity. We pioneered scriptless automation so that anyone—whether a tester, developer, or business user—can create and run a test case without needing to know code. Testing shouldn’t belong only to specialists. It should be something every team member can contribute to.` },

              { title: 'Built for Impact', text: `But unifying tools wasn’t enough. We wanted to push QA forward. That’s why SimplifyQA is built with impact analysis that sees change before it breaks things, cloud execution that finishes in hours what used to take days, and dashboards that turn raw data into clear decisions.` },

              { title: 'Our Belief', text: `More than a platform, SimplifyQA is a belief: that quality should be simple, scalable, and accessible for everyone. We invest heavily in innovation, listening to real teams, solving real bottlenecks, and constantly evolving our platform to match the pace of technology. Today, SimplifyQA is trusted by teams across industries and geographies who share the same frustration we once felt—and the same dream we’re building toward.` },

              { title: 'Inventing the Future', text: `Because we believe the best way to predict the future of quality is not to wait for it. It's to invent it—and make it radically accessible for everyone.` }
            ];

            return (
              <>
                {sections.map((s, i) => (
                  <IllustratedSection
                    key={i}
                    img={illustrations[i % illustrations.length]}
                    title={s.title}
                    text={s.text}
                    reverse={i % 2 === 1}
                  />
                ))}
              </>
            );
          })()}
        </div>
      </section>


      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by a commitment to excellence, innovation, and customer success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced leaders driving SimplifyQA's vision and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center group feature-gradient-bg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <button className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From startup to industry leader - here's how we've grown.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start mb-12">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                <div className="ml-16">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals who share our passion for quality software.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            View Open Positions
          </button>
        </div>
      </section> */}



    </div>
  );
};

export default AboutPage;