# Pageflow

[繁體中文](#繁體中文) | [English](#english)

---

## 繁體中文

### 介紹

`Pageflow` 是一個輕量級的 JavaScript 腳本，使用 NProgress.js 來顯示自定義的頁面載入進度條。本腳本動態加載 NProgress 庫及相關樣式，並允許用戶自定義進度條的外觀。

### 特點

- 動態插入進度條的 CSS 樣式
- 頁面載入時顯示進度條，載入完成後自動隱藏
- 完全支持自定義，包括顏色、高度及過渡效果

### 安裝與使用

你可以通過以下方式將 `pageflow` 引入到你的網站：

#### 1. 靜態引入（在 HTML 文件中引入）

只需在你的 HTML 文件中，在關閉的 `</body>` 標籤之前加入以下代碼：

```html
<script src="https://oinktech.github.io/website-help002/script.js"></script>
```

範例：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>進度條範例</title>
</head>
<body>
    <h1>歡迎來到我的網站！</h1>
    <script src="https://oinktech.github.io/website-help002/script.js"></script>
</body>
</html>
```

#### 2. 動態引入（通過 JavaScript 動態載入）

你也可以通過 JavaScript 動態加載 `pageflow`，例如：

```html
<script>
  const script = document.createElement('script');
  script.src = "https://oinktech.github.io/website-help002/script.js";
  document.body.appendChild(script);
</script>
```

### 自定義進度條

你可以根據需要修改 `pageflow` 來自定義進度條的外觀。例如，要更改進度條的顏色，只需修改以下代碼段：

```javascript
/* 自定義進度條顏色 */
#nprogress .bar {
    background: #00bfff !important;  /* 更改此處的顏色 */
}
```

### 範例頁面

你可以在下面的頁面中查看和測試進度條的功能：

- [範例頁面連結](https://oinktech.github.io/website-help002/example.html)

### 授權

此項目基於 MIT 授權。

---

## English

### Introduction

`pageflow` is a lightweight JavaScript script that utilizes NProgress.js to display a custom progress bar during page loading. This script dynamically loads the NProgress library and associated styles, allowing users to fully customize the appearance of the progress bar.

### Features

- Dynamically inserts CSS styles for the progress bar.
- Displays the progress bar while the page is loading, and hides it once loading is complete.
- Fully customizable, including color, height, and transition effects.

### Installation and Usage

You can include `pageflow` in your website in two ways:

#### 1. Static inclusion (in HTML)

Simply add the following code before the closing `</body>` tag in your HTML file:

```html
<script src="https://oinktech.github.io/website-help002/script.js"></script>
```

Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progress Bar Example</title>
</head>
<body>
    <h1>Welcome to my website!</h1>
    <script src="https://oinktech.github.io/website-help002/script.js"></script>
</body>
</html>
```

#### 2. Dynamic inclusion (loading via JavaScript)

You can also load `pageflow` dynamically using JavaScript, like this:

```html
<script>
  const script = document.createElement('script');
  script.src = "https://oinktech.github.io/website-help002/script.js";
  document.body.appendChild(script);
</script>
```

### Customizing the Progress Bar

You can customize the appearance of the progress bar by editing `pageflow`. For example, to change the color of the progress bar, modify the following section:

```javascript
/* Custom progress bar color */
#nprogress .bar {
    background: #00bfff !important;  /* Change the color here */
}
```

### Example Page

You can view and test the progress bar functionality on the following page:

- [Example Page Link](https://oinktech.github.io/website-help002/example.html)

### License

This project is licensed under the MIT License.

---

