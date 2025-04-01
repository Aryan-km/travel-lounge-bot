
import { ChatInterface } from "@/components/ChatInterface";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-accent/20">
      <header className="border-b bg-card/80 backdrop-blur-sm p-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto flex items-center">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-lounge-gradient flex items-center justify-center text-white font-bold">
              L
            </div>
            <h1 className="font-semibold text-xl">Lounge Finder</h1>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="text-sm text-muted-foreground hidden md:block">
              Your Airport Lounge Assistant
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col p-0 md:p-4 overflow-hidden">
        <Card className="flex-1 overflow-hidden border-0 md:border shadow-none md:shadow-md flex flex-col">
          <ChatInterface />
        </Card>
      </main>
    </div>
  );
};

export default Index;
