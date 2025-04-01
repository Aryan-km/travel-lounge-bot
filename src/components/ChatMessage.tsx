
import React from "react";
import { cn } from "@/lib/utils";

type ChatMessageProps = {
  content: string;
  isUser: boolean;
  timestamp?: Date;
};

export function ChatMessage({ content, isUser, timestamp = new Date() }: ChatMessageProps) {
  const timeString = timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <div className={cn("flex mb-4", isUser ? "justify-end" : "justify-start")}>
      <div className={isUser ? "user-bubble" : "bot-bubble"}>
        <div className="whitespace-pre-wrap">{content}</div>
        <div className={cn("text-xs mt-1 text-right", 
          isUser ? "text-primary-foreground/70" : "text-muted-foreground")}>
          {timeString}
        </div>
      </div>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex mb-4">
      <div className="bot-bubble !py-2.5">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
