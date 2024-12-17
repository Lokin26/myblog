'use client';

import React from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Users, 
  DollarSign, 
  Brain, 
  Bot,
  Search,
  Award,
  Briefcase,
  GraduationCap,
  BookOpen,
  Code,Clock  
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-12 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500 rounded-full opacity-10"></div>
            <Image 
              src="/images/profile.jpg"  
              alt="Profile Picture" 
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg relative z-10"
            />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Balamurugan Mohan
          </h1>
          <p className="text-xl text-gray-600 mb-2">Enterprise AI & Automation Architect</p>
          <p className="text-md text-gray-500">balamohan_1988@yahoo.co.in</p>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center transform hover:scale-105 transition-transform duration-200">
          <Clock className="w-8 h-8 mx-auto mb-2 text-orange-600" />
          <div className="text-2xl font-bold text-gray-800">15+</div>
          <div className="text-sm text-gray-600">Years of Experience</div>
        </div>
        </div>

        {/* Impact Metrics */}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center transform hover:scale-105 transition-transform duration-200">
            <Brain className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold text-gray-800">20+</div>
            <div className="text-sm text-gray-600">AI Solutions</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center transform hover:scale-105 transition-transform duration-200">
            <Bot className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold text-gray-800">300+</div>
            <div className="text-sm text-gray-600">RPA Bots Delivered</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center transform hover:scale-105 transition-transform duration-200">
            <Users className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
            <div className="text-2xl font-bold text-gray-800">20+</div>
            <div className="text-sm text-gray-600">Enterprise Clients</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center transform hover:scale-105 transition-transform duration-200">
            <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold text-gray-800">Multi-Million</div>
            <div className="text-sm text-gray-600">Cost Savings</div>
          </div>
        </div>

        {/* Main Content - Split View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Personal Info & Achievements */}
          <div className="space-y-8">
            {/* Professional Summary Update */}
            <Card className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                  Professional Summary
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Distinguished Senior Enterprise Architect and Technology Consultant with over a decade of transformative experience 
                    in spearheading digital initiatives across Fortune 500 companies. Trusted advisor in platform selection and 
                    implementation strategies for AI and RPA solutions, helping enterprises make informed decisions that align with 
                    their digital transformation goals.
                  </p>
                  <p>
                    Expert in Azure cloud solutions, including AI Foundry implementations, Document Intelligence, and serverless 
                    architectures. Successfully architected and deployed comprehensive cloud-native solutions integrating Function Apps, 
                    Service Bus, and Static Web Apps, ensuring scalable and resilient enterprise applications.
                  </p>
                  <p>
                    Proven track record in establishing and scaling GENAI/RPA Factory infrastructure, having successfully delivered 300+ 
                    automation solutions that generated multi-million dollar cost savings across 20+ enterprise clients. Demonstrated 
                    excellence in stakeholder management, effectively coordinating between infrastructure teams, business units, and 
                    development teams to ensure seamless project delivery.
                  </p>
                  <p>
                    Led comprehensive platform evaluation initiatives, conducting thorough assessments of various AI and RPA platforms 
                    to provide strategic recommendations aligned with client objectives. Expertise in facilitating client demonstrations, 
                    technical workshops, and discovery sessions, ensuring clear communication of complex technical solutions to diverse 
                    stakeholders.
                  </p>
                  <p>
                    Recognized industry expert in cutting-edge technologies including Large Language Models, Process Mining, and 
                    enterprise-scale RPA implementations. Pioneered the implementation of advanced RAG architectures and Vector 
                    Database integrations, revolutionizing how enterprises leverage AI for business transformation.
                  </p>
                </div>
              </CardContent>
            </Card>
            {/* Solution Design & Discovery */}
            <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <Search className="w-6 h-6 mr-2 text-indigo-600" />
                  Solution Design & Discovery
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-700 mb-2">Enterprise Architecture</h3>
                    <p className="text-gray-600">Led discovery workshops and solution design for Fortune 500 clients, implementing scalable automation and AI solutions that delivered measurable business value.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-700 mb-2">Process Optimization</h3>
                    <p className="text-gray-600">Designed and implemented end-to-end process optimization strategies combining AI, RPA, and process mining technologies.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-700 mb-2">Innovation Leadership</h3>
                    <p className="text-gray-600">Spearheaded R&D initiatives in emerging technologies, contributing to enterprise architecture frameworks and establishing centers of excellence.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Education */}
            <Card className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                  Education
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700">Master of Business Administration</h3>
                    <p className="text-gray-600">Project Management - Alagappa University, 2021</p>
                    <p className="text-gray-500">CGPA: 6.8</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Bachelor of Science in Computer Science</h3>
                    <p className="text-gray-600">Madurai Kamaraj University, 2009</p>
                    <p className="text-gray-500">Score: 64.15%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <BookOpen  className="w-6 h-6 mr-2 text-blue-600" />
                  Professional Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700">AI & Data</h3>
                    <ul className="space-y-2 text-gray-600 mt-2">
                      <li>• IBM GENAI Architect</li>
                      <li>• AI/ML Engineer (Simplilearn)</li>
                      <li>• Data Engineer - Celonis</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700">Automation</h3>
                    <ul className="space-y-2 text-gray-600 mt-2">
                      <li>• Automation Anywhere Master</li>
                      <li>• BluePrism Developer</li>
                      <li>• UiPath Developer</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            

            {/* Key Achievements */}
            <Card className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-blue-600" />
                  Key Achievements
                </h2>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700">Enterprise Impact</h3>
                    <p className="text-gray-600">Led digital transformation initiatives resulting in multi-million dollar cost savings across 20+ enterprise clients</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700">Innovation Leadership</h3>
                    <p className="text-gray-600">Established RPA Factory & GENAI infrastructure, transforming business operations</p>
                  </div>
                  </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Technical Expertise */}
          <div className="space-y-8">
            {/* AI & GENAI Excellence */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <Brain className="w-6 h-6 mr-2 text-purple-600" />
                  AI & GENAI Excellence
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Large Language Models</h3>
                    <div className="space-y-2">
                      <div className="bg-white text-purple-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                        <span>Azure OpenAI</span>
                        <span className="text-sm bg-purple-100 px-2 py-1 rounded">GPT 4O,4,3.5 </span>
                      </div>
                      <div className="bg-white text-blue-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                        <span>IBM Granite</span>
                        <span className="text-sm bg-blue-100 px-2 py-1 rounded">3.0</span>
                      </div>
                      <div className="bg-white text-indigo-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                        <span>Google Vertex AI</span>
                        <span className="text-sm bg-indigo-100 px-2 py-1 rounded">PaLM</span>
                      </div>
                      <div className="bg-white text-violet-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                        <span>Anthropic Claude</span>
                        <span className="text-sm bg-violet-100 px-2 py-1 rounded">Claude 3</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">AI Implementation</h3>
                    <div className="space-y-2">
                      <div className="bg-white text-gray-700 px-4 py-3 rounded-lg shadow-sm">
                        Advanced RAG Architectures
                      </div>
                      <div className="bg-white text-gray-700 px-4 py-3 rounded-lg shadow-sm">
                        Vector Database Integration
                      </div>
                      <div className="bg-white text-gray-700 px-4 py-3 rounded-lg shadow-sm">
                        Custom LLM Solutions & Frameworks
                      </div>
                      <div className="bg-white text-gray-700 px-4 py-3 rounded-lg shadow-sm">
                        Enterprise AI Strategy
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
          

            {/* Automation Excellence */}
            
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <Bot className="w-6 h-6 mr-2 text-blue-600" />
                  Automation Excellence
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">RPA Platforms</h3>
                    <div className="space-y-2">
                      <div className="bg-white text-blue-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                        <span>Blue Prism</span>
                        <span className="text-sm bg-blue-100 px-2 py-1 rounded">v7,6,5</span>
                      </div>
                      <div className="bg-white text-orange-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                        <span>Automation Anywhere</span>
                        <span className="text-sm bg-orange-100 px-2 py-1 rounded">A360,A2019, DocInt</span>
                      </div>
                      <div className="bg-white text-purple-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                        <span>UiPath</span>
                        <span className="text-sm bg-purple-100 px-2 py-1 rounded">Studio, Orch</span>
                      </div>
                      <div className="bg-white text-blue-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                        <span>Power Automate</span>
                        <span className="text-sm bg-blue-100 px-2 py-1 rounded">Desktop, Cloud</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Process Mining</h3>
                    <div className="space-y-2">
                      <div className="bg-white text-teal-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                        <span>Celonis</span>
                        <span className="text-sm bg-teal-100 px-2 py-1 rounded">EMS</span>
                      </div>
                      <div className="bg-white text-blue-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                        <span>Microsoft Process Mining</span>
                        <span className="text-sm bg-blue-100 px-2 py-1 rounded">Power Platform</span>
                      </div>
                      <div className="bg-white text-gray-700 px-4 py-3 rounded-lg shadow-sm">
                        Process Discovery & Analysis
                      </div>
                      <div className="bg-white text-gray-700 px-4 py-3 rounded-lg shadow-sm">
                        Solution Architecture Design
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            
            {/* New Technical Skills Section */}
        
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <Code className="w-6 h-6 mr-2 text-blue-600" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Azure Cloud Solutions</h3>
                <div className="space-y-2">
                  <div className="bg-white text-blue-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                    <span>Azure AI Foundry</span>
                    <span className="text-sm bg-blue-100 px-2 py-1 rounded">Advanced</span>
                  </div>
                  <div className="bg-white text-blue-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                    <span>Document Intelligence</span>
                    <span className="text-sm bg-blue-100 px-2 py-1 rounded">Expert</span>
                  </div>
                  <div className="bg-white text-blue-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                    <span>Function Apps</span>
                    <span className="text-sm bg-blue-100 px-2 py-1 rounded">Advanced</span>
                  </div>
                  <div className="bg-white text-blue-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                    <span>Service Bus</span>
                    <span className="text-sm bg-blue-100 px-2 py-1 rounded">Expert</span>
                  </div>
                  <div className="bg-white text-blue-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
                    <span>Static Web Apps</span>
                    <span className="text-sm bg-blue-100 px-2 py-1 rounded">Advanced</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Consulting Expertise</h3>
                <div className="space-y-2">
                  <div className="bg-white text-indigo-700 px-4 py-3 rounded-lg shadow-sm">
                    Platform Evaluation & Selection
                  </div>
                  <div className="bg-white text-indigo-700 px-4 py-3 rounded-lg shadow-sm">
                    Solution Architecture Design
                  </div>
                  <div className="bg-white text-indigo-700 px-4 py-3 rounded-lg shadow-sm">
                    Stakeholder Management
                  </div>
                  <div className="bg-white text-indigo-700 px-4 py-3 rounded-lg shadow-sm">
                    Technical Demonstrations
                  </div>
                  <div className="bg-white text-indigo-700 px-4 py-3 rounded-lg shadow-sm">
                    Cross-functional Team Leadership
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>         
            {/* Technical Leadership */}
            <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-purple-600" />
                  Technical Leadership
                </h2>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-700 mb-2">Team Mentorship</h3>
                    <p className="text-gray-600">Mentored junior architects and leads, establishing technical best practices and design patterns across multiple projects.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-700 mb-2">Solution Architecture</h3>
                    <p className="text-gray-600">Created comprehensive solution architectures for RFPs and RFQs, driving successful project implementations.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-700 mb-2">Best Practices</h3>
                    <p className="text-gray-600">Developed standardized documentation, code review templates, and operational handbooks for enterprise-wide use.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto mt-8">
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 shadow-lg">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Let's Connect</h2>
            <div className="flex justify-center space-x-6">
              <a href="mailto:balamohan_1988@yahoo.co.in" 
                className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200">
                <Mail className="w-6 h-6 text-blue-600" />
              </a>
              <a href="#" 
                className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200">
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a href="#" 
                className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200">
                <Github className="w-6 h-6 text-blue-600" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;