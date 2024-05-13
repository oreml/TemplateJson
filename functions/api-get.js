const processGetRequest = (event) => {
    let jsonData;
    try {
        jsonData = JSON.parse(decodeURIComponent(event.queryStringParameters.jsonData));
    } catch (error) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON data' }) };
    }

    const size = event.queryStringParameters.size;
    if (size) {
        const sizeInt = parseInt(size, 10);
        if (isNaN(sizeInt)) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Size must be a valid number' }) };
        }

        const responseData = Array.from({ length: sizeInt }, (_, index) => {
            return { ...jsonData, id: index + 1 };
        });

        return { statusCode: 200, body: JSON.stringify(responseData) };
    } else {
        return { statusCode: 200, body: JSON.stringify(jsonData) };
    }
};

exports.handler = async (event) => {
    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
    return processGetRequest(event);
};
