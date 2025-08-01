import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquareIcon, LightbulbIcon, CodeIcon, PenToolIcon } from "lucide-react";
interface ChatWelcomeProps {
  onStartChat: (prompt: string) => void;
}
export const ChatWelcome = ({
  onStartChat
}: ChatWelcomeProps) => {
  const suggestions = [{
    icon: MessageSquareIcon,
    title: "Start a conversation",
    description: "Ask me anything you'd like to know",
    prompt: "Hello! What can you help me with today?"
  }, {
    icon: LightbulbIcon,
    title: "Get creative ideas",
    description: "Brainstorm solutions and concepts",
    prompt: "Help me brainstorm creative ideas for a new project"
  }, {
    icon: CodeIcon,
    title: "Code assistance",
    description: "Get help with programming tasks",
    prompt: "Can you help me write a function to sort an array?"
  }, {
    icon: PenToolIcon,
    title: "Write content",
    description: "Draft emails, articles, or stories",
    prompt: "Help me write a professional email to my team"
  }];
  return <div className="flex-1 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-primary-foreground">CO</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Start a Chat!</h1>
            
          </div>
        </div>

        

        <div className="text-xs text-muted-foreground">
          Chatoff can make mistakes. Consider checking important information.
        </div>
      </div>
    </div>;
};