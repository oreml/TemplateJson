// 动态导入 node-fetch
let fetch;

exports.handler = async function(event, context) {
    if (!fetch) {
        fetch = (await import('node-fetch')).default;
    }

    // 以下是你的函数逻辑
    try {
        // 假设你需要处理一些逻辑，这里不进行外部API调用
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Function executed successfully" })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
