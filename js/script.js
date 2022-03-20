const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("seconds-number");
const thirdNumber = document.getElementById("third-number");
const fourthNumber = document.getElementById("fourth-number");
const fifthNumber = document.getElementById("fifth-number");
const sixthNumber = document.getElementById("sixth-number");

const getTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursArray = hours.toString().split("");
  const minutesArray = minutes.toString().split("");
  const secondsArray = seconds.toString().split("");

  //console.log(hoursArray[0], "", hoursArray[1]);
  return {
    firstNumbers: hours < 10 ? 0 : hoursArray[0],
    secondNumbers: hours < 10 ? hoursArray[0] : hoursArray[1],
    thirdNumbers: minutes < 10 ? 0 : minutesArray[0],
    fourthNumbers: minutes < 10 ? minutesArray[0] : minutesArray[1],
    fifthNumbers: seconds < 10 ? 0 : secondsArray[0],
    sixthNumbers: seconds < 10 ? secondsArray[0] : secondsArray[1],
  };
};

setInterval(() => {
  const number = getTime();
  firstNumber.textContent = number.firstNumbers;
  firstNumber.dataset.time = number.firstNumbers;
  secondNumber.textContent = number.secondNumbers;
  secondNumber.dataset.time = number.secondNumbers;
  thirdNumber.textContent = number.thirdNumbers;
  thirdNumber.dataset.time = number.thirdNumbers;
  fourthNumber.textContent = number.fourthNumbers;
  fourthNumber.dataset.time = number.fourthNumbers;
  fifthNumber.textContent = number.fifthNumbers;
  fifthNumber.dataset.time = number.fifthNumbers;
  sixthNumber.textContent = number.sixthNumbers;
  sixthNumber.dataset.time = number.sixthNumbers;
}, 1000);
