
// API key will be hardcoded here - replace the placeholder with your actual key
const API_KEY = "AIzaSyBG88Dc6spqDia9kseXyitK91ht2cQtNZI";

export interface ChatMessage {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export async function queryLoungeInfo(prompt: string): Promise<string> {
  try {
    console.log("Querying with prompt:", prompt);
    console.log("Using API key:", API_KEY ? "API key is set" : "API key is missing");
    
    // Construct the final prompt to get lounge information
    const finalPrompt = `Provide detailed information about airport lounges at ${prompt}. Include information about:
    - Available lounges (names, terminals, locations)
    - Access options (credit cards, memberships, pay-per-use)
    - Amenities (food, drinks, shower, wifi, etc.)
    - Hours of operation
    - Ratings if available
    
    Format the response in well-structured Markdown with proper headings, bullet points, and bold text. DO NOT use HTML tags like <strong>. Instead, use Markdown syntax like **bold text** for bold text.`;
    
    // Call the Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: finalPrompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.2,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 8192,
        }
      })
    });

    const data = await response.json();
    
    // Check if there's an error
    if (data.error) {
      console.error("API error:", data.error);
      return `Error fetching lounge information: ${data.error.message}`;
    }
    
    // Extract the text from the response
    let responseText = '';
    try {
      responseText = data.candidates[0].content.parts[0].text;
      return responseText;
    } catch (e) {
      console.error("Error parsing API response:", e);
      console.log("Full API response:", JSON.stringify(data));
      return "Sorry, I couldn't retrieve information about lounges at this airport. Please try again with a different airport name.";
    }
  } catch (error) {
    console.error("Error querying AI service:", error);
    return "I'm sorry, I encountered an issue while retrieving lounge information. Please try again later.";
  }
}
