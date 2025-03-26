const updateUI = (array = []) => {
array.forEach((num, i) => {
const outputValueNode = document.getElementById(`output-value-${i}`);
outputValueNode.innerText = num;
})
}
num：
表示数组 array 中的当前元素（在你的代码中，是下拉菜单的值，例如 5、1）。
i：
表示当前元素的索引（从 0 开始，例如 0、1）。
作用：
forEach 遍历数组，将每个值（num）显示在对应的 DOM 元素（id="output-value-${i}"）中。
这个练习讲解了三个排序方法，bubble sort（冒泡排序）， selection sort（选择排序） 和 insertion sort（插入排序）。
第一次，我没太明白，以前刷过的排序题也忘记了，总之，就是原理没有弄明白。
