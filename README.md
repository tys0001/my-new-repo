# 富國島 8 天 7 夜親子旅遊網站

使用 React + Vite + Tailwind CSS 製作的單頁旅遊行程網站，內容為繁體中文，主題聚焦在富國島 8 天 7 夜親子旅遊。

## 內容包含

- 行程總覽
- 每日行程時間軸卡片
- 每個行程節點的 Google Maps 連結按鈕
- 住宿資訊
- 預算表
- 行前準備清單

## 啟動方式

本機需先安裝 Node.js 18 以上版本。

```bash
npm install
npm run dev
```

正式建置：

```bash
npm run build
```

## 部署到 GitHub Pages

此專案已設定為部署到：

- [https://github.com/tys0001/my-new-repo](https://github.com/tys0001/my-new-repo)

網站部署網址會是：

- [https://tys0001.github.io/my-new-repo/](https://tys0001.github.io/my-new-repo/)

部署方式：

1. 將整個專案 push 到 `main` 分支
2. 到 GitHub repo 的 `Settings > Pages`
3. 確認 Source 使用 `GitHub Actions`
4. push 後會自動執行 `.github/workflows/deploy.yml`
