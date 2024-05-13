const processPostRequest = (event) => {
    const jsonData = JSON.parse(event.body);
    const size = event.queryStringParameters.size;

    if (size) {
        const sizeInt = parseInt(size, 10);
        if (isNaN(sizeInt)) {
            return {
                statusCode: 400,
                headers: { "Access-Control-Allow-Origin": "*" },
                body: JSON.stringify({ error: 'Size must be a valid number' })
            };
        }

        const responseData = Array.from({ length: sizeInt }, (_, index) => {
            return { ...jsonData, id: index + 1 };
        });

        return {
            statusCode: 200,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify(responseData)
        };
    } else {
        return {
            statusCode: 200,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify(jsonData)
        };
    }
};

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: 'Method Not Allowed'
        };
    }
    return processPostRequest(event);
};
