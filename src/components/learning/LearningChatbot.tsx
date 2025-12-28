import React, { useState } from 'react';
import { MessageCircle, X, Send, Book, HelpCircle } from 'lucide-react';

export default function LearningChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: 'Bonjour ! Je suis votre assistant d\'apprentissage. Comment puis-je vous aider ?', isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');

    // Simuler une réponse du chatbot
    setTimeout(() => {
      const botResponses = [
        "Je peux vous aider à trouver la formation qui correspond le mieux à vos besoins.",
        "Voici quelques suggestions basées sur votre intérêt.",
        "N'hésitez pas à me poser des questions sur nos formations et ressources."
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
    }, 1000);
  };

  const quickSuggestions = [
    "Comment choisir ma formation ?",
    "Quels sont les prérequis ?",
    "Comment obtenir un certificat ?"
  ];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-900 text-white rounded-full p-4 shadow-lg hover:bg-blue-800 transition-colors"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-xl z-50">
      <div className="flex justify-between items-center p-4 border-b bg-blue-900 text-white rounded-t-lg">
        <div className="flex items-center space-x-2">
          <Book className="h-5 w-5" />
          <h3 className="font-semibold">Assistant Formation</h3>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.isUser
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        {messages.length === 1 && (
          <div className="mb-4 space-y-2">
            {quickSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => {
                  setMessages([...messages, { text: suggestion, isUser: true }]);
                  setTimeout(() => {
                    setMessages(prev => [...prev, {
                      text: "Je vais vous aider avec ça. Que souhaitez-vous savoir spécifiquement ?",
                      isUser: false
                    }]);
                  }, 1000);
                }}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <HelpCircle className="h-4 w-4 inline mr-2" />
                {suggestion}
              </button>
            ))}
          </div>
        )}

        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Posez votre question..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSend}
            className="btn"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}