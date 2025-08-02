import  { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    content: "Hello! I'm your Leapfrog Design assistant powered by Google Gemini. How can I help you with personalized treatment methods today?",
    role: 'assistant',
    timestamp: new Date()
  }
];

const GeminiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;

    const newUserMessage: ChatMessage = {
      id: Date.now(),
      content: inputText,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      // Use the formatted messages for context
      const response = await sendMessageToGemini([...messages, newUserMessage]);
      
      const botResponse: ChatMessage = {
        id: Date.now() + 1,
        content: response,
        role: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error sending message to Gemini:', error);
      
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        content: "I'm sorry, I encountered an error processing your request. Please try again later.",
        role: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg flex items-center justify-center"
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
          {/* Chat header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxnZW1pbmklMjBhaSUyMGxvZ28lMjBnb29nbGV8ZW58MHx8fHwxNzQ0Njk5NTI5fDA&ixlib=rb-4.0.3&fit=fillmax&h=200&w=200" 
                alt="Gemini AI" 
                className="h-8 w-8 rounded-full mr-2 object-cover bg-white" 
              />
              <span className="font-medium">Gemini Assistant</span>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-grow p-4 overflow-y-auto max-h-96 bg-gray-50">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-3 ${message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
              >
                <div className={`px-4 py-2 rounded-lg max-w-[85%] ${
                  message.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 shadow-sm rounded-bl-none'
                }`}>
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-3">
                <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-sm rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <div className="p-4 border-t flex">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your question..."
              className="flex-grow py-2 px-3 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Chat message"
            />
            <button
              onClick={handleSendMessage}
              disabled={inputText.trim() === '' || isTyping}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-r-md disabled:opacity-50"
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          
          {/* Chat footer */}
          <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 text-center border-t">
            Powered by Google Gemini. For medical advice, please consult a healthcare professional.
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChatbot;
 