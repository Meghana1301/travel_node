exports.handler = async (event, context) => {
    const jsonData = require('../public/api/index.json'); // Load your JSON file
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Allow CORS for frontend requests
        },
        body: JSON.stringify(jsonData),
    };
};
