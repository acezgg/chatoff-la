import { Button } from "@/components/ui/button";
import { MenuIcon, PlusIcon } from "lucide-react";

interface ChatHeaderProps {
  onToggleSidebar: () => void;
  onNewChat: () => void;
  chatTitle?: string;
}

export const ChatHeader = ({ onToggleSidebar, onNewChat, chatTitle }: ChatHeaderProps) => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="md:hidden h-8 w-8 p-0"
          >
            <MenuIcon className="h-4 w-4" />
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Chatoff</h1>
              {chatTitle && (
                <p className="text-xs text-muted-foreground">{chatTitle}</p>
              )}
            </div>
          </div>
        </div>

        <Button
          onClick={onNewChat}
          variant="outline"
          size="sm"
          className="hidden md:flex gap-2"
        >
          <PlusIcon className="h-3 w-3" />
          New chat
        </Button>
      </div>
    </header>
  );
};