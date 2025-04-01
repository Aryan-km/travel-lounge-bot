
// API key will be hardcoded here - replace the placeholder with your actual key
const API_KEY = "AIzaSyBG88Dc6spqDia9kseXyitK91ht2cQtNZI"; // API key has been added

// This is just a sample of what a lounge information response might look like
const SAMPLE_LOUNGES = [
  {
    airport: "Heathrow Airport (LHR)",
    lounges: [
      { 
        name: "Plaza Premium Lounge", 
        terminal: "Terminal 2",
        access: ["Priority Pass", "Business Class", "First Class", "Pay per visit"],
        amenities: ["Free Wi-Fi", "Shower facilities", "Food and beverages", "Workstations"],
        hours: "5:00 AM - 10:00 PM daily"
      },
      { 
        name: "British Airways Galleries Club", 
        terminal: "Terminal 5",
        access: ["British Airways Business Class", "Oneworld Sapphire", "Emerald status"],
        amenities: ["Free Wi-Fi", "Shower facilities", "Buffet", "Bar service"],
        hours: "5:00 AM - 10:30 PM daily"
      }
    ]
  },
  {
    airport: "John F. Kennedy International Airport (JFK)",
    lounges: [
      { 
        name: "Centurion Lounge", 
        terminal: "Terminal 4",
        access: ["American Express Platinum Card", "American Express Centurion Card"],
        amenities: ["Premium food", "Bar", "Shower suites", "Work areas"],
        hours: "6:00 AM - 8:00 PM daily"
      }
    ]
  }
];

export interface ChatMessage {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export async function queryLoungeInfo(prompt: string): Promise<string> {
  try {
    // This would be where you make the actual API call to your AI provider
    // For now, we'll simulate a response with a delay
    
    console.log("Querying with prompt:", prompt);
    console.log("Using API key:", API_KEY ? "API key is set" : "API key is missing");
    
    // Simulate API call latency
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Process the query to find relevant lounge information
    // This is where you would connect to a real AI API
    const response = generateResponse(prompt);
    
    return response;
  } catch (error) {
    console.error("Error querying AI service:", error);
    return "I'm sorry, I encountered an issue while retrieving lounge information. Please try again later.";
  }
}

// This is a placeholder function that would be replaced by the actual AI response
function generateResponse(prompt: string): string {
  prompt = prompt.toLowerCase();
  
  // Check if query is about a specific airport
  let matchedAirport = SAMPLE_LOUNGES.find(airport => 
    prompt.includes(airport.airport.toLowerCase()) || 
    prompt.includes(airport.airport.split('(')[0].trim().toLowerCase())
  );
  
  if (matchedAirport) {
    const airportInfo = `Here's information about lounges at ${matchedAirport.airport}:\n\n`;
    
    return airportInfo + matchedAirport.lounges.map(lounge => 
      `🛋️ ${lounge.name} (${lounge.terminal})\n` +
      `Access: ${lounge.access.join(', ')}\n` +
      `Amenities: ${lounge.amenities.join(', ')}\n` +
      `Hours: ${lounge.hours}`
    ).join('\n\n');
  }
  
  // General queries about lounge access
  if (prompt.includes('priority pass') || prompt.includes('subscription')) {
    return `Priority Pass is a popular lounge membership program that provides access to over 1,300 lounges worldwide regardless of airline or class of travel.\n\nMembership tiers:\n- Standard: $99/year + $32 per lounge visit\n- Standard Plus: $299/year with 10 free visits, then $32 per visit\n- Prestige: $429/year with unlimited free visits\n\nMany premium credit cards include Priority Pass membership as a benefit.`;
  }
  
  if (prompt.includes('business class') || prompt.includes('first class')) {
    return `Passengers traveling in Business or First Class typically have access to their airline's lounges or partner lounges. Access policies vary by airline and route:\n\n- Most international Business/First Class tickets include lounge access\n- Some airlines restrict lounge access for domestic premium cabin tickets\n- Alliance memberships (Star Alliance, Oneworld, SkyTeam) typically allow Business/First passengers to use partner lounges`;
  }
  
  if (prompt.includes('credit card') || prompt.includes('amex') || prompt.includes('platinum')) {
    return `Several premium credit cards offer airport lounge access as a benefit:\n\n- American Express Platinum: Centurion Lounges, Delta SkyClubs (when flying Delta), Priority Pass lounges\n- Chase Sapphire Reserve: Priority Pass membership\n- Citi Prestige: Priority Pass membership\n- United Club Card: United Club access\n- Delta Reserve: Delta SkyClub access (when flying Delta)`;
  }
  
  if (prompt.includes('pay') || prompt.includes('purchase') || prompt.includes('buy')) {
    return `Many lounges offer pay-per-use options for travelers without membership or eligible tickets:\n\n- Typical prices range from $30-70 USD depending on the lounge and location\n- Some lounges allow pre-booking discounted passes online\n- Apps like LoungeBuddy allow you to purchase one-time access to certain lounges\n- Some lounges offer shorter 1-3 hour packages at reduced prices`;
  }
  
  // Default response for other queries
  return `I can provide information about airport lounges worldwide, including:\n\n- Lounge access by airline class (Business/First)\n- Lounge membership programs (Priority Pass, etc.)\n- Credit cards that offer lounge access\n- Pay-per-use lounge options\n- Specific lounges at particular airports\n\nPlease ask me about any of these topics or specify an airport to learn about its lounges.`;
}
