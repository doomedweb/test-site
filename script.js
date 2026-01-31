console.log("Hello! The script is connected.");
console.log("System is online!");
let userName = "Sarah";
const role = "Developer";

console.log(userName);
function greetUser() {
  console.log("Welcome back, " + userName);
}
const myButton = document.querySelector("#msg-btn");
function handleClick() {
  alert("You clicked the button!");
  myButton.style.backgroundColor = "red";
  myButton.innerText = "Clicked!";
}
myButton.addEventListener("click", handleClick);
const themeButton = document.querySelector("#theme-btn");
const bodyElement = document.body;

function toggleTheme() {
  bodyElement.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleTheme);

const profile = [
  {
    name: "Sarah Smith",
    role: "UX Designer",
    skills: ["Figma", "UI Design", "Research"],
    location: "NEW YORK",
    photo: "https://imgs.search.brave.com/BAQVJ1mIdwk5kO303WPKD6LexrOeX_drdUCpZNFMryE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhLzAxY2I3/N2UxZjQ4YWMwZWQz/NGQxNzBkMzMxOWRl/OGI2NDk1OTAwNjYv/Mjk3XzY1XzE4OTFf/MTEzNC9tYXN0ZXIv/MTg5MS5qcGc_d2lk/dGg9NDY1JmRwcj0x/JnM9bm9uZSZjcm9w/PW5vbmU"
  },
  {
    name: "Mike Jones",
    role: "Rapper",
    skills: ["Fast Rap", "Tripple Entandre", "Producer"],
    location: "Compton",
    photo: "https://imgs.search.brave.com/3qi1_Mh51U1L1sVQ0giFLWMQcH8it3bx2jk151SNUII/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNzQy/Mjk1OTQvcGhvdG8v/bmV3LXlvcmstcmFw/cGVyLW1pa2Utam9u/ZXMtYXBwZWFycy1v/bnN0YWdlLWR1cmlu/Zy1tdHZzLXN1Y2tl/ci1mcmVlLWF0LXRo/ZS1tdHYtdGltZXMt/c3F1YXJlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1XMVZF/eHA3RGdJd0pZZ3o3/V0tUMGFTbkhtNmZP/UFhoS250ZmNvajBx/c3NVPQ"
  },
  {
    name: "Jessica Lee",
    role: "Product Manager",
    skills: ["Management", "Team Building", "Team Work"],
    location: "Paris",
    photo: "https://imgs.search.brave.com/NXlBiqaudLW9jovCb9qZuF7LDf8p5KIOKqsS0wuDxkI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5sb25kb250aGVh/dHJlZGlyZWN0LmNv/bS9BY3Rvci9KZXNz/aWNhTGVlL2FjdG9y/LWRldGFpbC1pbWFn/ZV8zMDE3OS5qcGc"
  }
  ];
const nameElement = document.querySelector("#name");
const locationElement = document.querySelector("#location");
const roleElement = document.querySelector("#role");
const photoElement = document.querySelector("#photo");
const nextButton = document.querySelector("#next-btn");
const skillsContainer = document.querySelector("#skills-container");

let currentIndex = 0;

function updateContent() {
  const currentUser = profile[currentIndex];
  
  nameElement.innerText = currentUser.name;
  locationElement.innerText = currentUser.location;
  roleElement.innerText= currentUser.role;
  photoElement.src = currentUser.photo;
 skillsContainer.innerHTML = "";
 currentUser.skills.forEach(skill => {
                             skillsContainer.innerHTML += `<span class="skill-badge">${skill}</span>`;
                             });
}

nextButton.addEventListener("click", function() {
  currentIndex = currentIndex + 1;
  if (currentIndex >= profile.length) {
    currentIndex = 0;
  }
  updateContent();
});