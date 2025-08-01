import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CopyIcon, ThumbsUpIcon, ThumbsDownIcon, RefreshCwIcon } from "lucide-react";

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const ChatMessage = ({ role, content, timestamp }: ChatMessageProps) => {
  const isUser = role === 'user';

  return (
    <div className={`group flex gap-4 p-6 ${isUser ? 'bg-chat-surface' : 'bg-background'} hover:bg-chat-surface-hover transition-colors`}>
      <Avatar className="h-8 w-8 shrink-0">
        <AvatarFallback className={isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}>
          {isUser ? 'U' : 'C'}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-foreground">
            {isUser ? 'You' : 'Chatoff'}
          </p>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        
        <div className="prose prose-sm max-w-none text-foreground">
          <p className="whitespace-pre-wrap leading-relaxed">{content}</p>
        </div>
        
        {!isUser && (
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground hover:text-foreground">
              <CopyIcon className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground hover:text-foreground">
              <ThumbsUpIcon className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground hover:text-foreground">
              <ThumbsDownIcon className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground hover:text-foreground">
              <RefreshCwIcon className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};