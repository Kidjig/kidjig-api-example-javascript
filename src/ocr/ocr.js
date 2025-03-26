// base_url = "https://api.kidjig.com/provider/api/v1/{provider}/ocr/process"

const url = "https://api.kidjig.com/provider/api/v1/mistralai/ocr/process"; // Using mistralai as the provider

// Function to process a document URL
async function processDocumentUrl() {
  const headers = {
    "X-Api-Key": "your_api_key", // Replace with your KidJig API key
    "Content-Type": "application/json"
  };

  const data = {
    model: "mistral-ocr-latest",
    documentUrl: "https://example.com/document.pdf" // Replace with your document URL
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    console.log("OCR Response Data:", responseData);
    return responseData;
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

// Function to process an image URL
async function processImageUrl() {
  const headers = {
    "X-Api-Key": "your_api_key", // Replace with your KidJig API key
    "Content-Type": "application/json"
  };

  const data = {
    model: "mistral-ocr-latest",
    imageUrl: "https://example.com/image.jpg" // Replace with your image URL
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    console.log("OCR Response Data:", responseData);
    return responseData;
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

// Function to upload and process a file
async function processFile(filePath) {
  const formData = new FormData();
  formData.append("model", "mistral-ocr-latest");
  
  // Create a file object from the file path
  // In a browser environment, you would use an input element to get the file
  // This example assumes Node.js with fs module
  const fs = require('node:fs');
  const file = new File([fs.readFileSync(filePath)], 'document.pdf', { type: 'application/pdf' });
  formData.append("file", file);

  const headers = {
    "X-Api-Key": "your_api_key" // Replace with your KidJig API key
    // Content-Type is automatically set by the FormData
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: formData
    });

    const responseData = await response.json();
    console.log("OCR Response Data:", responseData);
    return responseData;
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

// Example usage
// Uncomment the function you want to use
// processDocumentUrl();
// processImageUrl();
// processFile('path/to/your/document.pdf');
