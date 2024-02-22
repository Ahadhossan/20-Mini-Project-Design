const inputDate = document.getElementById("date");
const result = document.querySelector(".result");

inputDate.max = new Date().toISOString().split("T")[0];
inputDate.value = new Date().toISOString().split("T")[0];

const calculateAge = () => {
  let birthDate = new Date(inputDate.value);

  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  let birthYear = birthDate.getFullYear();

  let today = new Date();

  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  let years, months, days;

  years = currentYear - birthYear;

  if (currentMonth >= birthMonth) months = currentMonth - birthMonth;
  else {
    years--;
    months = 12 + currentMonth - birthMonth;
  }

  if (currentDay >= birthDay) days = currentDay - birthDay;
  else {
    months--;
    days = getDaysInMonth(birthYear, birthMonth) + currentDay - birthDay;
  }

  if (months < 0) {
    months = 11;
    years--;
  }
  result.classList.add("active");
  result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
};

const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();
