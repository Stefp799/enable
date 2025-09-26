import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const EmilyFlynnAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const location = useLocation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Emily Flynn, your AI assistant for Zoho Consulting. How can I help you today?\n\nClick on any of these categories that may apply:",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, hasAutoOpened, isOpen]);

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    const lowerMessage = userMessage.toLowerCase();

    // Zoho-related responses
    if (lowerMessage.includes('zoho') || lowerMessage.includes('crm') || lowerMessage.includes('consulting')) {
      const zohoResponses = [
        "I'd be happy to help with your Zoho needs! Our team specializes in CRM implementation, custom app development, and workflow automation. What specific Zoho challenge are you facing?",
        "Great question about Zoho! We offer comprehensive consulting services including system setup, data migration, and team training. Would you like to schedule a consultation to discuss your requirements?",
        "Zoho has incredible potential for business transformation. We help companies leverage Zoho One's 45+ applications to streamline operations. What's your current business process that needs optimization?",
        "Our Zoho expertise covers everything from basic CRM setup to complex custom applications. We've helped 200+ businesses maximize their Zoho investment. What's your timeline for implementation?"
      ];
      return zohoResponses[Math.floor(Math.random() * zohoResponses.length)];
    }


    // Billing/refund responses (check these first)
    if (lowerMessage.includes('refund') || lowerMessage.includes('money back') || lowerMessage.includes('cancel') || lowerMessage.includes('billing') || lowerMessage.includes('payment') || lowerMessage.includes('invoice') || lowerMessage.includes('charge')) {
      return "Please contact service@enable.llc for all billing disputes and refund requests.";
    }

    // Business/services responses
    if (lowerMessage.includes('business') || lowerMessage.includes('service') || lowerMessage.includes('help') || lowerMessage.includes('consulting')) {
      const businessResponses = [
        "We specialize in helping businesses grow through technology and strategic consulting. Our services include Zoho implementation, business process optimization, and digital transformation. What's your biggest business challenge right now?",
        "I'm here to understand your unique business needs. Whether it's streamlining operations, improving customer relationships, or expanding your reach, we have solutions. Tell me more about your goals.",
        "Our consulting approach is very personalized. We take time to understand your industry, challenges, and objectives before recommending solutions. What industry are you in and what's keeping you up at night?",
        "Business growth requires the right tools and strategies. We help companies leverage technology to achieve their goals more efficiently. What's the most time-consuming process in your business right now?"
      ];
      return businessResponses[Math.floor(Math.random() * businessResponses.length)];
    }

    // General/greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! It's great to meet you. I'm here to help with Zoho consulting services. What brings you here today?";
    }

    // Default intelligent responses
    const defaultResponses = [
      "That's an interesting question! I specialize in Zoho consulting. How can I apply my expertise to help you with that?",
      "I'd love to help you with that. Could you tell me a bit more about what you're looking for? I can provide insights on Zoho business solutions.",
      "Thanks for reaching out! I'm most knowledgeable about Zoho business solutions. How can I assist you with your business needs?",
      "I appreciate you sharing that with me. Let me see how I can help - are you looking for Zoho consulting services?"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleQuickCategory = async (category: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: category,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Generate appropriate response based on category
    let response = '';
    switch (category) {
      case 'Customer Service':
        response = "I'm here to help with any questions or issues you have with our Zoho consulting services. What specific customer service matter can I assist you with today?";
        break;
      case 'Billing':
        response = "Please contact service@enable.llc for all billing disputes and refund requests.";
        break;
      case 'Request an Appointment':
        response = "I'd be happy to help you schedule a consultation with our Zoho experts. What type of Zoho services are you interested in discussing? This will help me connect you with the right specialist.";
        break;
      case 'Zoho Knowledge Base':
        response = "Great! I can help you access information about Zoho applications and best practices. What specific Zoho topic or application would you like to learn more about?";
        break;
      default:
        response = "Thanks for your selection. How can I help you with your Zoho consulting needs?";
    }

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: response,
      sender: 'ai',
      timestamp: new Date()
    };

    setTimeout(() => {
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: userInput,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsTyping(true);

    try {
      const aiResponse = await generateAIResponse(userInput);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I'm having trouble processing that right now. Could you try asking again?",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
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
          aria-label="Open chat with Enable Solutions Assistant"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">EF</span>
          </div>
          <div>
            <h3 className="font-semibold">Emily Flynn AI</h3>
            <p className="text-xs opacity-90">Zoho Consultant</p>
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
              className={`max-w-sm px-3 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              <div className="text-sm whitespace-pre-line">{message.content}</div>

              {/* Show category buttons only for the initial welcome message */}
              {message.id === '1' && message.sender === 'ai' && (
                <div className="mt-3 space-y-2">
                  <button
                    onClick={() => handleQuickCategory('Customer Service')}
                    className="block w-full text-left px-3 py-2 bg-green-50 hover:bg-green-100 rounded border border-green-200 text-sm transition-colors"
                  >
                    Customer Service
                  </button>
                  <button
                    onClick={() => handleQuickCategory('Billing')}
                    className="block w-full text-left px-3 py-2 bg-green-50 hover:bg-green-100 rounded border border-green-200 text-sm transition-colors"
                  >
                    Billing
                  </button>
                  <button
                    onClick={() => handleQuickCategory('Request an Appointment')}
                    className="block w-full text-left px-3 py-2 bg-green-50 hover:bg-green-100 rounded border border-green-200 text-sm transition-colors"
                  >
                    Request an Appointment
                  </button>
                  <button
                    onClick={() => handleQuickCategory('Zoho Knowledge Base')}
                    className="block w-full text-left px-3 py-2 bg-green-50 hover:bg-green-100 rounded border border-green-200 text-sm transition-colors"
                  >
                    Zoho Knowledge Base
                  </button>
                </div>
              )}
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
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:border-green-500"
            rows={2}
          />
          <button
            onClick={handleSendMessage}
            disabled={!userInput.trim() || isTyping}
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