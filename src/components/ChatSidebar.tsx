import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusIcon, MessageSquareIcon, MoreHorizontalIcon, PenIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
interface ChatItem {
  id: string;
  title: string;
  timestamp: string;
}
interface ChatSidebarProps {
  onNewChat: () => void;
  onSelectChat: (chatId: string) => void;
  selectedChatId?: string;
}
export const ChatSidebar = ({
  onNewChat,
  onSelectChat,
  selectedChatId
}: ChatSidebarProps) => {
  const [chats] = useState<ChatItem[]>([{
    id: '1',
    title: 'Welcome to Chatoff',
    timestamp: 'Today'
  }, {
    id: '2',
    title: 'Getting started guide',
    timestamp: 'Yesterday'
  }, {
    id: '3',
    title: 'API Integration help',
    timestamp: '2 days ago'
  }, {
    id: '4',
    title: 'React component design',
    timestamp: '3 days ago'
  }, {
    id: '5',
    title: 'Database optimization',
    timestamp: '1 week ago'
  }]);
  return <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <Button onClick={onNewChat} className="w-full justify-start gap-3 bg-sidebar-accent hover:bg-sidebar-accent/80 text-sidebar-accent-foreground" variant="ghost">
          <PlusIcon className="h-4 w-4" />
          New chat
        </Button>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1 p-2">
        <div className="space-y-1">
          {chats.map(chat => (
            <div
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors group ${
                selectedChatId === chat.id 
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                  : 'hover:bg-sidebar-accent/50 text-sidebar-foreground'
              }`}
            >
              <MessageSquareIcon className="h-4 w-4 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{chat.title}</p>
                <p className="text-xs text-sidebar-foreground/60">{chat.timestamp}</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="sm" className="h-auto p-1">
                  <MoreHorizontalIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 text-sidebar-foreground">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
            U
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">User</p>
            
          </div>
        </div>
      </div>
    </div>;
};