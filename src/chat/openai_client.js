import OpenAI from 'openai';


const client = new OpenAI({
    baseURL: "https://api.kidjig.com/provider/api/v1/{provider}", // Replace provider with your provider you want to use
    apiKey: "your_api_key", // Replace with your KidJig API key
});

async function createCompletion() {
    const completion = await client.chat.completions.create({
        model: "string",  // modelId or modelName
        messages: [{ role: "user", content: "Hello!" }],
    });
    console.log(completion);
}

createCompletion();
