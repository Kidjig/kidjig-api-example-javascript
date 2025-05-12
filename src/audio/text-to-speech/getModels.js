// Get Available TTS Models Example

const provider = "elevenlabs"; // Options: elevenlabs, whisper, sarvam
const url = `https://api.kidjig.com/provider/api/v1/tts/${provider}/models`;

const headers = {
	"X-Api-Key": "your_api_key", // Replace with your KidJig API key
};

async function getModels() {
	try {
		const response = await fetch(url, {
			method: "GET",
			headers: headers,
		});

		const responseData = await response.json();

		if (responseData.success) {
			console.log("Available models:", responseData.data.models);
			return responseData.data.models;
		}
		console.error("Error:", responseData.message);
		return null;
	} catch (error) {
		console.error(`An error occurred: ${error.message}`);
		return null;
	}
}

// Call the function
getModels();
