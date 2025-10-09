import { User } from 'lucide-react';
import { useState } from 'react';

interface Story {
  id: number;
  title: string;
  name: string;
  description: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  quote: string;
  quoteHighlights: string[];
}

const stories: Story[] = [
  {
    id: 1,
    title: "Sarah Johnson",
    name: "Sarah Johnson",
    description: "SimplifyQA reduced our testing time by 70% while improving coverage. The AI-powered features are game-changers for our team.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    metrics: [
      { label: "Time Saved", value: "70%" },
      { label: "Test Coverage", value: "95%" },
      { label: "Team Satisfaction", value: "9.8/10" }
    ],
    quote: "SimplifyQA reduced our testing time by 70% while improving coverage. The AI-powered features are game-changers for our team.",
    quoteHighlights: ["AI-powered", "game-changers"]
  },
  {
    id: 2,
    title: "Michael Chen",
    name: "Michael Chen",
    description: "The seamless CI/CD integration and intelligent test maintenance have transformed our development workflow.",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    metrics: [
      { label: "Deployment Speed", value: "5x faster" },
      { label: "Bug Detection", value: "85% earlier" },
      { label: "Developer Productivity", value: "+40%" }
    ],
    quote: "The seamless CI/CD integration and intelligent test maintenance have transformed our development workflow.",
    quoteHighlights: ["seamless", "transformed"]
  },
  {
    id: 3,
    title: "Emily Rodriguez",
    name: "Emily Rodriguez",
    description: "SimplifyQA's enterprise security and scalability features make it perfect for our needs. The support team is exceptional.",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    metrics: [
      { label: "Cost Reduction", value: "60%" },
      { label: "Quality Score", value: "98%" },
      { label: "Compliance", value: "100%" }
    ],
    quote: "SimplifyQA's enterprise security and scalability features make it perfect for our needs. The support team is exceptional.",
    quoteHighlights: ["enterprise security", "exceptional"]
  }
];

const SuccessStoriesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const getCardStyle = (index: number, isHovered: boolean) => {
    const diff = index - activeIndex;
    const position = diff < 0 ? diff + stories.length : diff;

    // Cards stack vertically, each one showing above the previous one (like fanned upward)
    if (position === 0) {
      // Active card - bottom of the stack, full size
      return {
        transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0px) scale(1)',
        filter: 'blur(0px)',
        zIndex: 30,
        opacity: 1,
        top: '85px',
        pointerEvents: 'auto' as const,
        cursor: 'pointer' as const
      };
    } else if (position === 1) {
      // Second card - peeking out from top
      return {
        transform: isHovered ? 'translateY(-66px) scale(0.97)' : 'translateY(-56px) scale(0.95)',
        filter: 'blur(1px)',
        zIndex: 20,
        opacity: 1,
        top: '85px',
        pointerEvents: 'auto' as const,
        cursor: 'pointer' as const
      };
    } else if (position === 2) {
      // Third card - peeking out even more from top
      return {
        transform: isHovered ? 'translateY(-117px) scale(0.92)' : 'translateY(-107px) scale(0.9)',
        filter: 'blur(2px)',
        zIndex: 10,
        opacity: 1,
        top: '85px',
        pointerEvents: 'auto' as const,
        cursor: 'pointer' as const
      };
    } else {
      // Hidden cards
      return {
        transform: 'translateY(-160px) scale(0.85)',
        filter: 'blur(3px)',
        zIndex: 5,
        opacity: 0,
        top: '85px',
        pointerEvents: 'none' as const
      };
    }
  };

  const highlightText = (text: string, highlights: string[]) => {
    let result = text;
    highlights.forEach((word) => {
      const regex = new RegExp(`(${word})`, 'gi');
      result = result.replace(regex, '<span style="font-style: italic; font-weight: 400;">$1</span>');
    });
    return result;
  };

  return (
    <section className="py-20" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories to Inspire
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Discover how businesses and creators achieve results
          </p>
        </div>

         {/* Carousel Container */}
         <div className="relative" style={{ minHeight: '425px' }}>
           {/* Cards Stack */}
           <div className="relative flex items-start justify-center pt-8">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className="absolute transition-all duration-500 ease-out"
                style={{
                  ...getCardStyle(index, hoveredIndex === index),
                  width: '900px',
                  maxWidth: '50vw'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(index)}
              >
                 {/* Card Content */}
                 <div
                   className="overflow-hidden relative"
                   style={{
                     background: 'rgb(4, 7, 13)',
                     border: '1px solid rgba(216, 231, 242, 0.07)',
                     borderRadius: '16px',
                     boxShadow: 'rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset',
                     width: '100%'
                   }}
                 >
                    {/* Header Section */}
                    <div className="flex items-center justify-between" style={{ padding: '8px 30px', borderBottom: '1px solid rgba(216, 231, 242, 0.07)' }}>
                      <div 
                        className="rounded-lg flex items-center justify-center"
                        style={{
                          padding: '5px',
                          background: 'rgb(16, 19, 28)',
                          borderRadius: '8px',
                          boxShadow: 'rgba(207, 231, 255, 0.2) 0px 1px 1px 0px inset'
                        }}
                      >
                        <User className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                      </div>
                    </div>

                    {/* Body Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6" style={{ padding: '30px' }}>
                      {/* Left Side - Content */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-4">
                            {story.title}
                          </h3>

                          <p className="text-gray-400 mb-6 leading-relaxed" style={{ opacity: 0.8 }}>
                            {story.description}
                          </p>

                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-4">
                            {story.metrics.map((metric, idx) => (
                              <div
                                key={idx}
                                className="rounded-xl p-3 text-center"
                                style={{
                                  background: 'rgba(0, 0, 0, 0.3)',
                                  border: '1px solid rgba(216, 231, 242, 0.07)',
                                  borderRadius: '12px'
                                }}
                              >
                                <div className="text-2xl font-bold text-white mb-1">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Image */}
                      <div className="relative">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-full object-cover"
                          style={{ height: '220px', borderRadius: '8px' }}
                        />
                      </div>
                    </div>

                    {/* Gradient light effect */}
                    <div 
                      className="absolute top-0 right-0 w-full h-full pointer-events-none"
                      style={{
                        background: 'radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)',
                        opacity: 0.1
                      }}
                    />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Comment Text Below Cards */}
        <div className="text-center" style={{ width: '50vw', margin: '50px auto auto' }}>
          <p className="text-gray-400 text-lg italic mb-8">
            "They took the time to understand our <span style={{ fontStyle: 'italic', color: '#fff' }}>challenges</span>, identified our <span style={{ fontStyle: 'italic', color: '#fff' }}>target audience</span>, and made our brand shine. Their solutions were very effective!"
          </p>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2">
            {stories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="transition-all duration-300 hover:scale-110"
                style={{
                  width: idx === activeIndex ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: idx === activeIndex ? '#fff' : 'rgba(255, 255, 255, 0.3)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesCarousel;

