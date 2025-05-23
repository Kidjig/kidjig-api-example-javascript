// Generate Speech Example

const provider = "elevenlabs"; // Options: elevenlabs, whisper, sarvam
const url = `https://api.kidjig.com/provider/api/v1/tts/${provider}/generate`;

const headers = {
	"X-Api-Key": "your_api_key", // Replace with your KidJig API key
	"Content-Type": "application/json",
};

const data = {
	model: "eleven_multilingual_v2", // Options: eleven_turbo_v2, eleven_multilingual_v2, tts-1,bulbul:v1,bulbul:v2
	voice: "aria", // Voice ID from your system (e.g., aria, roger, sarah)
	text: "Hello, this is a test of the text to speech API.",
	config: {
		format: "mp3", // Optional: Audio format (mp3, wav, ogg)
	},
};

async function generateSpeech() {
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		});

		const responseData = await response.json();

		if (responseData.success) {
			console.log("Text-to-Speech conversion successful!");
			console.log("Audio URL:", responseData.data.audioUrl);
			return responseData.data.audioUrl;
		}
		console.error("Error:", responseData.message);
		return null;
	} catch (error) {
		console.error(`An error occurred: ${error.message}`);
		return null;
	}
}

// Call the function
generateSpeech();
