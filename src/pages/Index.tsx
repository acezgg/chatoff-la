import { useState } from "react";
import { ChatSidebar } from "@/components/ChatSidebar";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ChatWelcome } from "@/components/ChatWelcome";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const Index = () => {
  const [selectedChatId, setSelectedChatId] = useState<string>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewChat = () => {
    setSelectedChatId(undefined);
    setMessages([]);
  };

  const handleSelectChat = (chatId: string) => {
    setSelectedChatId(chatId);
    // In a real app, you'd load messages for this chat from your backend
    if (chatId === '1') {
      setMessages([
        {
          id: '1',
          role: 'assistant',
          content: "Hello! Welcome to Chatoff. I'm here to help you with any questions or tasks you might have. How can I assist you today?",
          timestamp: "Just now"
        }
      ]);
    } else {
      setMessages([]);
    }
  };

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I understand you'd like me to help with that. This is a demo interface, so I'm providing a sample response. In a real implementation, this would connect to an AI service to provide helpful and accurate responses to your questions.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleStartChat = (prompt: string) => {
    handleSendMessage(prompt);
    if (!selectedChatId) {
      setSelectedChatId('new');
    }
  };

  return (
    <div className="h-screen flex bg-background">
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="hidden md:block">
          <ChatSidebar
            onNewChat={handleNewChat}
            onSelectChat={handleSelectChat}
            selectedChatId={selectedChatId}
          />
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <ChatHeader
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          onNewChat={handleNewChat}
          chatTitle={selectedChatId ? "Chat Session" : undefined}
        />

        {/* Messages or Welcome */}
        <div className="flex-1 flex flex-col">
          {messages.length === 0 ? (
            <ChatWelcome onStartChat={handleStartChat} />
          ) : (
            <ScrollArea className="flex-1">
              <div className="max-w-4xl mx-auto w-full">
                {messages.map((message) => (
                  <ChatMessage
                    key={message.id}
                    role={message.role}
                    content={message.content}
                    timestamp={message.timestamp}
                  />
                ))}
                {isLoading && (
                  <div className="p-6 bg-background">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-muted rounded-full animate-pulse" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-muted rounded animate-pulse w-1/4" />
                        <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          )}
        </div>

        {/* Input */}
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Index;
