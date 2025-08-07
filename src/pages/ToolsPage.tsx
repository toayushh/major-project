import { useState, useRef } from 'react';
import { MessageSquare, Camera, Upload, X, HelpCircle } from 'lucide-react';
import Webcam from 'react-webcam';
import AnimatedAIChat from '../components/AnimatedAIChat';

type Tab = 'chat' | 'upload' | 'camera';

// Predefined responses for common questions
const predefinedResponses: Record<string, string> = {
  "what is leapfrog design": "The Leapfrog Design is a methodology for rapidly developing, testing, and implementing personalized treatment approaches in clinical practice.",
  // ... other responses ...
};

const ToolsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('chat');
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<{text: string; sender: 'user' | 'bot'}[]>([
    {text: "Hello! I'm your Leapfrog Design assistant. How can I help you today?", sender: 'bot'}
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const webcamRef = useRef<Webcam>(null);
  
  // ... other state and handlers ...

  return (
    <div className="relative min-h-screen">
      {/* Animated AI Chat Widget - Only shown on chat tab */}
      {activeTab === 'chat' && (
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatedAIChat />
        </div>
      )}

      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Interactive Tools</h1>
          <p className="text-xl max-w-3xl">
            Explore our AI-powered tools to learn more about personalized treatment approaches.
          </p>
        </div>
      </section>
      
      {/* Rest of your component */}
      
    </div>
  );
};

export default ToolsPage;
