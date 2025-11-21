const nav = document.querySelector(".nav");
const bars = document.querySelector(".bars");
bars.addEventListener("click", () => {
  nav.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.remove("open");
  }
});

const hItem = "RIFAT BIN ZAHED";
const heading = document.querySelector(".heading");

heading.textContent = ""; 

let i = 0;

const interval = setInterval(() => {
  if (i < hItem.length) {
    heading.textContent += hItem[i];
    i++;
  } else {
    clearInterval(interval);
  }
}, 100);

// contact form
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fields = document.querySelectorAll(".contact-form .form-control");

  const name = fields[0].value;
  const email = fields[1].value;
  const subject = fields[2].value;
  const message = fields[3].value;

  console.log(name, email, subject, message);

  alert("Message sent successfully");

  setTimeout(() => {
    contactForm.reset();
  }, 800);
});

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
