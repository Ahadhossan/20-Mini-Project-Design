const result = document.querySelector(".result");

let list = [];

let keywords = [
  "Youtube",
  "AHAD",
  "AHAD channel",
  "AHAD programming channel",
  "Google",
  "Freelancer",
  "JavaScript tutorials",
  "Web developer",
  "Programming tutorials",
  "HTML CSS and JavaScript tutorials",
  "How to download video",
  "How to start programming channel",
  "How to learn javascript",
  "How to learn Angular",
  "How to learn React",
  "How to learn css",
];

const startsWith = (keyword, inputKeyword) =>
  keyword.toLocaleLowerCase().startsWith(inputKeyword.toLocaleLowerCase());

const includes = (keyword, inputKeyword) =>
  keyword.toLocaleLowerCase().includes(inputKeyword.toLocaleLowerCase());

const generateList = () => (list = list.map((data) => (data = liTag(data))));

const showList = (inputKeyword) => {
  result.classList.add("show");
  result.innerHTML = list.join("") || liTag(inputKeyword);
};

const hideList = () => {
  list = [];
  result.innerHTML = list;
  result.classList.remove("show");
};

const liTag = (value) =>
  `<li><i class="fa-solid fa-magnifying-glass"></i><a href="#">${value}</a></li>`;

const search = (e) => {
  let keyword = e.target.value;

  if (keyword) {
    filter(keyword);
    generateList();
    showList(keyword);
  } else hideList();
};

const filter = (inputKeyword) =>
  (list = keywords.filter(
    (keyword) =>
      startsWith(keyword, inputKeyword) || includes(keyword, inputKeyword)
  ));
