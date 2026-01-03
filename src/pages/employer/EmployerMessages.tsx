import { EmployerLayout } from "@/components/layout/EmployerLayout";
import { PageHeader } from "@/components/dashboard/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Search, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const EmployerMessages = () => {
  const [selectedChat, setSelectedChat] = useState(0);

  const conversations = [
    {
      id: 0,
      name: "Alex Johnson",
      role: "Senior Frontend Developer",
      lastMessage: "Thank you so much! I'm very excited about this opportunity.",
      time: "10 min ago",
      unread: true,
    },
    {
      id: 1,
      name: "Sarah Williams",
      role: "Frontend Developer",
      lastMessage: "I'd be happy to schedule a call this week.",
      time: "2 hours ago",
      unread: false,
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Product Designer",
      lastMessage: "Here's my updated portfolio link.",
      time: "1 day ago",
      unread: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "me",
      content: "Hi Alex! Thank you for applying to the Senior Frontend Developer position at TechCorp.",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      content: "We've reviewed your application and are impressed with your experience.",
      time: "10:31 AM",
    },
    {
      id: 3,
      sender: "applicant",
      content: "Thank you so much! I'm very excited about this opportunity.",
      time: "10:45 AM",
    },
  ];

  return (
    <EmployerLayout>
      <PageHeader 
        title="Messages" 
        description="Communicate with applicants"
      />

      <div className="stat-card p-0 overflow-hidden">
        <div className="grid md:grid-cols-3 h-[600px]">
          {/* Conversation List */}
          <div className="border-r border-border">
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search conversations..." className="pl-9" />
              </div>
            </div>
            <ScrollArea className="h-[540px]">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedChat(conv.id)}
                  className={cn(
                    "p-4 cursor-pointer border-b border-border hover:bg-muted/50 transition-colors",
                    selectedChat === conv.id && "bg-muted"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-foreground truncate">{conv.name}</p>
                        <span className="text-xs text-muted-foreground">{conv.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conv.role}</p>
                      <p className="text-sm text-muted-foreground truncate mt-1">{conv.lastMessage}</p>
                    </div>
                    {conv.unread && (
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                    )}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>

          {/* Message Area */}
          <div className="md:col-span-2 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">{conversations[selectedChat].name}</p>
                <p className="text-sm text-muted-foreground">{conversations[selectedChat].role}</p>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex",
                      msg.sender === "me" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "message-bubble",
                        msg.sender === "me" ? "message-bubble-sent" : "message-bubble-received"
                      )}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p className={cn(
                        "text-xs mt-1",
                        msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                      )}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Input 
                  placeholder="Type your message..." 
                  className="flex-1"
                />
                <Button size="icon">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EmployerLayout>
  );
};

export default EmployerMessages;
