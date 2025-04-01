
import React, { useState, useRef, useEffect } from "react";
import { ChatInput } from "./ChatInput";
import { ChatMessage, TypingIndicator } from "./ChatMessage";
import { queryLoungeInfo, ChatMessage as ChatMessageType } from "@/services/aiService";

export function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      content: "👋 Hello! I'm your Airport Lounge Assistant. Ask me about airport lounges around the world, access requirements, amenities, or anything else lounge-related!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: ChatMessageType = {
      content,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Get response from AI
      const response = await queryLoungeInfo(content);
      
      // Add AI response
      const botMessage: ChatMessageType = {
        content: response,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error getting response:", error);
      
      // Add error message
      const errorMessage: ChatMessageType = {
        content: "Sorry, I encountered an error while retrieving that information. Please try again.",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              content={message.content}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
          {isLoading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className="p-4 border-t bg-background/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <ChatInput onSendMessage={handleSendMessage} isDisabled={isLoading} />
        </div>
      </div>
    </div>
  );
}
