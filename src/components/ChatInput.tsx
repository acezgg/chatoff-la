import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon, PaperclipIcon, MicIcon } from "lucide-react";
import { useState, KeyboardEvent } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

export const ChatInput = ({ onSendMessage, isLoading = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
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
    <div className="border-t border-border bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative flex items-end gap-3">
          <div className="flex-1 relative">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message..."
              className="min-h-[52px] max-h-[200px] resize-none bg-chat-input border-chat-input-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 pr-12"
              disabled={isLoading}
            />
            <div className="absolute right-3 bottom-3 flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                disabled={isLoading}
              >
                <PaperclipIcon className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                disabled={isLoading}
              >
                <MicIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Button
            onClick={handleSend}
            disabled={!message.trim() || isLoading}
            className="h-[52px] w-[52px] rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-50"
          >
            <SendIcon className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-2 flex items-center justify-center">
          <p className="text-xs text-muted-foreground">
            Chatoff can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
};