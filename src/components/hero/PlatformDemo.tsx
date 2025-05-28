
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Heart, MessageCircle, ThumbsUp, Send, Save, Clock, User, BarChart2, Sparkles, ArrowRight, ArrowLeft, X, Bot } from 'lucide-react';

const PlatformDemo = () => {
  return (
    <div className="relative max-w-5xl mx-auto mb-20">
      {/* Gradient background */}
      <div className="absolute inset-0 -m-10 bg-gradient-to-br from-convrt-purple/20 via-convrt-purple/20 to-convrt-purple/20 rounded-3xl blur-3xl opacity-40"></div>

      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
        {/* Platform UI Header - Tabs and Navigation */}
        <div className="bg-white border-b border-gray-200 flex items-center px-6 py-3">
          <div className="flex space-x-1 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            <div className="px-4 py-2 text-convrt-purple bg-convrt-purple/10 rounded-t-lg font-medium text-sm border-b-2 border-convrt-purple">
              Cues (24)
            </div>
            <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-t-lg font-medium text-sm">
              Heatbox (12)
            </div>
            <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-t-lg font-medium text-sm">
              Sample (156)
            </div>
            <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-t-lg font-medium text-sm">
              AI Agents
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs font-medium text-green-700">248 Running</span>
            </div>
            <div className="flex items-center bg-orange-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-xs font-medium text-orange-700">1102 Tasks Done</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Main Content Area - LinkedIn Style Post with AI-Generated Comment */}
        <div className="bg-gray-50 p-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Panel - Profile and Post */}
            <div className="col-span-8 space-y-6">
              {/* Prompt Area */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-convrt-purple/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-convrt-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                      Hey there, Found a data pattern with 87% accuracy. Next steps?
                    </p>
                    <div className="mt-3 bg-convrt-purple/5 p-3 rounded-lg">
                      <p className="text-xs text-gray-600 font-medium">Generate comprehensive report with insights</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LinkedIn Post */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <img src="/yoho.jpg" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium text-gray-900">Mohit Singh</h3>
                        <div className="ml-2 text-xs text-white bg-blue-600 px-1.5 py-0.5 rounded">Twitter</div>
                      </div>
                      <p className="text-xs text-gray-500">AI Operations Lead at XYZ • 2h ago</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-700">
                      Just deployed our new autonomous AI agent system and the results have been phenomenal! 🤖 We're seeing a 73% reduction in manual tasks and 4x faster processing speeds. Would love to hear thoughts on the future of AI automation in enterprise workflows.                    </p>
                  </div>

                  <div className="flex items-center space-x-3 py-2 border-t border-b border-gray-100 text-gray-500 text-sm">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>124</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>38</span>
                    </div>
                    <div className="ml-auto flex items-center space-x-1 bg-convrt-purple/10 text-convrt-purple px-2 py-1 rounded-md">
                      <Save className="w-4 h-4" />
                      <span className="text-xs font-medium">Save to Sample</span>
                    </div>
                  </div>

                  {/* AI Generated Comment */}
                  <div className="mt-4 relative">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-600">
                        <Sparkles className="w-3 h-3 mr-1 text-convrt-purple" />
                        Generated Comment
                      </div>
                      <div className="ml-2 text-xs text-gray-500">AI Generated</div>
                      <div className="ml-auto">
                        <button className="bg-green-500 text-white px-3 py-1 rounded-md text-xs font-medium flex items-center">
                          <Check className="w-3 h-3 mr-1" />
                          Approve
                        </button>
                      </div>
                    </div>

                    <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md border border-gray-200">
                      The shift toward autonomous AI agents represents a fundamental transformation in enterprise operations. Your 73% task reduction demonstrates the power of intelligent automation that adapts and learns. As AI agents become more sophisticated, we'll see them handling complex decision-making processes, not just routine tasks. The future lies in human-AI collaboration where agents amplify our strategic capabilities!                    </div>
                  </div>
                </div>

                {/* Engagement Score */}
                <div className="bg-convrt-purple/5 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Automation Score</span>
                    <span className="text-convrt-purple font-bold">+25</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-convrt-purple h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">75/100 points to next level</div>
                </div>

                <div className="flex items-center justify-between p-3 border-t border-gray-200">
                  <button className="text-gray-500 flex items-center text-sm">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Previous
                  </button>
                  <button className="text-red-500 flex items-center text-sm">
                    <X className="w-4 h-4 mr-1" />
                    Irrelevant
                  </button>
                  <button className="text-gray-500 flex items-center text-sm">
                    Next
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel - Context and Insights */}
            <div className="col-span-4 space-y-4">
              {/* Warmth Level */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Efficiency Level</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-convrt-purple rounded-full"></div>
                  <span className="text-convrt-purple font-medium">High</span>
                </div>
              </div>

              {/* Previous Touchpoints */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Analysis Agent</h3>
                <div className="text-convrt-purple font-medium text-sm">8 Work Flows</div>
              </div>

              {/* Engagement Potential */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Scalability Potential</h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div className="bg-convrt-purple h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="text-right text-sm font-medium text-convrt-purple">85%</div>
              </div>

              {/* Relationship Status */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Running Status</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-convrt-purple rounded-full"></div>
                  <span className="text-convrt-purple font-medium">High - 954 Active Workflows</span>
                </div>
              </div>

              {/* Topics of Interest */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Topics of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-convrt-purple/10 text-convrt-purple text-xs px-2 py-1 rounded-md">AI Analytics</span>
                  <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md">SaaS</span>
                  <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-md">Growth</span>
                </div>
              </div>

              {/* Best Time to Engage */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">User Engage</h3>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-convrt-purple" />
                  <span className="text-convrt-purple font-medium">Active Now</span>
                </div>
              </div>

              {/* Recommended Actions */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <Sparkles className="w-4 h-4 text-convrt-purple mr-1" />
                  Recommended Actions
                </h3>
                <div className="space-y-2">
                  <button className="w-full bg-convrt-purple text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send to Your Agent
                  </button>
                  <button className="w-full border border-convrt-purple text-convrt-purple py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                    <User className="w-4 h-4 mr-2" />
                    Add New Agent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating UI Element */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-8 top-1/3 z-10"
      >
        <div className="animate-float bg-white/70 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white/20 flex items-center">
          <div className="bg-[#6936F5]/20 rounded-lg p-2 mr-3">
            <Bot className="w-4 h-4 text-[#6936F5]" />
          </div>
          <div>
            <div className="text-gray-800 text-xs font-medium">New Agent</div>
            <div className="text-gray-600 text-xs">Check Now!</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PlatformDemo;
