# JavaScript 日期格式化练习总结

## 代码功能概述

这个练习实现了一个简单的日期格式化工具，允许用户通过下拉菜单选择不同的日期显示格式。代码获取当前日期，并根据用户的选择以不同格式显示。

## JavaScript 知识点

### 1. 日期处理

- 使用 `new Date()` 创建日期对象
- 通过 `getDate()`, `getMonth()`, `getFullYear()`, `getHours()` 和 `getMinutes()` 方法获取日期的各个部分
- 注意 `getMonth()` 返回的月份是从 0 开始的，因此需要 +1 进行修正

### 2. 字符串操作

- 使用模板字符串（`${}`）拼接日期格式
- 应用 `.split("-").reverse().join("-")` 方法链将 "dd-mm-yyyy" 格式转换为 "yyyy-mm-dd" 格式：
  - `split("-")` 将字符串分割成数组
  - `reverse()` 反转数组顺序
  - `join("-")` 将数组重新以"-"连接成字符串

### 3. 事件处理

- 使用 `addEventListener("change", () => {})` 监听下拉菜单的变化
- 通过 `switch/case` 结构根据选择的值执行不同的格式化逻辑

## HTML/CSS 收获

### 1. 定位机制 (position)

- **相对定位与绝对定位的关系**：
  - 当父元素设置 `position: relative` 时，子元素使用 `position: absolute` 会相对于父元素进行定位
  - 若父元素未设置 `position: relative`，则子元素的绝对定位会相对于最近的已定位祖先元素（通常是 `body`）
  - 这种定位关系可以让我们更精确地控制元素位置，避免布局脱离文档流

### 2. Select 元素操作

- `HTMLSelectElement` 允许通过 `.value` 属性获取当前选中的选项值
- `<option>` 元素的 `value` 属性定义了选项被选中时的值，例如：
  ```html
  <option value="dd-mm-yyyy">Day, Month, Year</option>
  <option value="yyyy-mm-dd">Year, Month, Day</option>
  <option value="mm-dd-yyyy-h-mm">Month, Day, Year, Hours, Minutes</option>
  ```
- 这些值可以在 JavaScript 中通过 `select.value` 获取并用于逻辑判断

### 3. 事件监听

- `"change"` 事件适用于监听 `<select>` 元素的选项变化
- 当用户选择不同选项时触发回调函数，更新日期显示格式

## 总结

这个练习虽然简单，但综合了多种前端技术，包括 DOM 操作、事件处理、日期格式化和 CSS 定位技术。特别是 CSS 定位机制和 Select 元素的操作是网页开发中的常用技巧，掌握这些知识点对构建更复杂的交互式页面非常有帮助。
