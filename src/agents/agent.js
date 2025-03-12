// KidJig API Sample Usage
// This file demonstrates how to interact with the KidJig API for managing agents and chat.

// Base URL and headers
const base_url = "https://api.kidjig.com/agents/api/v1/";
// const url = "http://127.0.0.1:8000/api/v1";
// const url = "http://apivultra.kidjig.com/agents/api/v1/";
const headers = {
	"X-Api-Key": "your_api_key", // Replace with your KidJig API key
	"Content-Type": "application/json",
};

// Create a new agent
async function createAgent() {
	try {
		const response = await fetch(`${base_url}`, {
			method: "POST",
			headers: headers,
			body: JSON.stringify({
				name: "Deepak Agent",
				description: "An agent that can answer based on user query",
				agent_role:
					"You are a helpful assistant that can answer based on user query",
				agent_instructions: "Help users with their query",
				tools: ["Search", "Github"],
				provider_id: "OpenAI",
				model: "gpt-4o",
			}),
		});
		const responseData = await response.json();
		console.log("Created Agent:", responseData);
	} catch (error) {
		console.error(`Failed to create agent: ${error.message}`);
	}
}

// Get all agents
async function getAgents() {
	try {
		const response = await fetch(`${base_url}`, {
			method: "GET",
			headers: headers,
		});
		const responseData = await response.json();
		console.log("All Agents:", responseData);
	} catch (error) {
		console.error(`Failed to fetch agents: ${error.message}`);
	}
}

// Get a specific agent by ID
async function getAgentById(agentId) {
	try {
		const response = await fetch(`${base_url}/${agentId}`, {
			method: "GET",
			headers: headers,
		});
		const responseData = await response.json();
		console.log("Agent Details:", responseData);
	} catch (error) {
		console.error(`Failed to fetch agent ${agentId}: ${error.message}`);
	}
}

// Update an existing agent
async function updateAgent(agentId, updatedData) {
	try {
		const response = await fetch(`${base_url}/${agentId}`, {
			method: "PUT",
			headers: headers,
			body: JSON.stringify(updatedData),
		});
		const responseData = await response.json();
		console.log("Updated Agent:", responseData);
	} catch (error) {
		console.error(`Failed to update agent ${agentId}: ${error.message}`);
	}
}

// Delete an agent by ID
async function deleteAgent(agentId) {
	try {
		const response = await fetch(`${base_url}/${agentId}`, {
			method: "DELETE",
			headers: headers,
		});
		const responseData = await response.json();
		console.log("Deleted Agent:", responseData);
	} catch (error) {
		console.error(`Failed to delete agent ${agentId}: ${error.message}`);
	}
}

// Chat with an agent
async function chat(agentId, query) {
	try {
		const response = await fetch(`${base_url}/chat/${agentId}`, {
			method: "POST",
			headers: headers,
			body: JSON.stringify({ query }),
		});
		const responseData = await response.json();
		console.log("Chat Response:", responseData);
	} catch (error) {
		console.error(`Failed to chat with agent ${agentId}: ${error.message}`);
	}
}

// Fetch available tools
async function getTools() {
	try {
		const response = await fetch(`${base_url}/tools`, {
			method: "GET",
			headers: headers,
		});
		const responseData = await response.json();
		console.log("Available Tools:", responseData);
	} catch (error) {
		console.error(`Failed to fetch tools: ${error.message}`);
	}
}

// Fetch chat history by agent ID
async function getChatHistoryById(agentId) {
	try {
		const response = await fetch(`${base_url}/chat-history/${agentId}`, {
			method: "GET",
			headers: headers,
		});
		const responseData = await response.json();
		console.log(`Chat History for Agent ${agentId}:`, responseData);
	} catch (error) {
		console.error(
			`Failed to fetch chat history for agent ${agentId}: ${error.message}`,
		);
	}
}

// Clone an agent by ID
async function cloneAgent(agentId) {
	try {
		const response = await fetch(`${base_url}/clone/${agentId}`, {
			method: "POST",
			headers: headers,
		});
		const responseData = await response.json();
		console.log(`Cloned Agent ${agentId}:`, responseData);
	} catch (error) {
		console.error(`Failed to clone agent ${agentId}: ${error.message}`);
	}
}

// Fetch agent logs
async function getLogs() {
	try {
		const response = await fetch(`${base_url}/logs`, {
			method: "GET",
			headers: headers,
		});
		const responseData = await response.json();
		console.log("Agent Logs:", responseData);
	} catch (error) {
		console.error(`Failed to fetch logs: ${error.message}`);
	}
}

// Fetch logs by agent ID
async function getLogsById(agentId) {
	try {
		const response = await fetch(`${base_url}/logs/${agentId}`, {
			method: "GET",
			headers: headers,
		});
		const responseData = await response.json();
		console.log(`Logs for Agent ${agentId}:`, responseData);
	} catch (error) {
		console.error(
			`Failed to fetch logs for agent ${agentId}: ${error.message}`,
		);
	}
}

// Example Usage
// Uncomment the following lines to test the functions:

// createAgent();
// getAgents();
// getAgentById("67cbbd7d80ba7f4b5da9c754");
// updateAgent("67cbc00e80ba7f4b5da9c75f", { tools: ["Search"] });
// deleteAgent("67cbbd7d80ba7f4b5da9c754");
// chat("67cbbd7d80ba7f4b5da9c754", "Hello, how are you?");

// Uncomment to test the new functions
// getTools();
// getChatHistoryById("67cbc00e80ba7f4b5da9c75f");
// cloneAgent("67cbc00e80ba7f4b5da9c75f");
// getLogs();
// getLogsById("67cbbd7d80ba7f4b5da9c754");
