
// base_url =  "https://api.kidjig.com/provider/api/v1/{provider}/chat/completions"

const url = "https://api.kidjig.com/provider/api/v1/{provider}/chat/completions"; // Replace provider with your provider you want to use
const headers = {
    "X-Api-Key": "your_api_key", // Replace with your KidJig API key
    "Content-Type": "application/json",
};
const data = {
    "model": "modelId",  // modelId or modelName 
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
        console.log("Response Data", responseData);

    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

// Call the function
makeRequest();