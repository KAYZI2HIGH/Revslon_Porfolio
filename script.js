import { blogs } from "./constants.js";
import { projects } from "./constants.js";

const checkbox = document.querySelector("#menu-toggle");
const toggler = document.querySelector(".menu-icon");
const projectsGrid = document.getElementById("projects-grid");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    toggler.innerHTML = "&times;";
  } else {
    toggler.innerHTML = "&#9776;";
  }
});

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
        <img src="images/${project.image}.png" alt="${project.title}">
        <div class="card-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">
                ${project.technologies
                  .map((tech) => `<span>${tech}</span>`)
                  .join("")}
            </div>
            <div class="card-actions">
                <a href="${project.demoLink}" target="_blank">Demo</a>
                <a href="${project.codeLink}" target="_blank">Code</a>
            </div>
        </div>
    `;

  projectsGrid.appendChild(card);
});

const blogContainer = document.getElementById("blog-container");

blogs.forEach((blog) => {
  const blogCard = document.createElement("div");
  blogCard.className = "blog-card";

  blogCard.innerHTML = `
  <img src="${blog.image}" alt="${blog.title}" class="blog-image">
            <h2>${blog.title}</h2>
            <p class="meta">${blog.date} · ${blog.readTime}</p>
            <p>${blog.description}</p>
            <a href="${blog.link}">Read more</a>
        `;

  blogContainer.appendChild(blogCard);
});


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 


    document.querySelectorAll('.error-message').forEach(function (error) {
        error.style.display = 'none';
    });


    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('name-error').style.display = 'block';
        return;
    }


    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').style.display = 'block';
        return;
    }


    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('message-error').style.display = 'block';
        return;
    }


    alert('Form submitted successfully!');
});