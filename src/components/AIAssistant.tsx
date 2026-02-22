'use client';

import React, { useState } from 'react';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: 'Hello! I am your Solution Architect AI. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input } as const];
    setMessages(newMessages);
    setInput('');

    // Mock response
    setTimeout(() => {
      setMessages([...newMessages, {
        role: 'assistant',
        content: 'That sounds like an interesting project. Based on our best practices, I would recommend a cloud-native microservices architecture with a focus on data security. Would you like to explore a specific architectural diagram?'
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden">
          <div className="bg-[#0070ad] p-4 text-white flex justify-between items-center">
            <span className="font-bold">AI Solution Assistant</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`p-3 rounded-lg ${m.role === 'user' ? 'bg-blue-50 ml-8' : 'bg-gray-100 mr-8'}`}>
                {m.content}
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex space-x-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0070ad]"
            />
            <button onClick={handleSend} className="bg-[#0070ad] text-white px-3 py-2 rounded text-sm font-bold">Send</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#0070ad] text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform"
        >
          🤖
        </button>
      )}
    </div>
  );
};
