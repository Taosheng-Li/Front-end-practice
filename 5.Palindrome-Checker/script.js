const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result-text");

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

const checkPalindrome = () => {
  const textInput = document.getElementById("text-input").value;
  if (isPalindrome(textInput)) {
    result.innerText = `${textInput} is a palindrome.`;
  } else {
    result.innerText = `${textInput} is not a palindrome.`;
  }
};

checkBtn.addEventListener("click", checkPalindrome);
