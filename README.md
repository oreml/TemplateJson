# Netlify Function Link Generator

## 簡介

這個網頁應用允許用戶動態生成指向特定 Netlify Function 的 URL。用戶可以輸入 JSON 物件和一個整數大小，網頁將生成一個包含這些參數的 URL。

## 功能

- **動態連結生成**：用戶輸入 JSON 物件和大小，點擊生成按鈕後，網頁將顯示一個包含這些數據的 URL。
- **簡單介面**：提供用戶友好的界面，易於輸入數據並快速獲得結果。

## 使用說明

1. 打開網頁。
2. 在 "JSON Object" 文本框中輸入一個有效的 JSON 字串。
3. 在 "Size" 文本框中輸入一個整數。
4. 點擊 "Generate Link" 按鈕。
5. 下方將顯示一個超鏈接，包含你的輸入數據，你可以點擊這個鏈接訪問生成的 URL。

## 開發

這個項目使用 HTML, CSS, 和 JavaScript。

## 本地開發

要在本地運行和開發這個網頁應用，請遵循以下步驟：

1. 克隆儲存庫到本地機器。
2. 使用任何網頁服務器來托管這個項目，例如 `python -m http.server` 或者使用 Live Server 擴展在 VSCode 中。
3. 在瀏覽器中打開提供的本地服務器地址。

## 實用連結和示例

### 項目資源
- **Live Application**: [Netlify Link Generator Live](https://master--tempjsonresponse.netlify.app/)
- **API Documentation**: 目前還沒有正式的 API 文檔頁面，但可以直接通過下面的範例來測試 API 功能。

### 使用示例

#### 1. GET 請求範例
通過下面的 URL 調用 GET 方法，可以獲取根據 `size` 參數生成的 JSON 數組，每個元素包含從查詢參數 `jsonData` 解析的 JSON 數據和一個唯一的 ID。
- URL 範例：
https://master--tempjsonresponse.netlify.app/.netlify/functions/api-get?jsonData=%7B%22key%22%3A%22value%22%7D&size=2

使用此鏈接會返回如下 JSON 數據：
```json
[  {"key": "value", "id": 1},  {"key": "value", "id": 2}]
```
- POST 請求範例

 ```bash
curl -X POST -H "Content-Type: application/json" -d '{"key": "value"}' 'https://master--tempjsonresponse.netlify.app/.netlify/functions/api-post?size=2'
  ```


## 貢獻

如果你想要對這個項目做出貢獻，請遵循以下步驟：

1. Fork 這個儲存庫。
2. 創建一個新的分支 (`git checkout -b feature-branch`)。
3. 提交你的更改 (`git commit -am 'Add some feature'`)。
4. 推送到分支 (`git push origin feature-branch`)。
5. 提交一個新的 Pull Request。

## 問題

如果在使用過程中遇到任何問題，請在本儲存庫中開一個新的 issue。
