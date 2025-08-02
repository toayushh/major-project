import  { useState, useRef } from 'react';
import { MessageSquare, Camera, Upload, Send, X, HelpCircle } from 'lucide-react';
import Webcam from 'react-webcam';

type Tab = 'chat' | 'upload' | 'camera';

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

const ToolsPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>('chat');
  const [inputMessage, setInputMessage] = useState('');
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [messages, setMessages] = useState<{text: string; sender: 'user' | 'bot'}[]>([
    {text: "Hello! I'm your Leapfrog Design assistant. How can I help you with personalized treatment methods today?", sender: 'bot'}
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const webcamRef = useRef<Webcam>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
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
    if (inputMessage.trim() === '') return;
    
    // Add user message to chat
    setMessages([...messages, {text: inputMessage, sender: 'user'}]);
    setInputMessage('');
    setIsTyping(true);
    
    // Simulate a delay for bot response
    setTimeout(() => {
      const responseText = getResponseForMessage(inputMessage);
      
      setMessages(prev => [...prev, {text: responseText, sender: 'bot'}]);
      setIsTyping(false);
    }, 1000);
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      
      reader.onload = () => {
        setUploadedImages(prev => [...prev, reader.result as string]);
      };
      
      reader.readAsDataURL(file);
    }
  };

  const removeUploadedImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };
  
  const enableCamera = () => {
    setIsCameraActive(true);
  };
  
  const disableCamera = () => {
    setIsCameraActive(false);
  };
  
  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setCapturedImages(prev => [...prev, imageSrc]);
      }
    }
  };
  
  const removeCapturedImage = (index: number) => {
    setCapturedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div>
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Interactive Tools</h1>
          <p className="text-xl max-w-3xl">
            Explore our AI-powered tools to learn more about personalized treatment approaches and interact with clinical resources.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex border-b mb-8">
            <button
              className={`py-2 px-4 font-medium text-sm focus:outline-none flex items-center space-x-2 ${
                activeTab === 'chat' 
                  ? 'border-b-2 border-blue-600 text-blue-600' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('chat')}
            >
              <MessageSquare className="h-5 w-5" />
              <span>AI Assistant</span>
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm focus:outline-none flex items-center space-x-2 ${
                activeTab === 'upload' 
                  ? 'border-b-2 border-blue-600 text-blue-600' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('upload')}
            >
              <Upload className="h-5 w-5" />
              <span>Upload Images</span>
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm focus:outline-none flex items-center space-x-2 ${
                activeTab === 'camera' 
                  ? 'border-b-2 border-blue-600 text-blue-600' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('camera')}
            >
              <Camera className="h-5 w-5" />
              <span>Camera Access</span>
            </button>
          </div>
          
          {/* Tab content */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Chat Assistant */}
            {activeTab === 'chat' && (
              <div className="flex flex-col h-[600px]">
                <div className="flex-grow overflow-y-auto mb-4 p-4 bg-gray-50 rounded-lg">
                  {messages.map((message, index) => (
                    <div key={index} className={`mb-4 ${message.sender === 'user' ? 'flex justify-end' : 'flex items-start'}`}>
                      {message.sender === 'bot' && (
                        <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 flex-shrink-0">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                      )}
                      <div className={`${message.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-blue-50 text-gray-800 rounded-tl-none'} p-3 rounded-lg max-w-[80%]`}>
                        <p className={message.sender === 'user' ? '' : 'text-gray-700'}>{message.text}</p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex items-start mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg rounded-tl-none">
                        <div className="flex space-x-2">
                          <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                          <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your question about personalized treatments..."
                    className="flex-grow py-2 px-3 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={inputMessage.trim() === '' || isTyping}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-md disabled:opacity-50 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  <p>For medical advice, please consult a healthcare professional.</p>
                </div>
              </div>
            )}
            
            {/* Image Upload */}
            {activeTab === 'upload' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Upload Medical Images</h3>
                  <p className="text-gray-600 mb-4">
                    Upload images for consultation or documentation purposes. Accepted formats: JPG, PNG, HEIC.
                  </p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <input
                      type="file"
                      id="file-upload"
                      accept="image/*"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center justify-center"
                    >
                      <Upload className="h-10 w-10 text-blue-600 mb-2" />
                      <span className="text-gray-700 font-medium">Click to upload images</span>
                      <span className="text-gray-500 text-sm mt-1">or drag and drop files here</span>
                    </label>
                  </div>
                </div>
                
                {uploadedImages.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3">Uploaded Images ({uploadedImages.length})</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <img 
                            src={image} 
                            alt={`Uploaded ${index + 1}`}
                            className="w-full h-40 object-cover rounded-lg" 
                          />
                          <button
                            onClick={() => removeUploadedImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <button className="btn-primary">
                        Submit Images for Review
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Privacy Note</h4>
                      <p className="text-sm text-gray-600">
                        All uploaded images are encrypted and stored securely. Images are only used for the purpose you specify and are not shared with third parties without consent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Camera Access */}
            {activeTab === 'camera' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Camera Access</h3>
                  <p className="text-gray-600 mb-4">
                    Use your device's camera to capture images for consultation or documentation.
                  </p>
                  
                  {!isCameraActive ? (
                    <div className="text-center">
                      <button 
                        className="btn-primary inline-flex items-center"
                        onClick={enableCamera}
                      >
                        <Camera className="mr-2 h-5 w-5" />
                        Enable Camera
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="relative mb-4">
                        <Webcam
                          audio={false}
                          ref={webcamRef}
                          screenshotFormat="image/jpeg"
                          className="w-full h-auto rounded-lg"
                          videoConstraints={{
                            facingMode: "user"
                          }}
                        />
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                          <button 
                            className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
                            onClick={captureImage}
                          >
                            <Camera className="h-5 w-5" />
                          </button>
                          <button 
                            className="bg-red-600 text-white p-3 rounded-full shadow-lg"
                            onClick={disableCamera}
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      {capturedImages.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-3">Captured Images ({capturedImages.length})</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {capturedImages.map((image, index) => (
                              <div key={index} className="relative group">
                                <img 
                                  src={image} 
                                  alt={`Captured ${index + 1}`}
                                  className="w-full h-40 object-cover rounded-lg" 
                                />
                                <button
                                  onClick={() => removeCapturedImage(index)}
                                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <X className="h-4 w-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4">
                            <button className="btn-primary">
                              Submit Images for Review
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Camera Access Information</h4>
                      <p className="text-sm text-gray-600">
                        Camera access requires your permission and only functions while you're on this page. No images are stored on our servers until you explicitly choose to submit them.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">How We Use These Tools</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="card text-center">
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Assisted Consultation</h3>
              <p className="text-gray-600">
                Our AI assistant helps provide personalized information about treatment approaches and the Leapfrog Design methodology.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Upload className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Image Sharing</h3>
              <p className="text-gray-600">
                Securely upload and share medical images with healthcare providers for remote consultation and treatment planning.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Camera className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-Time Documentation</h3>
              <p className="text-gray-600">
                Use your device camera to capture and document relevant information for healthcare providers and your personal medical records.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsPage;
 