// Define the API endpoint URL for image generation
// Using the flux-pro-v1.1-ultra modelid
const url = "https://api.kidjig.com/provider/api/v1/image/generate/flux-pro-v1.1-ultra";

// Set up request headers
// X-Api-Key: Authentication key for the API
// Content-Type: Specifies JSON format for the request body
const headers = {
    "X-Api-Key": "your_api_key",
    "Content-Type": "application/json",
};

// Define the request payload
// prompt: The text description of the image to be generated
const data = {
    prompt: "A dog with cat",
};

async function generateImage() {
    try {
        // Make POST request to the API
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });

        // Parse the JSON response
        const responseData = await response.json();

        // Print the response data for debugging/verification
        console.log("Generation Response:", responseData);

    } catch (error) {
        // Handle any other unexpected errors
        console.error(`An error occurred: ${error.message}`);
    }
}

// Call the function
generateImage();