import  { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm your Leapfrog Design assistant. How can I help you with personalized treatment methods today?",
    sender: 'bot'
  }
];

// Predefined responses for common questions
const predefinedResponses: Record<string, string> = {
  "what is leapfrog design": "The Leapfrog Design is a methodology for rapidly developing, testing, and implementing personalized treatment approaches in clinical practice. It enables concurrent development and testing, dramatically reducing implementation time.",
  "how does personalized treatment work": "Personalized treatment tailors healthcare approaches to individual patient characteristics, preferences, and circumstances. It moves beyond one-size-fits-all approaches to improve outcomes through customization.",
  "benefits of personalized treatment": "Personalized treatments can improve patient outcomes, increase treatment adherence, reduce side effects, optimize resource allocation, and provide more targeted interventions based on individual patient needs.",
  "implementation timeline": "The Leapfrog Design significantly reduces implementation time compared to traditional approaches. Initial implementation typically takes 6-12 months, depending on organizational factors and treatment complexity.",
  "key principles": "The key principles of the Leapfrog Design include evidence-based innovation, personalization, concurrent development and testing, structured adaptation, and continuous improvement through data collection.",
  "case studies": "We have several case studies showing successful implementations, including personalized pain management protocols, adaptive behavioral health interventions, and precision diabetes management programs.",
  "differences from traditional approaches": "Unlike traditional linear approaches that can take 15-20 years from research to practice, the Leapfrog Design enables concurrent development, testing, and implementation while maintaining scientific rigor.",
  "contact": "You can contact our team through the Contact page on our website, or email directly at info@leapfrog-treatment.org."
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const getResponseForMessage = (userMessage: string): string => {
    // Convert to lowercase for easier matching
    const message = userMessage.toLowerCase();
    
    // Check for matches in predefined responses
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    // Check for specific question types
    if (message.includes("how") && (message.includes("implement") || message.includes("use"))) {
      return "Implementation of the Leapfrog Design starts with identifying clinical needs, developing core treatment components, creating a decision framework for personalization, and implementing in limited settings before expanding. Our team can provide more detailed guidance for your specific context.";
    }
    
    if (message.includes("what") && message.includes("cost")) {
      return "The cost of implementing the Leapfrog Design methodology varies based on organizational size, existing infrastructure, and the complexity of treatments being personalized. Please contact our team for a customized assessment.";
    }
    
    if ((message.includes("hello") || message.includes("hi")) && message.length < 10) {
      return "Hello! I'm here to answer your questions about the Leapfrog Design methodology and personalized treatment approaches. How can I assist you today?";
    }
    
    // Default response if no matches
    return "Thank you for your question about the Leapfrog Design methodology. This is an area where personalized approaches can be particularly effective. For more detailed information, I'd recommend exploring our methodology section or contacting our team directly.";
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user'
    };

    setMessages([...messages, newUserMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate a delay for bot response
    setTimeout(() => {
      const responseText = getResponseForMessage(newUserMessage.text);
      
      const botResponse: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot'
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
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
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-blue-600" />
              </div>
              <span className="font-medium ml-2">Leapfrog Assistant</span>
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
                className={`mb-3 ${message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
              >
                <div className={`px-4 py-2 rounded-lg max-w-[85%] ${
                  message.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 shadow-sm rounded-bl-none'
                }`}>
                  {message.text}
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
              disabled={isTyping}
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
            For medical advice, please consult a healthcare professional.
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
 