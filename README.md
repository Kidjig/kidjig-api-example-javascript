# KidJig API JavaScript Examples

This repository provides comprehensive JavaScript code examples and implementations for integrating with the KidJig API platform. It includes detailed examples for both the Chat Completion API and Image Generation API services, helping developers quickly get started with KidJig's powerful AI capabilities.

Key Features:
- Chat Completion API integration examples
- Image Generation API implementation samples
- Text-to-Speech API integration examples
- Agent API management and interaction

## Prerequisites

Before getting started, ensure you have the following:

- Node.js 12.0 or higher installed on your system
- A valid KidJig API key (obtain one from the [KidJig Playground](https://platform.kidjig.com/api-keys))
- Familiarity with the available models (see [KidJig Models Documentation](https://kidjig.gitbook.io/kidjig-docs/api-overview/text-models-llm/models))

## Authentication
Before using any API endpoint, you need to:
1. Obtain your API key from [KidJig Playground](https://platform.kidjig.com/api-keys)
2. Include it in all requests using the `X-Api-Key` header
3. Never expose your API key in client-side code

## Setup
1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```
   KIDJIG_API_KEY=your_api_key
   ```
4. Update the provider in API URLs with your chosen provider

## Usage

### Chat Completion API Integration

The KidJig Chat Completion API provides powerful natural language processing capabilities. This section demonstrates how to integrate and utilize these features in your applications.

KidJig offers two flexible integration methods for chat completion:

1. Direct REST API Integration
```javascript

base_url = "https://api.kidjig.com/provider/api/v1/{provider}/chat/completions"
headers = {
    "X-Api-Key": "your_api_key", #kidjig_api_key
    "Content-Type": "application/json"
}
data = {
    "model": "string",  # modelId or modelName
    "prompt": "What is the capital of France?",
    "stream": False,
    "config": {
        "temperature": 0.7,
        "maxOutputTokens": 4096,
        "topP": 1,
    }
}
fetch(base_url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data));
```

2. OpenAI-Compatible Client Integration

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.kidjig.com/provider/api/v1/{provider}",
    api_key="your_api_key"
)

completion = client.chat.completions.create(
    model="string",  # modelId or modelName
    messages=[{"role": "user", "content": "Hello!"}]
)
print(completion)
```



```bash
node src/chat/chat.js
node src/chat/openai_client.js
```

### Image Generation
The image generation example demonstrates how to use KidJig's image generation API. The image generation process involves three steps:

1. Generate an image:
```bash
node src/images/1_image_generate.js
 ```

2. Check generation status:
```bash
node src/images/2_image_status.js
 ```

3. Get the final result:
```bash
node src/images/3_image_result.js
 ```

### OCR (Optical Character Recognition)
The OCR example demonstrates how to extract text from documents and images using KidJig's OCR API powered by Mistral AI.

#### OCR Features
- Extract text from PDF documents and images
- Preserve document structure and formatting
- Support for document URLs, image URLs, and direct file uploads
- Returns results in markdown format

#### OCR Integration

KidJig offers three flexible methods for OCR processing:

1. Process a document URL:
```javascript
const url = "https://api.kidjig.com/provider/api/v1/mistralai/ocr/process";

const headers = {
  "X-Api-Key": "your_api_key", // Replace with your KidJig API key
  "Content-Type": "application/json"
};

const data = {
  model: "mistral-ocr-latest",
  documentUrl: "https://example.com/document.pdf" // Replace with your document URL
};

fetch(url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data));
```

2. Process an image URL:
```javascript
const data = {
  model: "mistral-ocr-latest",
  imageUrl: "https://example.com/image.jpg" // Replace with your image URL
};

// Use the same fetch call as above with this data
```

3. Upload and process a file:
```javascript
const formData = new FormData();
formData.append("model", "mistral-ocr-latest");
formData.append("file", fileObject); // File from input or fs.readFileSync

const headers = {
  "X-Api-Key": "your_api_key" // Replace with your KidJig API key
};

fetch(url, {
  method: "POST",
  headers: headers,
  body: formData
})
.then(response => response.json())
.then(data => console.log(data));
```

To run the OCR example:
```bash
node src/ocr/ocr.js
```

### Text-to-Speech API Integration

The KidJig Text-to-Speech API allows you to convert text into natural-sounding speech. This section demonstrates how to integrate and utilize these features in your applications.

#### Text-to-Speech Features
- Convert text to high-quality speech audio
- Multiple provider options (elevenlabs, whisper, sarvam)
- Various voice options
- Configurable output formats (mp3, wav, ogg)

#### Text-to-Speech Integration

KidJig offers two main Text-to-Speech operations:

1. Generate speech from text:
```javascript
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

fetch(url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    console.log("Audio URL:", data.data.audioUrl);
  }
});
```

2. Get available TTS models:
```javascript
const provider = "elevenlabs"; // Options: elevenlabs, whisper, sarvam
const url = `https://api.kidjig.com/provider/api/v1/tts/${provider}/models`;

const headers = {
  "X-Api-Key": "your_api_key", // Replace with your KidJig API key
};

fetch(url, {
  method: "GET",
  headers: headers
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    console.log("Available models:", data.data.models);
  }
});
```

To run the Text-to-Speech examples:
```bash
node src/audio/text-to-speech/generateSpeech.js
node src/audio/text-to-speech/getModels.js
```

## Configuration
Before running the examples:

1. Replace "your_api_key" with your actual KidJig API key in each file
2. For image status and result endpoints, replace "your_request_id" with the request ID received from the generation step

## API Endpoints
### Chat
- Chat completion: POST /api/v1/{provider}/chat/{model}

### Image
- Generate: POST /api/v1/image/generate/{modelid}
- Status: GET /api/v1/image/status/{modelid}/{request_id}
- Result: GET /api/v1/image/result/{modelid}/{request_id}

### Text-to-Speech
- Generate Speech: POST /api/v1/tts/{provider}/generate
- Get Available Models: GET /api/v1/tts/{provider}/models
## Response Examples
### Chat Response
```json
{
    "success": true,
    "message": "Request processed successfully",
    "data": {
        "response": "Response text",
        "usage": {
            "promptTokens": 14,
            "completionTokens": 9,
            "totalTokens": 23
        },
        "cost": 0.0001
    }
}
 ```

### Image Response
The image endpoints return status updates and final image URLs when processing is complete.

### Agent API Integration

The KidJig Agent API allows you to create and manage AI agents for various tasks. The example demonstrates complete CRUD operations and chat functionality with agents.

To use the Agent API examples:

Run the script:
```bash
node src/agents/agent.js
```

Available Agent Operations:

- Create a new agent with custom configurations
- Retrieve all agents
- Get specific agent details by ID
- Update existing agent properties
- Delete an agent
- Chat with an agent

## Base URL for Agent API
```bash
base_url = "https://api.kidjig.com/agents/api/v1"
```

## Agent API Endpoints
- Create: POST /api/v1/
- Get All: GET /api/v1/
- Get by ID: GET /api/v1/{agentId}
- Get Tools: GET /api/v1/tools
- Update: PUT /api/v1/{agentId}
- Delete: DELETE /api/v1/{agentId}
- Chat: POST /api/v1/chat/{agentId}
- Chat History by ID: GET /api/v1/chat-history/{agentId}
- Clone Agents By ID: POST /api/v1/clone/{agentId}
- Logs: GET /api/v1/logs
- Logs by ID: GET /api/v1/logs/{agentId}

## Error Handling
All examples include basic error handling for common issues like network errors or invalid responses.

## Error Handling Examples
Common API errors and how to handle them:

```json
{
    "error": {
        "code": "invalid_api_key",
        "message": "Invalid API key provided"
    }
}
```

```json
{
    "error": {
        "code": "rate_limit_exceeded",
        "message": "Rate limit exceeded, please try again later"
    }
}
```

## Support
For additional support or questions, please refer to the [KidJig API documentation](https://kidjig.gitbook.io/kidjig-docs/getting-started/quickstart).


### Community
Join our vibrant developer community:
- Discord: [Join KidJig Community](https://discord.gg/ptXkdZ72UW)


### Contact Us
Need direct assistance?
- Email Support: For direct inquiries, you can reach out to our founder at [founder@kidjig.com](mailto:founder@kidjig.com). We aim to respond to all emails promptly.
- Platform: [KidJig Platform](https://platform.kidjig.com)

Feel free to:
- Ask questions
- Report issues
- Request features
- Share your feedback
- Get technical support