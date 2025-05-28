
import { useState } from 'react';
import { Target, LineChart, Bot } from 'lucide-react';
import StepContent from './how-it-works/StepContent';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Steps data
  const steps = [
    {
      id: 1,
      icon: <Target className="w-4 h-4" />,
      title: "AI Analyzes Your Workflows",
      description: "Our AI comprehensively maps your business processes, identifying bottlenecks, inefficiencies, and automation opportunities across all operational touchpoints.",
      highlightText: "AI identifies:",
      highlightDetails: "Process gaps, optimization points, and automation potential",
      gifUrl: "/lovable-uploads/50d7bc89-98fd-49a5-b67f-94230c5d3ca5.png"
    },
    {
      id: 2,
      icon: <Bot className="w-4 h-4" />,
      title: "AI Deploys Intelligent Agents",
      description: "AgentCore creates specialized AI agents that seamlessly integrate with your systems, learning your business logic.",
      highlightText: "AI automates:",
      highlightDetails: "Targeted comments, relevant reactions, and personalized interactions",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Frevolutioncomedy-handshake-revolutioncomedy-icommitcombustion-kFHbqSdogIS0qtX6Pf&embed=true&screenshot=true&meta=false"
    },
    {
      id: 3,
      icon: <LineChart className="w-4 h-4" />,
      title: "AI Optimizes & Scales Operations",
      description: "With autonomous agents handling routine operations, your business achieves 18x faster execution, perfect accuracy, and unlimited scalability while you focus on strategic growth.",
      highlightText: "AI delivers:",
      highlightDetails: "Warmed leads, engagement analytics, and conversion opportunities",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fchart-jtECu4TAPnhbGv2iwx&embed=true&screenshot=true&meta=false"
    }
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <section className="relative py-4 bg-white" id="how-it-works">
      <div className="container-section py-4">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="section-tag">
            From Manual to Autonomous
          </div>
          <h2 className="heading-lg text-convrt-dark-blue mb-4">
            How <span className="gradient-text">ChillBot</span> Works in 3 Steps
          </h2>
          <p className="text-convrt-dark-blue/80 text-lg max-w-2xl mx-auto">
            Our AI-driven platform deploys intelligent agents across your workflows, transforming manual operations into autonomous systems.</p>
        </div>
        <div className="max-w-5xl mx-auto bg-gray-100 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row h-[600px]">
            {/* Steps Section - Now on the left */}
            <div className="lg:w-1/3 flex flex-col gap-1 p-4 bg-gray-50">
              {steps.map((step) => (
                <StepContent
                  key={step.id}
                  stepNumber={step.id}
                  title={step.title}
                  description={step.description}
                  highlightText={step.highlightText}
                  highlightDetails={step.highlightDetails}
                  icon={step.icon}
                  isActive={activeStep === step.id}
                  onClick={() => handleStepClick(step.id)}
                />
              ))}
            </div>

            {/* Image Display - Now covering the entire right section */}
            <div className="lg:w-2/3 relative h-full">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  className="absolute inset-0 h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeStep === step.id ? 1 : 0,
                    zIndex: activeStep === step.id ? 10 : 1
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src={step.gifUrl}
                    alt={`Step ${step.id}: ${step.title}`}
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
