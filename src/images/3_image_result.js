// Get the final image result
// The request_id should be obtained from a previous API call
const requestId = "your_request_id";  // Replace with your request ID

// Construct the API endpoint URL using the request ID
const url = `https://api.kidjig.com/provider/api/v1/image/result/flux-pro-v1.1-ultra/${requestId}`;

// Set up the required headers for the API request
// X-Api-Key is required for authentication
// Content-Type specifies we're expecting JSON response
const headers = {
    "X-Api-Key": "your_api_key",  // Replace with your KidJig API key
    "Content-Type": "application/json",
};

async function getImageResult() {
    try {
        // Make a GET request to the API endpoint
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });

        // Parse the JSON response
        const responseData = await response.json();

        // Print the response data for debugging/verification
        console.log("Result Response:", responseData);

    } catch (error) {
        // Handle any errors that occur during the request
        // This includes network errors, API errors, or JSON parsing errors
        console.error(`An error occurred: ${error.message}`);
    }
}

// Call the function
getImageResult();