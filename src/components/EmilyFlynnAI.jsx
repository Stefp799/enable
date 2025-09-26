import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const EmilyFlynnAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const location = useLocation();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'emily',
      text: "Hi! I'm Emily from Enable Solutions customer service. I can help with general questions about our Zoho consulting services, schedule consultations, and connect you with the right specialist for your needs. For complex technical or billing issues, I'll transfer you directly to a human expert. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-open on homepage after 7 seconds
  useEffect(() => {
    if (location.pathname === '/' && !hasAutoOpened && !isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
      }, 7000); // 7 seconds

      return () => clearTimeout(timer);
    }
  }, [location.pathname, hasAutoOpened, isOpen]);

  // Smart Customer Service AI Logic
  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Billing/Refund Issues - Escalate to Human
    if (message.includes('refund') || message.includes('billing') || message.includes('charge') || message.includes('payment problem')) {
      return "I understand you need help with billing or a refund. These situations require personal attention from our billing team who can review your specific account details. Let me connect you with a human specialist who can resolve this for you right away. Please hold while I transfer this conversation to our billing department.";
    }

    // Technical Support Issues - Escalate to Human
    if (message.includes('not working') || message.includes('broken') || message.includes('error') || message.includes('bug') || message.includes('technical problem')) {
      return "I see you're experiencing technical difficulties. Our technical support team needs to investigate this properly to get you back up and running. Let me transfer you to a human technical specialist who can troubleshoot this issue with you directly. Please standby for the transfer.";
    }

    // Complex Project Discussions - Escalate to Human
    if (message.includes('custom project') || message.includes('specific needs') || message.includes('detailed quote') || message.includes('complex implementation')) {
      return "This sounds like a project that needs our expert consultants' personal attention. Rather than give you generic information, let me connect you with one of our Zoho specialists who can discuss your specific requirements and provide tailored recommendations. I'm transferring you to our consulting team now.";
    }

    // General Service Inquiries - Handle with Basic Info
    if (message.includes('services') || message.includes('what do you do') || message.includes('offerings')) {
      return "We're Enable Solutions, a Zoho consulting partner specializing in CRM, ERP integration, and business automation. Our main services include Zoho consulting, implementation, custom development, and ongoing support. We work with businesses of all sizes to streamline operations. What specific area interests you most?";
    }

    // Basic Pricing - Give Ranges, Then Escalate
    if (message.includes('cost') || message.includes('price') || message.includes('budget') || message.includes('how much')) {
      return "Our services range from basic CRM setups (starting around $5K) to comprehensive ERP implementations ($50K+). However, every business is unique, so I'd like to connect you with our sales team who can provide accurate pricing based on your specific needs. Would you like me to schedule a consultation for you?";
    }

    // Scheduling/Consultation Requests
    if (message.includes('schedule') || message.includes('consultation') || message.includes('meeting') || message.includes('call') || message.includes('appointment')) {
      return "I'd be happy to help schedule a consultation! Our team typically offers 30-minute discovery calls to understand your business needs and recommend the best approach. You can book directly through our calendar system, or I can have someone from our team reach out to you. What works better for you?";
    }

    // General Zoho Questions - Basic Info Only
    if (message.includes('zoho') || message.includes('crm') || message.includes('implementation')) {
      return "Zoho offers powerful business automation tools including CRM, finance, and custom applications. We help businesses choose the right combination and implement them successfully. For specific recommendations about what would work best for your business, I'd recommend speaking with one of our consultants. Would you like me to arrange a brief consultation?";
    }

    // Timeline Questions - Basic Info
    if (message.includes('time') || message.includes('long') || message.includes('quick') || message.includes('timeline')) {
      return "Project timelines typically range from 2-4 weeks for simple setups to 12-16 weeks for complex implementations. The exact timeline depends on your specific requirements and complexity. Our project managers can give you a detailed timeline after understanding your needs. Would you like to discuss your project with our team?";
    }

    // Hours/Contact Questions
    if (message.includes('hours') || message.includes('contact') || message.includes('reach') || message.includes('available')) {
      return "We're available Monday-Friday, 9 AM to 6 PM EST. You can reach us at (774) 213-1092 or through this chat. For urgent technical issues, we also provide priority support for our implementation clients. How can I help connect you with the right team member?";
    }

    // Support Questions - Basic Info, Then Escalate
    if (message.includes('support') || message.includes('help') || message.includes('assistance')) {
      return "We provide comprehensive support including training, documentation, and ongoing assistance. All our implementations include 90 days of post-launch support. For existing clients experiencing issues, let me connect you with our support team. For new inquiries, I can arrange a consultation. Which applies to your situation?";
    }

    // Default Response - Friendly Routing
    return "Hi! I'm here to help with general questions about Enable Solutions and our Zoho consulting services. I can provide basic information and connect you with the right specialist for detailed discussions. What can I help you with today? Are you looking for information about our services, need technical support, or want to discuss a specific project?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        sender: 'emily',
        text: generateAIResponse(inputMessage),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open chat with Emily Flynn AI"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">EF</span>
          </div>
          <div>
            <h3 className="font-semibold">Emily Flynn</h3>
            <p className="text-xs opacity-90">AI Zoho Consultant</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg rounded-bl-none text-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about Zoho services..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:border-green-500"
            rows="2"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmilyFlynnAI;