import React from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Brain, Users, DollarSign, Star, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Enterprise AI & Automation Architect
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transforming businesses through AI innovation and intelligent automation. 
            15+ years of experience in delivering enterprise-scale solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/about" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center"
            >
              Learn More <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Impact & Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="transform hover:scale-105 transition">
              <CardContent className="p-6 text-center">
                <Bot className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-gray-800">300+</div>
                <div className="text-gray-600">Bots Delivered</div>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition">
              <CardContent className="p-6 text-center">
                <Brain className="w-8 h-8 mx-auto mb-4 text-purple-600" />
                <div className="text-3xl font-bold text-gray-800">20+</div>
                <div className="text-gray-600">AI Solutions</div>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-4 text-green-600" />
                <div className="text-3xl font-bold text-gray-800">Multi-Million</div>
                <div className="text-gray-600">Cost Savings</div>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
                <div className="text-3xl font-bold text-gray-800">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <Brain className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">AI & GENAI</h3>
                <p className="text-gray-600 mb-4">
                  Expertise in OpenAI, IBM Granite, Google Vertex AI, and custom LLM solutions.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Advanced RAG Architectures</li>
                  <li>• Vector Database Integration</li>
                  <li>• Enterprise AI Strategy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-6">
                <Bot className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">RPA & Automation</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end automation solutions using leading RPA platforms.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Blue Prism</li>
                  <li>• Automation Anywhere</li>
                  <li>• UiPath & Power Automate</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">Architecture & Design</h3>
                <p className="text-gray-600 mb-4">
                  Enterprise solution architecture and digital transformation.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Solution Design</li>
                  <li>• Process Mining</li>
                  <li>• Technical Leadership</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how AI and automation can drive innovation in your organization.
          </p>
          <div className="space-x-4">
            <Link 
              href="/about" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Learn More About Me
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition border border-blue-600"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}