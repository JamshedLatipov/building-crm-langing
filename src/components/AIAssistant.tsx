"use client";

import React, { useState, useEffect } from "react";
import { useAI } from "@/context/AIContext";

export const AIAssistant: React.FC = () => {
  const { profile, setProfile } = useAI();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState("");

  // Initial welcome message based on profile
  useEffect(() => {
    if (messages.length === 0) {
      const greeting =
        profile.industry !== "General"
          ? `Hello! I am your Solution Architect AI. I see you're in the ${profile.industry} sector. How can I help you today?`
          : "Hello! I am your Solution Architect AI. How can I help you today?";
      setMessages([{ role: "assistant", content: greeting }]);
    }
  }, [profile.industry, messages.length]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input;
    const newMessages = [
      ...messages,
      { role: "user", content: userText } as const,
    ];
    setMessages(newMessages);
    setInput("");

    // Context updating logic
    const lowerInput = userText.toLowerCase();
    let newIndustry = profile.industry;
    let newRole = profile.role;
    let updatedContext = false;

    if (lowerInput.includes("bank") || lowerInput.includes("finance")) {
      newIndustry = "Finance";
      updatedContext = true;
    } else if (
      lowerInput.includes("health") ||
      lowerInput.includes("hospital")
    ) {
      newIndustry = "Healthcare";
      updatedContext = true;
    } else if (lowerInput.includes("telecom")) {
      newIndustry = "Telecom";
      updatedContext = true;
    }

    if (lowerInput.includes("cto") || lowerInput.includes("tech lead")) {
      newRole = "CTO";
      updatedContext = true;
    } else if (lowerInput.includes("ceo") || lowerInput.includes("founder")) {
      newRole = "CEO";
      updatedContext = true;
    }

    if (updatedContext) {
      setProfile({ industry: newIndustry, role: newRole });
    }

    // Mock dynamic response
    setTimeout(() => {
      let response = `That sounds like an interesting project. `;

      if (updatedContext) {
        response += `I've updated your profile to ${newRole} in ${newIndustry}. `;
      }

      if (lowerInput.includes("react") || lowerInput.includes("frontend")) {
        response +=
          "For frontend development, I strongly recommend a Next.js architecture with Edge caching.";
      } else if (
        lowerInput.includes("database") ||
        lowerInput.includes("data")
      ) {
        response +=
          "For data-heavy applications, a Data Lakehouse approach with Snowflake or Databricks works best.";
      } else if (newIndustry === "Finance") {
        response +=
          "Given your industry, security is paramount. I recommend a cloud-native microservices architecture with Zero-Trust network policies.";
      } else {
        response +=
          "Based on our best practices, I would recommend a scalable serverless architecture. Would you like to explore the Architecture Studio?";
      }

      setMessages([...newMessages, { role: "assistant", content: response }]);
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
              <div
                key={i}
                className={`p-3 rounded-lg ${m.role === "user" ? "bg-blue-50 ml-8" : "bg-gray-100 mr-8"}`}
              >
                {m.content}
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex space-x-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0070ad]"
            />
            <button
              onClick={handleSend}
              className="bg-[#0070ad] text-white px-3 py-2 rounded text-sm font-bold"
            >
              Send
            </button>
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
