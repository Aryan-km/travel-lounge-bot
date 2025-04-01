
// API key will be hardcoded here - replace the placeholder with your actual key
const API_KEY = "AIzaSyBG88Dc6spqDia9kseXyitK91ht2cQtNZI";

// More comprehensive lounge database
const AIRPORT_LOUNGES = [
  {
    airport: "Heathrow Airport",
    code: "LHR",
    location: "London, UK",
    lounges: [
      { 
        name: "Plaza Premium Lounge", 
        terminal: "Terminal 2",
        access: ["Priority Pass", "DragonPass", "Business Class", "First Class", "Pay per visit ($40)"],
        amenities: ["Free Wi-Fi", "Shower facilities", "Full food menu", "Bar service", "Workstations", "Newspapers"],
        hours: "5:00 AM - 10:00 PM daily",
        rating: 4.2
      },
      { 
        name: "British Airways Galleries Club", 
        terminal: "Terminal 5",
        access: ["British Airways Business Class", "Oneworld Sapphire", "Emerald status"],
        amenities: ["Free Wi-Fi", "Shower facilities", "Buffet", "Premium bar service", "Business center"],
        hours: "5:00 AM - 10:30 PM daily",
        rating: 4.5
      },
      {
        name: "Aspire Lounge",
        terminal: "Terminal 5",
        access: ["Priority Pass", "LoungeKey", "DragonPass", "Pay per visit ($35)"],
        amenities: ["Free Wi-Fi", "Complimentary food", "Alcoholic drinks", "Newspapers", "Charging stations"],
        hours: "5:00 AM - 9:00 PM daily",
        rating: 3.9
      }
    ]
  },
  {
    airport: "John F. Kennedy International Airport",
    code: "JFK",
    location: "New York, USA",
    lounges: [
      { 
        name: "Centurion Lounge", 
        terminal: "Terminal 4",
        access: ["American Express Platinum Card", "American Express Centurion Card"],
        amenities: ["Premium food", "Craft cocktails", "Shower suites", "Work areas", "High-speed Wi-Fi"],
        hours: "6:00 AM - 8:00 PM daily",
        rating: 4.7
      },
      {
        name: "Delta Sky Club",
        terminal: "Terminal 4",
        access: ["Delta One passengers", "Delta Reserve cardholders", "Delta SkyTeam Elite Plus"],
        amenities: ["Complimentary food", "Premium bar", "High-speed Wi-Fi", "Business center", "Shower suites"],
        hours: "5:00 AM - 11:00 PM daily",
        rating: 4.3
      }
    ]
  },
  {
    airport: "Singapore Changi Airport",
    code: "SIN",
    location: "Singapore",
    lounges: [
      {
        name: "Singapore Airlines SilverKris Lounge",
        terminal: "Terminal 3",
        access: ["Singapore Airlines First Class", "Singapore Airlines Business Class", "Star Alliance Gold"],
        amenities: ["Premium dining", "Bar service", "Shower suites", "Nap rooms", "Business facilities"],
        hours: "24 hours daily",
        rating: 4.8
      },
      {
        name: "Plaza Premium Lounge",
        terminal: "Terminal 1",
        access: ["Priority Pass", "DragonPass", "Pay per visit ($50)"],
        amenities: ["Buffet meals", "Bar service", "Shower facilities", "Massage services", "Wi-Fi"],
        hours: "24 hours daily",
        rating: 4.2
      }
    ]
  },
  {
    airport: "Indira Gandhi International Airport",
    code: "DEL",
    location: "Delhi, India",
    lounges: [
      {
        name: "Plaza Premium Lounge",
        terminal: "Terminal 3 (International)",
        access: ["Priority Pass", "DragonPass", "Business Class", "First Class", "Pay per visit (₹3000)"],
        amenities: ["Buffet dining", "Bar service", "Shower facilities", "Wi-Fi", "Massage chairs", "Business center"],
        hours: "24 hours daily",
        rating: 4.0
      },
      {
        name: "Air India Maharaja Lounge",
        terminal: "Terminal 3 (International)",
        access: ["Air India Business Class", "Air India First Class", "Star Alliance Gold"],
        amenities: ["Indian and Western cuisine", "Full bar", "Wi-Fi", "Newspapers", "Shower facilities"],
        hours: "24 hours daily",
        rating: 3.8
      },
      {
        name: "ITC Green Lounge",
        terminal: "Terminal 3 (Domestic)",
        access: ["Priority Pass", "Credit card access (select cards)", "Pay per visit (₹2000)"],
        amenities: ["Hot meals", "Alcoholic beverages", "Wi-Fi", "Business facilities"],
        hours: "6:00 AM - 11:00 PM daily",
        rating: 3.7
      }
    ]
  },
  {
    airport: "Dubai International Airport",
    code: "DXB",
    location: "Dubai, UAE",
    lounges: [
      {
        name: "Emirates First Class Lounge",
        terminal: "Terminal 3",
        access: ["Emirates First Class", "Emirates Skywards Platinum"],
        amenities: ["Fine dining", "Premium bar", "Cigar lounge", "Spa", "Shower suites", "Direct boarding"],
        hours: "24 hours daily",
        rating: 4.9
      },
      {
        name: "Marhaba Lounge",
        terminal: "Terminal 3",
        access: ["Priority Pass", "LoungeKey", "Pay per visit ($55)"],
        amenities: ["Buffet dining", "Bar service", "Shower facilities", "Wi-Fi", "Business center"],
        hours: "24 hours daily",
        rating: 4.1
      }
    ]
  }
];

// Access program information
const ACCESS_PROGRAMS = {
  "Priority Pass": {
    description: "A membership program providing access to 1,300+ airport lounges worldwide.",
    plans: [
      { name: "Standard", price: "$99/year + $32 per visit" },
      { name: "Standard Plus", price: "$299/year with 10 free visits, then $32 per visit" },
      { name: "Prestige", price: "$429/year with unlimited free visits" }
    ],
    creditCards: ["Chase Sapphire Reserve", "Amex Platinum", "Citi Prestige"]
  },
  "DragonPass": {
    description: "A digital platform offering access to 1,000+ airport lounges globally.",
    plans: [
      { name: "Standard", price: "$99/year + $27 per visit" },
      { name: "Prestige", price: "$399/year with unlimited visits" }
    ],
    creditCards: ["HSBC Premier", "Various regional bank cards"]
  },
  "LoungeKey": {
    description: "A lounge network associated with Mastercard World and World Elite cards.",
    plans: [
      { name: "Standard", price: "Varies by card issuer, typically $27-32 per visit" }
    ],
    creditCards: ["Mastercard World Elite cards", "Various premium bank cards"]
  },
  "Credit Card Access": {
    cards: [
      { 
        name: "American Express Platinum", 
        lounges: ["Centurion Lounges", "Delta SkyClubs (when flying Delta)", "Priority Pass Select", "Escape Lounges"],
        annualFee: "$695"
      },
      { 
        name: "Chase Sapphire Reserve", 
        lounges: ["Priority Pass Select"],
        annualFee: "$550"
      },
      { 
        name: "Citi Prestige", 
        lounges: ["Priority Pass Select"],
        annualFee: "$495"
      }
    ]
  }
};

export interface ChatMessage {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export async function queryLoungeInfo(prompt: string): Promise<string> {
  try {
    console.log("Querying with prompt:", prompt);
    console.log("Using API key:", API_KEY ? "API key is set" : "API key is missing");
    
    // Simulate API call latency
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return generateEnhancedResponse(prompt);
  } catch (error) {
    console.error("Error querying AI service:", error);
    return "I'm sorry, I encountered an issue while retrieving lounge information. Please try again later.";
  }
}

// Enhanced response generator
function generateEnhancedResponse(prompt: string): string {
  const lowerPrompt = prompt.toLowerCase();
  
  // Check for airport-specific queries
  for (const airportInfo of AIRPORT_LOUNGES) {
    const airportName = airportInfo.airport.toLowerCase();
    const airportCode = airportInfo.code.toLowerCase();
    const airportLocation = airportInfo.location.toLowerCase();
    
    // Check if the query contains airport name, code, or location
    if (lowerPrompt.includes(airportName) || 
        lowerPrompt.includes(airportCode) || 
        lowerPrompt.includes(airportLocation)) {
      
      return formatAirportLoungeResponse(airportInfo);
    }
  }
  
  // Check for access program queries
  if (lowerPrompt.includes("priority pass") || 
      lowerPrompt.includes("dragonpass") || 
      lowerPrompt.includes("lounge key")) {
    return formatAccessProgramResponse(lowerPrompt);
  }
  
  // Check for credit card queries
  if (lowerPrompt.includes("credit card") || 
      lowerPrompt.includes("amex") || 
      lowerPrompt.includes("american express") || 
      lowerPrompt.includes("mastercard") || 
      lowerPrompt.includes("visa") || 
      lowerPrompt.includes("chase") || 
      lowerPrompt.includes("citi")) {
    return formatCreditCardResponse();
  }
  
  // Check for general access queries
  if (lowerPrompt.includes("business class") || 
      lowerPrompt.includes("first class") || 
      lowerPrompt.includes("how to access") || 
      lowerPrompt.includes("how to get in")) {
    return formatGeneralAccessResponse();
  }
  
  // Check for pay-per-visit queries
  if (lowerPrompt.includes("pay") || 
      lowerPrompt.includes("purchase") || 
      lowerPrompt.includes("buy") || 
      lowerPrompt.includes("cost") || 
      lowerPrompt.includes("price")) {
    return formatPayPerVisitResponse();
  }
  
  // Default help response
  return formatHelpResponse();
}

function formatAirportLoungeResponse(airportInfo: any): string {
  let response = `## Airport Lounge Information for ${airportInfo.airport} (${airportInfo.code})\n\n`;
  response += `📍 Location: ${airportInfo.location}\n`;
  response += `🛫 Number of lounges: ${airportInfo.lounges.length}\n\n`;
  
  airportInfo.lounges.forEach((lounge: any, index: number) => {
    response += `### ${index + 1}. ${lounge.name}\n`;
    response += `🚪 Location: ${lounge.terminal}\n`;
    response += `⏰ Hours: ${lounge.hours}\n`;
    response += `⭐ Rating: ${lounge.rating}/5.0\n\n`;
    
    response += `#### Access Options:\n`;
    lounge.access.forEach((access: string) => {
      response += `• ${access}\n`;
    });
    response += `\n`;
    
    response += `#### Amenities:\n`;
    lounge.amenities.forEach((amenity: string) => {
      response += `• ${amenity}\n`;
    });
    response += `\n`;
  });
  
  response += `Need information about specific access programs or credit cards that provide lounge access? Just ask!`;
  
  return response;
}

function formatAccessProgramResponse(prompt: string): string {
  let response = "";
  
  if (prompt.includes("priority pass")) {
    const program = ACCESS_PROGRAMS["Priority Pass"];
    response = `## Priority Pass Membership Information\n\n`;
    response += `${program.description}\n\n`;
    
    response += `### Membership Plans:\n`;
    program.plans.forEach((plan) => {
      response += `• **${plan.name}**: ${plan.price}\n`;
    });
    response += `\n`;
    
    response += `### Credit Cards that offer Priority Pass:\n`;
    program.creditCards.forEach((card) => {
      response += `• ${card}\n`;
    });
  } else if (prompt.includes("dragonpass")) {
    const program = ACCESS_PROGRAMS["DragonPass"];
    response = `## DragonPass Membership Information\n\n`;
    response += `${program.description}\n\n`;
    
    response += `### Membership Plans:\n`;
    program.plans.forEach((plan) => {
      response += `• **${plan.name}**: ${plan.price}\n`;
    });
    response += `\n`;
    
    response += `### Credit Cards that offer DragonPass:\n`;
    program.creditCards.forEach((card) => {
      response += `• ${card}\n`;
    });
  } else if (prompt.includes("lounge key")) {
    const program = ACCESS_PROGRAMS["LoungeKey"];
    response = `## LoungeKey Membership Information\n\n`;
    response += `${program.description}\n\n`;
    
    response += `### Access Options:\n`;
    program.plans.forEach((plan) => {
      response += `• **${plan.name}**: ${plan.price}\n`;
    });
    response += `\n`;
    
    response += `### Credit Cards that offer LoungeKey:\n`;
    program.creditCards.forEach((card) => {
      response += `• ${card}\n`;
    });
  } else {
    response = formatHelpResponse();
  }
  
  return response;
}

function formatCreditCardResponse(): string {
  const cardInfo = ACCESS_PROGRAMS["Credit Card Access"];
  let response = `## Premium Credit Cards with Lounge Access\n\n`;
  
  cardInfo.cards.forEach((card) => {
    response += `### ${card.name}\n`;
    response += `💳 Annual Fee: ${card.annualFee}\n`;
    response += `🛋️ Lounge Access:\n`;
    
    card.lounges.forEach((lounge) => {
      response += `• ${lounge}\n`;
    });
    response += `\n`;
  });
  
  response += `Many other credit cards offer lounge access as a premium benefit. Ask about a specific card for more details!`;
  
  return response;
}

function formatGeneralAccessResponse(): string {
  let response = `## Ways to Access Airport Lounges\n\n`;
  
  response += `### 1. Premium Cabin Tickets\n`;
  response += `Passengers traveling in Business or First Class typically have complimentary access to airline lounges. Access policies vary by airline and route:\n`;
  response += `• Most international Business/First Class tickets include lounge access\n`;
  response += `• Some airlines restrict lounge access for domestic premium cabin tickets\n`;
  response += `• Alliance memberships (Star Alliance, Oneworld, SkyTeam) allow Business/First passengers to use partner lounges\n\n`;
  
  response += `### 2. Airline Status\n`;
  response += `Frequent flyers with elite status often receive lounge access benefits:\n`;
  response += `• Star Alliance Gold members can access Star Alliance lounges when traveling internationally\n`;
  response += `• Oneworld Emerald and Sapphire members can access Oneworld lounges\n`;
  response += `• SkyTeam Elite Plus members can access SkyTeam lounges on international itineraries\n\n`;
  
  response += `### 3. Lounge Memberships\n`;
  response += `Several programs offer lounge access for an annual fee:\n`;
  response += `• Priority Pass: Access to 1,300+ lounges worldwide\n`;
  response += `• DragonPass: Access to 1,000+ lounges globally\n`;
  response += `• Airline club memberships (United Club, Admiral's Club, etc.)\n\n`;
  
  response += `### 4. Credit Cards\n`;
  response += `Many premium credit cards include lounge access benefits:\n`;
  response += `• American Express Platinum: Centurion Lounges, Delta SkyClubs (when flying Delta), Priority Pass\n`;
  response += `• Chase Sapphire Reserve: Priority Pass membership\n\n`;
  
  response += `### 5. Pay-Per-Visit\n`;
  response += `Many lounges offer one-time access for a fee:\n`;
  response += `• Typical prices range from $30-70 USD depending on the lounge and location\n`;
  response += `• Some lounges allow pre-booking discounted passes online\n`;
  
  return response;
}

function formatPayPerVisitResponse(): string {
  let response = `## Pay-Per-Visit Lounge Access\n\n`;
  
  response += `Many airport lounges worldwide offer single-visit access options for travelers without a membership or eligible ticket/status:\n\n`;
  
  response += `### Typical Pricing\n`;
  response += `• North America: $40-70 USD\n`;
  response += `• Europe: €25-45 EUR\n`;
  response += `• Asia: $30-60 USD\n`;
  response += `• Middle East: $50-80 USD\n\n`;
  
  response += `### Booking Options\n`;
  response += `• At the door: Pay directly at the lounge entrance (subject to availability)\n`;
  response += `• Online pre-booking: Services like LoungeBuddy, Plaza Premium, and Lounge Pass offer discounted advance booking\n`;
  response += `• Airline websites: Some airlines sell lounge access during check-in or via their apps\n\n`;
  
  response += `### Benefits of Pay-Per-Visit\n`;
  response += `• No annual membership fees or commitments\n`;
  response += `• Usually includes all basic amenities (food, drinks, Wi-Fi, seating)\n`;
  response += `• Some lounges offer shorter 1-3 hour packages at reduced prices\n`;
  response += `• Ideal for occasional travelers or long layovers\n\n`;
  
  response += `To find specific pay-per-visit options at a particular airport, ask me about that airport!`;
  
  return response;
}

function formatHelpResponse(): string {
  return `## Lounge Finder Assistant\n\n` +
    `I can provide detailed information about airport lounges worldwide. Here's how I can help:\n\n` +
    
    `### Ask about a specific airport:\n` +
    `• "Tell me about lounges at Heathrow Airport"\n` +
    `• "What lounges are at JFK Terminal 4?"\n` +
    `• "Are there any lounges at Indira Gandhi Airport?"\n\n` +
    
    `### Ask about access programs:\n` +
    `• "How does Priority Pass work?"\n` +
    `• "Tell me about DragonPass membership"\n` +
    `• "What credit cards offer lounge access?"\n\n` +
    
    `### Ask about access methods:\n` +
    `• "How can I access airport lounges with business class?"\n` +
    `• "How much does it cost to buy lounge access?"\n` +
    `• "What elite status gives lounge access?"\n\n` +
    
    `Just let me know what you'd like to learn about!`;
}
