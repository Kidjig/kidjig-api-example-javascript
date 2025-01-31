const url = "https://api.kidjig.com/provider/api/v1/openai/chat/gpt-4o";
const headers = {
    "X-Api-Key": "your_api_key", // Replace with your KidJig API key
    "Content-Type": "application/json",
};
const data = {
    prompt: "What is the capital of France?",
    stream: false,
    config: {
        temperature: 0.7,
        maxOutputTokens: 4096,
        topP: 1,
        topK: 40
    }
};

async function makeRequest() {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        // Extract specific information from the response
        const success = responseData.success;
        const message = responseData.message;
        const aiResponse = responseData.data.response;
        const usage = responseData.data.usage;
        const cost = responseData.data.cost;

        console.log(`Success: ${success}`);
        console.log(`Message: ${message}`);
        console.log(`AI Response: ${aiResponse}`);
        console.log(`Token Usage: ${usage}`);
        console.log(`Cost: ${cost}`);

    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

// Call the function
makeRequest();