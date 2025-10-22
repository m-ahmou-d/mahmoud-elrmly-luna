// ---------- FOOTER ----------
const body = document.body;

// Creating and appending a <footer>
const footer = document.createElement('footer');
body.appendChild(footer);

// Grabing the current year dynamically
const today = new Date();
const thisYear = today.getFullYear();

// Creating a <p> for the copyright text
const copyright = document.createElement('p');
// Stretch goal: ©  :D
copyright.innerHTML = `&copy; Mahmoud Elrmly ${thisYear}`;

// Put this in the fotter
footer.appendChild(copyright);

// ---------- SKILLS ----------
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub"];

// Selecting the skills section and its <ul>
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');

// Looping through skills and add <li> for each
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}

// Message Form
const messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span> wrote: ${usersMessage}</span>`;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", function() {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});

// ---------- FETCH GITHUB REPOS (Lesson 13) ----------

// Fetch list of repositories from GitHub API
fetch("https://api.github.com/users/m-ahmou-d/repos")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse response as JSON
  })
  .then((repositories) => {
    console.log("Repositories fetched:", repositories);

    // Select Projects section and its <ul>
    const projectSection = document.querySelector("#Projects");
    const projectList = projectSection.querySelector("ul");

    // Loop through each repository and create a list item
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.textContent = repositories[i].name; // Repository name
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);

    // Display a friendly error message on the page :D
    const projectSection = document.querySelector("#Projects");
    const projectList = projectSection.querySelector("ul");
    const errorItem = document.createElement("li");
    errorItem.textContent = "Error loading repositories. Please try again later.";
    projectList.appendChild(errorItem);
  });
