exports.handler = async function(event, context) {
    const data = JSON.parse(event.body); // 解析 JSON 請求體
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "成功接收數據",
            yourData: data
        })
    };
};