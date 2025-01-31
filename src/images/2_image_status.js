// Check image generation status by making an API request to KidJig
// The request_id parameter is used to track a specific image generation request
const requestId = "your_request_id";  // Replace with your request ID

// Construct the API endpoint URL for checking image status
// Uses the flux-pro-v1.1-ultra model endpoint
const url = `https://api.kidjig.com/provider/api/v1/image/status/flux-pro-v1.1-ultra/${requestId}`;

// Set up the required HTTP headers for the API request
// X-Api-Key is required for authentication
// Content-Type specifies we're sending/receiving JSON data
const headers = {
    "X-Api-Key": "your_api_key",  // Replace with your KidJig API key
    "Content-Type": "application/json",
};

async function checkImageStatus() {
    try {
        // Make a GET request to the status endpoint
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });

        // Parse the JSON response
        const responseData = await response.json();

        // Print the status response for debugging/monitoring
        console.log("Status Response:", responseData);

    } catch (error) {
        // Handle any errors that occur during the API request
        // This includes network errors, authentication errors, or invalid JSON responses
        console.error(`An error occurred: ${error.message}`);
    }
}

// Call the function
checkImageStatus();