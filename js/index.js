// ---------- FOOTER ----------
const body = document.body;
const footer = document.createElement('footer');
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Mahmoud Elrmly ${thisYear}`;
footer.appendChild(copyright);

// ---------- SKILLS ----------
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub"];
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');

skills.forEach(skill => {
  const skillItem = document.createElement('li');
  skillItem.textContent = skill;
  skillsList.appendChild(skillItem);
});

// ---------- MESSAGE FORM ----------
const messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> wrote: ${usersMessage}`;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => newMessage.remove());

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});

// ---------- FETCH GITHUB REPOS ----------
async function fetchRepositories() {
  try {
    const response = await fetch("https://api.github.com/users/m-ahmou-d/repos");
    if (!response.ok) throw new Error("Network response was not ok");

    const repositories = await response.json();

    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul");

    repositories.forEach(repo => {
      const project = document.createElement("li");
      // Optional stretch: make repo names clickable
      const link = document.createElement("a");
      link.href = repo.html_url;
      link.textContent = repo.name;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      project.appendChild(link);

      projectList.appendChild(project);
    });
  } catch (error) {
    console.error("Error fetching repositories:", error);
    const projectList = document.querySelector("#project-list");
    projectList.innerHTML = `<li style="color: red;">Failed to load projects.</li>`;
  }
}

fetchRepositories();