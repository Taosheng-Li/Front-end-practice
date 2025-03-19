# 回文检测项目反思

## 项目概述

这个项目的核心功能非常简单：读取输入框中的内容，并判断它是否为回文。尽管功能简单，但作为一个从头开始构建的项目，它帮助我巩固了 HTML、CSS 和 JavaScript 的基础知识，并学习了一些新技能。

## HTML 实现

HTML 结构相对简单，主要包含以下元素：

```html
<body>
  <main class="container">
    <div id="headline">
      <img src="alien-svgrepo-com.svg" />
      <h1>Palindrome Checker</h1>
    </div>

    <div id="palindrome-checker">
      <h1>Is is a Palindrome?</h1>
      <label for="text-input">Enter in text to check for a palindrome:</label>
      <div id="input-container">
        <input id="text-input" value type="text" />
        <button id="check-btn">Check</button>
      </div>
      <div class="result-div" id="result">
        <p id="result-text"></p>
      </div>
    </div>
    <div id="tip">
      <p>
        A palindrome is a word or sentence that's spelled the same way both
        forward and backward, ignoring punctuation, case, and spacing.
      </p>
    </div>
  </main>
  <script src="script.js"></script>
</body>
```

## CSS 挑战与学习

在 CSS 编写过程中，我遇到了一个看似简单但让我非常恼火的问题：无法让主要内容 div 居中。

尽管我已经设定了 div 的宽度，并尝试了各种常见的居中技巧（如`margin: 0 auto`），但 div 仍然不能在页面中居中显示。有趣的是，div 内部的内容倒是居中了，但 div 本身却不在页面中央。

经过长时间的尝试后，我最终查看了其他项目的源代码，才发现问题所在：**我没有将最外层元素设置为 flex 布局**。

解决方案是：

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* 其他样式... */
}
```

通过这次经历，我深入理解了：

- `display: flex`的基本用法
- flex 布局中`flex-direction: column`的作用
- 使用`align-items: center`进行垂直居中的方法
- 使用`justify-content: center`进行垂直居中的方法

## JavaScript 实现与问题解决

JavaScript 部分的核心功能是检测输入是否为回文。回文算法的实现非常简洁：

```javascript
const isPalindrome = (input) => {
  if (!input) return false;
  const lowercaseInput = input.toLowerCase();
  const nonAlphaRegex = /[^a-z\s]/g;
  if (nonAlphaRegex.test(lowercaseInput)) {
    alert("输入包含非字母字符！请只输入字母和空格。");
    return false;
  }

  const cleanedInput = lowercaseInput.replace(/\s/g, "");
  const reversed = cleanedInput.split("").reverse().join("");
  return cleanedInput === reversed;
};
```

我在实际代码中遇到了一个逻辑问题：我在页面加载时就获取了输入框的值（此时通常为空），然后将这个值存储在一个常量中。当用户点击按钮时，函数仍在使用页面加载时获取的初始值，而不是用户实际输入的新值。

修复方法是在点击事件处理函数中获取输入值，确保每次都能获取到最新的用户输入：

```javascript
const checkPalindrome = () => {
  // 在函数内部获取最新的输入值
  const textInput = document.getElementById("text-input").value;

  if (isPalindrome(textInput)) {
    result.innerText = `${textInput} is a palindrome.`;
  } else {
    result.innerText = `${textInput} is not a palindrome.`;
  }
};
```

## 技术要点总结

通过这个项目，我练习和学习了：

1. **正则表达式的实际应用**：

   - `/[^a-z\s]/g`：检测非字母和非空格字符
   - `/\s/g`：匹配所有空格字符

2. **字符串操作**：

   - `split("")`：将字符串拆分为字符数组
   - `reverse()`：反转数组
   - `join("")`：将数组合并回字符串

3. **DOM 操作**：

   - 获取元素引用
   - 添加事件监听器
   - 动态更新内容

4. **CSS Flexbox**：
   - 理解了 flex 布局的基本原理
   - 掌握了居中对齐的技巧

## 结论

虽然这是一个相对简单的练习项目，但它帮助我巩固了前端开发的基础知识，特别是在 CSS 布局和 JavaScript 事件处理方面。最重要的是，这个项目让我经历了从零开始构建一个完整功能的过程，加深了我对前端开发各个环节的理解。
