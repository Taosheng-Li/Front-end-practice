const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

function getRandomIndex() {
  const RadomIndex = Math.floor(darkColorsArr.length * Math.random());
  return RadomIndex;
}
const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code"); // 这里表示获取html的一个元素，将这个元素用作后面函数的变量

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];
  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

const btn = document.querySelector("#btn-1");
btn.onclick = changeBackgroundColor;
