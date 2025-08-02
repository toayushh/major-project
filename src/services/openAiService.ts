export  const sendMessageToOpenAI = async (messages: { role: string, content: string }[]) => {
  try {
    // This is a simulated response. In production, you would use the proxy to call OpenAI
    const aiResponses = [
      "The Leapfrog Design methodology enables faster implementation of personalized treatments by using concurrent development and testing approaches.",
      "Personalized treatment involves tailoring healthcare approaches to individual patient characteristics, preferences, and needs.",
      "Research shows that personalized treatment approaches can significantly improve patient outcomes compared to one-size-fits-all protocols.",
      "Our case studies demonstrate successful implementation of personalized treatments across various healthcare contexts.",
      "The key to effective personalization is having structured decision points based on patient data and ongoing treatment response.",
      "I can help provide guidance on adapting the Leapfrog methodology to your specific healthcare context.",
      "Consider how your organization's workflow and data collection systems might support personalized treatment implementation."
    ];
    
    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
    
    // For a real implementation, uncomment this code and use the OpenAI proxy
    /*
    const response = await fetch('https://hooks.jdoodle.net/proxy?url=https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messages
      })
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.choices[0].message.content;
    */
    
    // Return the simulated response
    return randomResponse;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
};
 