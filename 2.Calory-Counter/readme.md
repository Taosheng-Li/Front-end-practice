# 卡路里追踪工具

## 功能

这是一个卡路里追踪工具，允许用户：

- **输入预算**：设置每日卡路里预算。
- **添加条目**：为不同类别（如早餐、午餐等）动态添加食物或运动的名称和卡路里值。
- **计算卡路里**：统计消耗的卡路里（食物）和燃烧的卡路里（运动），与预算比较，显示盈余（Surplus）或赤字（Deficit）。
- **清空表单**：重置所有输入和输出。

## 实现效果

- 用户通过下拉菜单选择类别（如早餐），点击“添加条目”按钮动态生成输入框。
- 输入卡路里值后，提交表单计算结果。
- 输出显示：
  - 预算卡路里。
  - 消耗卡路里。
  - 燃烧卡路里。
  - 剩余卡路里（正为赤字，负为盈余），并用颜色区分。
- **支持输入验证**，防止无效格式（如科学计数法 1e2）。

## 代码块设计意图

### 1. 全局变量声明

```javascript
const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;
```

**意图**：

- 获取页面中关键 DOM 元素（如表单、下拉菜单、按钮、输出区域），便于后续操作。
- `isError` 作为全局标志，用于追踪输入是否无效，控制计算流程。

### 2. `cleanInputString` 函数

```javascript
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}
```

**意图**：

- 清理输入字符串，移除加号（`+`）、减号（`-`）和空格（`\s`），确保只保留数字。
- 使用正则表达式 `/[+-\s]/g`（全局匹配），返回纯净的数字字符串。
- **目的**：为后续计算准备干净的输入数据。

### 3. `isInvalidInput` 函数

```javascript
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}
```

**意图**：

- 检查输入是否为科学计数法格式（如 `1e2`），这种格式被视为无效。
- 正则表达式 `/\d+e\d+/i` 匹配“数字 + e/E + 数字”。
- **目的**：防止用户输入不符合预期的格式。

### 4. `addEntry` 函数

```javascript
function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" />`;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}
```

**意图**：

- 根据下拉菜单选择（如 `"breakfast"`），定位对应的 `.input-container`。
- 计算当前条目数（`entryNumber`），生成新的输入框（名称和卡路里）。
- 使用模板字面量动态创建 HTML，`id` 和 `for` 属性基于类别和编号。
- `insertAdjacentHTML("beforeend", ...)` 将新条目添加到容器末尾。
- **目的**：动态扩展表单，允许用户添加多个条目。

### 5. `calculateCalories` 函数

```javascript
function calculateCalories(e) {
  e.preventDefault();
  isError = false;
  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
  if (isError) return;
  const consumedCalories =
    breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories =
    budgetCalories - consumedCalories + exerciseCalories;
  const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
  output.innerHTML = `...`;
  output.classList.remove("hide");
}
```

**意图**：

- **阻止** 表单默认提交（`e.preventDefault()`）。
- 获取各个类别（早餐、午餐等）的卡路里值，计算总和。
- 计算 **剩余卡路里**（`预算 - 消耗 + 燃烧`），判断盈余或赤字。
- **目的**：核心计算逻辑，展示卡路里追踪结果。

### 6. `getCaloriesFromInputs` 函数

```javascript
function getCaloriesFromInputs(list) {
  let calories = 0;
  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);
    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
  return calories;
}
```

**意图**：

- 遍历输入列表，清理并验证每个值。
- 如果发现 **无效输入**（如 `1e2`），弹出警告并设置 `isError`，终止计算。
- **目的**：从输入框提取并校验卡路里数据。

### 7. `clearForm` 函数

```javascript
function clearForm() {
  const inputContainers = Array.from(
    document.querySelectorAll(".input-container")
  );
  for (const container of inputContainers) {
    container.innerHTML = "";
  }
  budgetNumberInput.value = "";
  output.innerText = "";
  output.classList.add("hide");
}
```

**意图**：

- **清空** 所有 `.input-container` 的内容，重置预算输入和输出区域。
- **目的**：提供重置功能，恢复初始状态。

### 8. 事件监听器

```javascript
addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
clearButton.addEventListener("click", clearForm);
```

**目的**：

- 绑定交互事件，实现用户操作功能。

---

## 代码设计意图总结

- **模块化**：每个函数负责单一职责，易于维护。
- **动态性**：使用 `insertAdjacentHTML` 生成输入框。
- **输入验证**：确保数据有效性。
- **用户体验**：提供直观交互和结果显示。
