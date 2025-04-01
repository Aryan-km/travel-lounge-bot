
import { ChatInterface } from "@/components/ChatInterface";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-card/80 backdrop-blur-sm p-4 relative z-10">
        <div className="max-w-3xl mx-auto flex items-center">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-lounge-gradient flex items-center justify-center text-white font-bold">
              L
            </div>
            <h1 className="font-semibold text-xl">Lounge Finder</h1>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">
            Your Airport Lounge Assistant
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col">
        <ChatInterface />
      </main>
      
      <ThemeToggle />
    </div>
  );
};

export default Index;
