# KidJig API JavaScript Examples

This repository contains JavaScript examples demonstrating how to use the KidJig API for both chat and image generation services.

## Prerequisites

- Node.js 12.0 or higher
- KidJig API key (get your key at [KidJig Playground](https://platform.kidjig.com/api-keys))

## Usage
### Chat Completion
The chat example demonstrates how to use KidJig's chat completion API:

```bash
node src/chat/chat.js
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
        "cost": 96000000
    }
}
 ```

### Image Response
The image endpoints return status updates and final image URLs when processing is complete.

## Error Handling
All examples include basic error handling for common issues like network errors or invalid responses.

## Support
For additional support or questions, please refer to the [KidJig API documentation](https://kidjig.gitbook.io/kidjig-docs/getting-started/quickstart).


