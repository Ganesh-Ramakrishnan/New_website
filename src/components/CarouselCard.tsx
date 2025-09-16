import { BarChart3, Cloud, GitBranch, Globe, Plus, Shield, Zap } from 'lucide-react';
import React, { useState } from 'react';

const cards = [
  {
    title: 'AI-Powered Test Generation',
    header: 'Intelligent automation at scale',
    description: `Leverage advanced machine learning algorithms to automatically generate comprehensive test cases that understand your application structure, user flows, and business logic.<ul style='margin-top:16px;text-align:left;'><li><b>Smart Test Creation:</b> AI analyzes your app and generates relevant test scenarios automatically</li><li><b>Intelligent Assertions:</b> Automatically generates meaningful assertions based on UI elements and data</li><li><b>Self-Healing Tests:</b> Tests automatically adapt to UI changes, reducing maintenance by 70%</li><li><b>Pattern Recognition:</b> Learns from existing tests to suggest improvements and optimizations</li></ul>`,
    icon: <Zap className="w-8 h-8 text-white" />,
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Cross-Platform Testing',
    header: 'Test everywhere, deploy with confidence',
    description: `Execute tests across web browsers, mobile devices, APIs, and desktop applications from a single platform. Ensure consistent user experience across all touchpoints.<ul style='margin-top:16px;text-align:left;'><li><b>Web Testing:</b> Chrome, Firefox, Safari, Edge - all browsers covered with headless support</li><li><b>Mobile Testing:</b> Real device testing on iOS and Android with cloud device farm</li><li><b>API Testing:</b> REST, SOAP, GraphQL - comprehensive API validation and performance testing</li><li><b>Desktop Apps:</b> Windows, macOS, Linux desktop application testing support</li></ul>`,
    icon: <Globe className="w-8 h-8 text-white" />,
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    title: 'Enterprise Security',
    header: 'Bank-grade security and compliance',
    description: `Meet the highest security standards with SOC 2 Type II compliance, end-to-end encryption, and comprehensive audit logging for enterprise peace of mind.<ul style='margin-top:16px;text-align:left;'><li><b>SOC 2 Compliance:</b> Type II certified with regular third-party security audits</li><li><b>Data Encryption:</b> End-to-end encryption for data in transit and at rest</li><li><b>Access Control:</b> Role-based permissions with SSO and multi-factor authentication</li><li><b>Audit Logging:</b> Comprehensive activity logs for compliance and security monitoring</li></ul>`,
    icon: <Shield className="w-8 h-8 text-white" />,
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    title: 'Advanced Analytics',
    header: 'Data-driven testing insights',
    description: `Transform testing data into actionable insights with real-time dashboards, predictive analytics, and comprehensive reporting that drives continuous improvement.<ul style='margin-top:16px;text-align:left;'><li><b>Real-time Dashboards:</b> Live test execution monitoring with customizable views</li><li><b>Predictive Analytics:</b> AI-powered insights to predict and prevent quality issues</li><li><b>Custom Reports:</b> Executive summaries and detailed technical reports</li><li><b>Trend Analysis:</b> Historical data analysis to identify patterns and improvements</li></ul>`,
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    gradient: 'from-orange-600 to-red-600'
  },
  {
    title: 'CI/CD Integration',
    header: 'Seamless DevOps workflow',
    description: `Integrate seamlessly with your existing DevOps pipeline. Trigger tests automatically, get instant feedback, and maintain quality gates throughout your development process.<ul style='margin-top:16px;text-align:left;'><li><b>Pipeline Integration:</b> Jenkins, GitHub Actions, GitLab CI, Azure DevOps support</li><li><b>Quality Gates:</b> Automated quality checks that prevent bad code from deploying</li><li><b>Parallel Execution:</b> Run thousands of tests simultaneously for faster feedback</li><li><b>Smart Notifications:</b> Contextual alerts via Slack, Teams, email, and webhooks</li></ul>`,
    icon: <GitBranch className="w-8 h-8 text-white" />,
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    title: 'Cloud Execution',
    header: 'Infinite scale, zero infrastructure',
    description: `Execute tests at massive scale with our cloud infrastructure. No setup required, automatic scaling, and global availability for consistent performance worldwide.<ul style='margin-top:16px;text-align:left;'><li><b>Auto Scaling:</b> Automatically scale resources based on test execution demand</li><li><b>Global Infrastructure:</b> Test from multiple geographic locations for performance validation</li><li><b>Zero Maintenance:</b> No infrastructure to manage - focus on testing, not servers</li><li><b>Cost Optimization:</b> Pay only for what you use with intelligent resource allocation</li></ul>`,
    icon: <Cloud className="w-8 h-8 text-white" />,
    gradient: 'from-pink-600 to-rose-600'
  },
];

const CarouselCard: React.FC = () => {
  const [modalFade, setModalFade] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  React.useEffect(() => {
    if (openIndex !== null) {
      setModalFade(false);
      setTimeout(() => setModalFade(true), 10);
    } else {
      setModalFade(false);
    }
    if (openIndex !== null) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [openIndex]);

  const cardStyle = (isOpen: boolean) => ({
    cursor: 'pointer',
    padding: '32px',
    borderRadius: '16px',
    background: '#fff',
    boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
    ...(isOpen
      ? {
        position: 'fixed' as const,
        left: '50%',
        top: '50%',
        zIndex: 1000,
        overflow: 'hidden',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 1.2s',
        margin: 0,
        opacity: modalVisible ? 1 : 0,
      }
      : {
        transform: 'none',
        opacity: 1,
      }
    ),
    pointerEvents: 'auto' as 'auto',
  });

  return (
    <>
      {openIndex !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgb(28 28 28 / 91%)',
            zIndex: 999,
            opacity: modalFade ? 1 : 0,
            transition: 'opacity 1.2s',
          }}
          onClick={() => setOpenIndex(null)}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {cards.slice(0, 3).map((card, idx) => (
          <div
            key={idx}
            className="comprehensive_card_main position-relative bg-white/80 feature-gradient-bg liener_bg"
            style={cardStyle(openIndex === idx)}
            aria-haspopup="dialog"
            aria-expanded={openIndex === idx}
            aria-controls={`card-${idx}`}
            data-state={openIndex === idx ? 'open' : 'closed'}
            onClick={() => openIndex === null && setOpenIndex(idx)}
          >
            {openIndex !== idx ? (
              <div className="text-center" style={{ cursor: 'pointer' }}>
                <div className={`w-16 m-auto h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 comprehensive_card_header">{card.title}</h3>
                  <p className="font-medium comprehensive_card_subHeader light_grey" style={{ color: '#dd246a', fontSize: 12, fontWeight: 500 }}>{card.header}</p>
                </div>
                <div className="flex justify-end items-center mt-4">
                  <Plus 
                    className="plus-custom-icon"
                    style={{
                      color: 'white',
                      border: '1px solid #3b3b3b',
                      padding: '5px',
                      height: '35px',
                      width: '35px',
                      borderRadius: '5px',
                      marginTop: '13px',
                    }}
                  />
                </div>
                {/* Description removed from collapsed card view */}
              </div>
            ) : (
              <>
                <button
                  style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    zIndex: 1001,
                    border: 'none',
                    borderRadius: '50%',
                    width: 32,
                    height: 32,
                    cursor: 'pointer',
                    fontSize: 18,
                    pointerEvents: 'auto',
                  }}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); setOpenIndex(null); }}
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="text-center" style={{ marginTop: 32, color: '#fff' }}>
                  <div className={`w-16 m-auto h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold comprehensive_card_header" style={{ marginTop: 16, color: '#fff' }}>{card.title}</h3>
                  <p className="font-medium comprehensive_card_subHeader light_grey" style={{ color: '#dd246a', fontSize: 12, fontWeight: 500, marginTop: 8 }}>{card.header}</p>
                  <div className='light_grey' style={{ color: '#fff', fontSize: '1rem', fontWeight: 400, marginTop: 16 }} dangerouslySetInnerHTML={{ __html: card.description }} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
        {cards.slice(3, 6).map((card, idx) => (
          <div
            key={idx + 3}
            className="comprehensive_card_main bg-white/80 feature-gradient-bg liener_bg"
            style={cardStyle(openIndex === idx + 3)}
            aria-haspopup="dialog"
            aria-expanded={openIndex === idx + 3}
            aria-controls={`card-${idx + 3}`}
            data-state={openIndex === idx + 3 ? 'open' : 'closed'}
            onClick={() => openIndex === null && setOpenIndex(idx + 3)}
          >
            {openIndex !== idx + 3 ? (
              <div className="text-center">
                <div className={`w-16 m-auto h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 comprehensive_card_header">{card.title}</h3>
                  <p className="font-medium comprehensive_card_subHeader light_grey" style={{ color: '#dd246a', fontSize: 12, fontWeight: 500 }}>{card.header}</p>
                </div>
                <div className="flex justify-end items-center mt-4">
                  <Plus 
                    className="plus-custom-icon"
                    style={{
                      color: 'white',
                      border: '1px solid #3b3b3b',
                      padding: '5px',
                      height: '35px',
                      width: '35px',
                      borderRadius: '5px',
                      marginTop: '13px',
                    }}
                  />
                </div>
                {/* Description removed from collapsed card view */}
              </div>
            ) : (
              <>
                <button
                  style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    zIndex: 1001,
                    border: 'none',
                    borderRadius: '50%',
                    width: 32,
                    height: 32,
                    cursor: 'pointer',
                    fontSize: 18,
                    pointerEvents: 'auto',
                  }}
                  onClick={e => { e.stopPropagation(); setOpenIndex(null); }}
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="text-center" style={{ marginTop: 32 }}>
                  <div className={`w-16 m-auto h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 comprehensive_card_header" style={{ marginTop: 16 }}>{card.title}</h3>
                  <p className="font-medium comprehensive_card_subHeader light_grey" style={{ color: '#dd246a', fontSize: 12, fontWeight: 500, marginTop: 8 }}>{card.header}</p>
                  <div className="flex justify-center items-center mt-4">
                    {/* Plus icon removed from expanded view */}
                  </div>
                  <div style={{ color: '#fff', fontSize: '1rem', fontWeight: 400, marginTop: 16 }} dangerouslySetInnerHTML={{ __html: card.description }} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CarouselCard;