// Assuming you are using the 'node-fetch' package in a Netlify Function
const fetch = require('node-fetch'); // only if you're making outbound HTTP requests

exports.handler = async function(event, context) {
    const headers = {
        "Access-Control-Allow-Origin": "*", // This will allow all domains
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    };

    if (event.httpMethod === "OPTIONS") {
        // To enable CORS
        return {
            statusCode: 204,
            headers,
        };
    }

    // Your regular POST handler code
    try {
        const data = JSON.parse(event.body);
        // Process the data, call another API, etc.
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: "Data received", data }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
