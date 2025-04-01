
import { Send } from "lucide-react";
import React, { useState, KeyboardEvent } from "react";

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  isDisabled?: boolean;
};

export function ChatInput({ onSendMessage, isDisabled = false }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && !isDisabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border bg-card rounded-2xl shadow-sm overflow-hidden flex items-end">
      <textarea
        className="flex-1 py-3 px-4 bg-transparent outline-none resize-none min-h-[56px] max-h-[200px]"
        placeholder="Ask about airport lounges..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isDisabled}
        rows={1}
        style={{ scrollbarWidth: "none" }}
      />
      <button
        className={`p-3 text-primary hover:text-primary/80 transition-colors ${
          !message.trim() || isDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleSend}
        disabled={!message.trim() || isDisabled}
        aria-label="Send message"
      >
        <Send size={20} />
      </button>
    </div>
  );
}
