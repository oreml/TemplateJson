const express = require('express');
const server = express();

server.use(express.json()); // 使 express 能夠處理 JSON 請求體

// Handling POST request
server.post('/api', (req, res) => {
    const jsonData = req.body; // Get JSON data from POST request body
    const size = req.query.size; // Optionally, get 'size' from query parameters

    if (size) {
        const sizeInt = parseInt(size, 10);
        if (isNaN(sizeInt)) {
            return res.status(400).json({ error: 'Size must be a valid number' });
        }

        // Generate an array based on size, duplicating the jsonData
        const responseData = Array.from({ length: sizeInt }, (_, index) => {
            return { ...jsonData, id: index + 1 };
        });

        res.json(responseData);
    } else {
        // If no size provided, return the original JSON object
        res.json(jsonData);
    }
});


// 處理 GET 請求
server.get('/api', (req, res) => {
    // 嘗試解析 json 參數
    let jsonData;
    try {
        jsonData = JSON.parse(decodeURIComponent(req.query.jsonData));
    } catch (error) {
        return res.status(400).json({ error: 'Invalid JSON data' });
    }
    
    // 獲取 size 參數並檢查是否提供
    if (req.query.size) {
        const size = parseInt(req.query.size, 10);
        if (isNaN(size)) {
            return res.status(400).json({ error: 'Size must be a valid number' });
        }

        // 根據 size 生成一個數組作為示例
        const responseData = Array.from({ length: size }, (_, index) => {
            return { ...jsonData, id: index + 1 };
        });

        // 返回生成的數組
        res.json(responseData);
    } else {
        // 如果沒有提供 size，則直接返回原始 JSON 物件
        res.json(jsonData);
    }
});


server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});