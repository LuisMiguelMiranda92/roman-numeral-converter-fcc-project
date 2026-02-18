const button = document.querySelector("#convert-btn");
const input = document.querySelector("#number");
const output = document.querySelector("#output");

const map = [
  {
    value: 1000,
    symbol: "M",
  },
  {
    value: 900,
    symbol: "CM",
  },
  {
    value: 500,
    symbol: "D",
  },
  {
    value: 400,
    symbol: "CD",
  },
  {
    value: 100,
    symbol: "C",
  },
  {
    value: 90,
    symbol: "XC",
  },
  {
    value: 50,
    symbol: "L",
  },
  {
    value: 40,
    symbol: "XL",
  },
  {
    value: 10,
    symbol: "X",
  },
  {
    value: 9,
    symbol: "IX",
  },
  {
    value: 5,
    symbol: "V",
  },
  {
    value: 4,
    symbol: "IV",
  },
  {
    value: 3,
    symbol: "III",
  },
  {
    value: 2,
    symbol: "II",
  },
  {
    value: 1,
    symbol: "I",
  },
];

const convertToRoman = (num) => {
  if (num === 0) {
    return "";
  }

  const item = map.find((i) => num >= i.value);

  return item.symbol + convertToRoman(num - item.value);
};

const buttonClicked = () => {
  if (!input.value) {
    output.textContent = "Please enter a valid number";
    return;
  } else if (input.value < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  } else if (input.value >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  } else {
    output.textContent = convertToRoman(parseInt(input.value));
  }
};

button.addEventListener("click", buttonClicked);
